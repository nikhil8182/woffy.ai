import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, Camera, Scan, Sparkles, ChevronLeft, AlertCircle, Zap, History, Volume2, VolumeX, User, Smile, Heart, Dog, Play, Square, ThumbsUp, ThumbsDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hands } from '@mediapipe/hands';
import { FaceDetection } from '@mediapipe/face_detection';
import { Camera as MPCamera } from '@mediapipe/camera_utils';

const HAND_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [9, 10], [10, 11], [11, 12],
  [0, 13], [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
  [5, 9], [9, 13], [13, 17], [0, 17]
];

// Woffy-themed gesture commands
const WOFFY_GESTURES = {
  'Wave': {
    emoji: '👋',
    command: 'Come Here, Woffy!',
    description: 'Call Woffy to come to you',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/20',
    textColor: 'text-amber-400',
    response: 'Woffy is coming! 🐕',
    icon: Dog
  },
  'Open Palm': {
    emoji: '🖐️',
    command: 'Stay, Woffy!',
    description: 'Tell Woffy to stay and wait',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/20',
    textColor: 'text-blue-400',
    response: 'Woffy stays still... 🐕',
    icon: Square
  },
  'Fist': {
    emoji: '✊',
    command: 'Stop, Woffy!',
    description: 'Stop current action immediately',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-500/20',
    textColor: 'text-red-400',
    response: 'Woffy stops! ⏹️',
    icon: Square
  },
  'Thumbs Up': {
    emoji: '👍',
    command: 'Good Boy!',
    description: 'Praise Woffy - positive reinforcement',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-500/20',
    textColor: 'text-emerald-400',
    response: 'Woffy is happy! 🐕💚',
    icon: Heart
  },
  'Thumbs Down': {
    emoji: '👎',
    command: 'Bad Boy!',
    description: 'Negative feedback for Woffy',
    color: 'from-slate-500 to-gray-600',
    bgColor: 'bg-slate-500/20',
    textColor: 'text-slate-400',
    response: 'Woffy looks sad... 🐕😢',
    icon: ThumbsDown
  },
  'Peace Sign': {
    emoji: '✌️',
    command: 'Play Time!',
    description: 'Start playing with Woffy',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/20',
    textColor: 'text-violet-400',
    response: 'Woffy wants to play! 🎾',
    icon: Play
  },
  'I Love You': {
    emoji: '🤟',
    command: 'I Love You, Woffy!',
    description: 'Show affection to Woffy',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/20',
    textColor: 'text-pink-400',
    response: 'Woffy loves you too! 💕',
    icon: Heart
  },
  'Rock On': {
    emoji: '🤘',
    command: 'Get Excited!',
    description: 'Make Woffy excited and playful',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/20',
    textColor: 'text-orange-400',
    response: 'Woffy is super excited! 🎉',
    icon: Zap
  },
  'Call Me': {
    emoji: '🤙',
    command: 'Speak, Woffy!',
    description: 'Ask Woffy to bark or speak',
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-500/20',
    textColor: 'text-cyan-400',
    response: 'Woof! Woof! 🐕🔊',
    icon: Phone
  },
  'OK Sign': {
    emoji: '👌',
    command: 'Perfect, Woffy!',
    description: 'Tell Woffy everything is okay',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/20',
    textColor: 'text-indigo-400',
    response: 'Woffy feels confident! ✨',
    icon: ThumbsUp
  },
  'Pointing': {
    emoji: '👆',
    command: 'Go There, Woffy!',
    description: 'Point direction for Woffy to go',
    color: 'from-teal-500 to-emerald-500',
    bgColor: 'bg-teal-500/20',
    textColor: 'text-teal-400',
    response: 'Woffy goes that way! 🐕➡️',
    icon: Dog
  },
  'Three': {
    emoji: '3️⃣',
    command: 'Fetch!',
    description: 'Tell Woffy to fetch something',
    color: 'from-lime-500 to-green-500',
    bgColor: 'bg-lime-500/20',
    textColor: 'text-lime-400',
    response: 'Woffy runs to fetch! 🎾🐕',
    icon: Play
  },
  'Heart': {
    emoji: '🫶',
    command: 'Love You Too!',
    description: 'Make a heart with your hand',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-500/20',
    textColor: 'text-rose-400',
    response: 'Woffy loves you too! 💖🐕',
    icon: Heart
  }
};

const GestureDemo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cameraError, setCameraError] = useState(null);
  const [detectedGesture, setDetectedGesture] = useState(null);
  const [woffyResponse, setWoffyResponse] = useState(null);
  const [confidence, setConfidence] = useState(0);
  const [fps, setFps] = useState(0);
  const [handCount, setHandCount] = useState(0);
  const [faceDetected, setFaceDetected] = useState(false);
  const [faceCount, setFaceCount] = useState(0);
  const [gestureHistory, setGestureHistory] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [woffyMood, setWoffyMood] = useState('happy'); // happy, excited, sad, calm
  const lastFrameTime = useRef(Date.now());
  const frameCount = useRef(0);
  const gestureBuffer = useRef([]);
  const lastGesture = useRef(null);
  const faceDetectionRef = useRef(null);
  const handsRef = useRef(null);

  const distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow((p1.z || 0) - (p2.z || 0), 2));
  };

  const recognizeGesture = useCallback((landmarks) => {
    if (!landmarks || landmarks.length === 0) return null;

    const hand = landmarks[0];
    
    const wrist = hand[0];
    const thumbTip = hand[4];
    const thumbIP = hand[3];
    const thumbMCP = hand[2];
    const thumbCMC = hand[1];
    const indexTip = hand[8];
    const indexDIP = hand[7];
    const indexPIP = hand[6];
    const indexMCP = hand[5];
    const middleTip = hand[12];
    const middleDIP = hand[11];
    const middlePIP = hand[10];
    const middleMCP = hand[9];
    const ringTip = hand[16];
    const ringDIP = hand[15];
    const ringPIP = hand[14];
    const ringMCP = hand[13];
    const pinkyTip = hand[20];
    const pinkyDIP = hand[19];
    const pinkyPIP = hand[18];
    const pinkyMCP = hand[17];

    // Calculate palm center for better curl detection
    const palmCenter = {
      x: (wrist.x + indexMCP.x + pinkyMCP.x + middleMCP.x) / 4,
      y: (wrist.y + indexMCP.y + pinkyMCP.y + middleMCP.y) / 4,
      z: (wrist.z + indexMCP.z + pinkyMCP.z + middleMCP.z) / 4
    };

    // Better finger curl detection using distance to palm
    const indexCurled = distance(indexTip, palmCenter) < distance(indexMCP, palmCenter) * 1.1;
    const middleCurled = distance(middleTip, palmCenter) < distance(middleMCP, palmCenter) * 1.1;
    const ringCurled = distance(ringTip, palmCenter) < distance(ringMCP, palmCenter) * 1.1;
    const pinkyCurled = distance(pinkyTip, palmCenter) < distance(pinkyMCP, palmCenter) * 1.1;
    
    // Alternative curl detection using fingertip to PIP distance
    const indexCurled2 = distance(indexTip, indexPIP) < distance(indexMCP, indexPIP) * 0.8;
    const middleCurled2 = distance(middleTip, middlePIP) < distance(middleMCP, middlePIP) * 0.8;
    const ringCurled2 = distance(ringTip, ringPIP) < distance(ringMCP, ringPIP) * 0.8;
    const pinkyCurled2 = distance(pinkyTip, pinkyPIP) < distance(pinkyMCP, pinkyPIP) * 0.8;

    // Combine both methods for robust curl detection
    const isIndexCurled = indexCurled || indexCurled2 || (indexTip.y > indexPIP.y);
    const isMiddleCurled = middleCurled || middleCurled2 || (middleTip.y > middlePIP.y);
    const isRingCurled = ringCurled || ringCurled2 || (ringTip.y > ringPIP.y);
    const isPinkyCurled = pinkyCurled || pinkyCurled2 || (pinkyTip.y > pinkyPIP.y);

    // Extended finger detection (opposite of curled)
    const isIndexExtended = !isIndexCurled && indexTip.y < indexPIP.y;
    const isMiddleExtended = !isMiddleCurled && middleTip.y < middlePIP.y;
    const isRingExtended = !isRingCurled && ringTip.y < ringPIP.y;
    const isPinkyExtended = !isPinkyCurled && pinkyTip.y < pinkyPIP.y;
    
    // Thumb detection
    const thumbExtendedDist = distance(thumbTip, wrist) > distance(thumbMCP, wrist) * 1.2;
    const thumbExtendedFromPalm = distance(thumbTip, palmCenter) > distance(thumbMCP, palmCenter) * 1.3;
    const isThumbExtended = thumbExtendedDist || thumbExtendedFromPalm;
    const isThumbCurled = distance(thumbTip, indexMCP) < 0.08 || distance(thumbTip, palmCenter) < distance(thumbMCP, palmCenter);

    const isThumbUp = thumbTip.y < thumbMCP.y && thumbTip.y < wrist.y - 0.05;
    const isThumbDown = thumbTip.y > wrist.y + 0.05;

    const thumbIndexDistance = distance(thumbTip, indexTip);
    const isThumbIndexTouching = thumbIndexDistance < 0.06;

    // Count curled fingers for fist detection
    const curledCount = [isIndexCurled, isMiddleCurled, isRingCurled, isPinkyCurled].filter(Boolean).length;
    const extendedCount = [isIndexExtended, isMiddleExtended, isRingExtended, isPinkyExtended].filter(Boolean).length;

    // Better thumb up/down detection - thumb must be clearly pointing up/down
    const thumbPointingUp = thumbTip.y < thumbMCP.y - 0.08 && thumbTip.y < indexMCP.y;
    const thumbPointingDown = thumbTip.y > thumbMCP.y + 0.08 && thumbTip.y > wrist.y;
    
    // Thumb tucked in (for fist) - thumb is near the curled fingers, not sticking out
    const thumbTuckedIn = distance(thumbTip, middleMCP) < 0.12 || distance(thumbTip, indexPIP) < 0.1;
    const thumbStickingOut = distance(thumbTip, palmCenter) > distance(indexMCP, palmCenter) * 1.3;

    let gestureName = null;
    let conf = 50;

    // THUMBS UP - Must check first! Thumb clearly pointing UP, all fingers curled
    if (thumbPointingUp && thumbStickingOut && curledCount >= 3 && extendedCount === 0) {
      gestureName = 'Thumbs Up'; conf = 96;
    }
    // THUMBS DOWN - Thumb clearly pointing DOWN, all fingers curled
    else if (thumbPointingDown && thumbStickingOut && curledCount >= 3 && extendedCount === 0) {
      gestureName = 'Thumbs Down'; conf = 94;
    }
    // FIST - All four fingers curled, thumb NOT pointing up/down (tucked or neutral)
    else if (curledCount >= 3 && extendedCount === 0 && !thumbPointingUp && !thumbPointingDown) {
      gestureName = 'Fist'; conf = 95;
    }
    // OK Sign - Thumb and index touching, other fingers extended
    else if (isThumbIndexTouching && isMiddleExtended && isRingExtended && isPinkyExtended) {
      gestureName = 'OK Sign'; conf = 96;
    }
    // Open Palm - All fingers extended
    else if (extendedCount >= 4 && isThumbExtended) {
      gestureName = 'Open Palm'; conf = 98;
    }
    // Peace Sign - Index and middle extended, others curled
    else if (isIndexExtended && isMiddleExtended && !isRingExtended && !isPinkyExtended) {
      gestureName = 'Peace Sign'; conf = 93;
    }
    // I Love You - Thumb, index, and pinky extended
    else if (isThumbExtended && isIndexExtended && !isMiddleExtended && !isRingExtended && isPinkyExtended) {
      gestureName = 'I Love You'; conf = 91;
    }
    // Rock On - Index and pinky extended, no thumb
    else if (!isThumbExtended && isIndexExtended && !isMiddleExtended && !isRingExtended && isPinkyExtended) {
      gestureName = 'Rock On'; conf = 90;
    }
    // Call Me - Thumb and pinky extended
    else if (isThumbExtended && !isIndexExtended && !isMiddleExtended && !isRingExtended && isPinkyExtended) {
      gestureName = 'Call Me'; conf = 89;
    }
    // Pointing - Only index extended
    else if (isIndexExtended && !isMiddleExtended && !isRingExtended && !isPinkyExtended) {
      gestureName = 'Pointing'; conf = 92;
    }
    // Three - Index, middle, ring extended
    else if (isIndexExtended && isMiddleExtended && isRingExtended && !isPinkyExtended) {
      gestureName = 'Three'; conf = 88;
    }
    // Heart - Thumb and index tips touching, forming heart shape, other fingers curled
    else if (isThumbIndexTouching && isMiddleCurled && isRingCurled && isPinkyCurled) {
      gestureName = 'Heart'; conf = 94;
    }

    if (gestureName && WOFFY_GESTURES[gestureName]) {
      const gestureData = WOFFY_GESTURES[gestureName];
      return {
        name: gestureName,
        emoji: gestureData.emoji,
        command: gestureData.command,
        response: gestureData.response,
        color: gestureData.color,
        confidence: conf
      };
    }

    return null;
  }, []);

  const stabilizeGesture = useCallback((newGesture) => {
    if (!newGesture) return null;

    gestureBuffer.current.push(newGesture.name);
    
    if (gestureBuffer.current.length > 5) {
      gestureBuffer.current.shift();
    }

    const counts = {};
    gestureBuffer.current.forEach(g => {
      counts[g] = (counts[g] || 0) + 1;
    });

    let mostCommon = null;
    let maxCount = 0;
    Object.entries(counts).forEach(([gesture, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostCommon = gesture;
      }
    });

    if (maxCount >= 3) {
      const gestureData = WOFFY_GESTURES[mostCommon];
      if (gestureData) {
        return {
          ...newGesture,
          name: mostCommon,
          command: gestureData.command,
          response: gestureData.response,
          color: gestureData.color,
          emoji: gestureData.emoji
        };
      }
    }

    return newGesture;
  }, []);

  const updateWoffyMood = useCallback((gestureName) => {
    switch (gestureName) {
      case 'Thumbs Up':
      case 'I Love You':
      case 'OK Sign':
        setWoffyMood('happy');
        break;
      case 'Peace Sign':
      case 'Rock On':
      case 'Three':
        setWoffyMood('excited');
        break;
      case 'Thumbs Down':
        setWoffyMood('sad');
        break;
      case 'Fist':
      case 'Open Palm':
        setWoffyMood('calm');
        break;
      default:
        setWoffyMood('happy');
    }
  }, []);

  const updateHistory = useCallback((gesture) => {
    if (gesture && gesture.name !== lastGesture.current) {
      lastGesture.current = gesture.name;
      
      // Show Woffy's response
      setWoffyResponse(gesture.response);
      setTimeout(() => setWoffyResponse(null), 2000);
      
      // Update mood
      updateWoffyMood(gesture.name);
      
      setGestureHistory(prev => {
        const newHistory = [{ ...gesture, timestamp: Date.now() }, ...prev].slice(0, 10);
        return newHistory;
      });

      if (soundEnabled) {
        const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
        audio.volume = 0.2;
        audio.play().catch(() => {});
      }
    }
  }, [soundEnabled, updateWoffyMood]);

  useEffect(() => {
    let camera = null;

    const initializeTracking = async () => {
      try {
        faceDetectionRef.current = new FaceDetection({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
        });

        faceDetectionRef.current.setOptions({
          model: 'short',
          minDetectionConfidence: 0.5,
        });

        faceDetectionRef.current.onResults((results) => {
          setFaceDetected(results.detections?.length > 0);
          setFaceCount(results.detections?.length || 0);
        });

        handsRef.current = new Hands({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
        });

        handsRef.current.setOptions({
          maxNumHands: 2,
          modelComplexity: 1,
          minDetectionConfidence: 0.75,
          minTrackingConfidence: 0.6,
        });

        handsRef.current.onResults((results) => {
          frameCount.current++;
          const now = Date.now();
          if (now - lastFrameTime.current >= 1000) {
            setFps(frameCount.current);
            frameCount.current = 0;
            lastFrameTime.current = now;
          }

          const canvas = canvasRef.current;
          const ctx = canvas?.getContext('2d');
          if (!canvas || !ctx) return;

          ctx.save();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

          if (results.multiHandLandmarks?.length > 0) {
            setHandCount(results.multiHandLandmarks.length);
            
            for (const landmarks of results.multiHandLandmarks) {
              ctx.shadowColor = '#818cf8';
              ctx.shadowBlur = 15;

              HAND_CONNECTIONS.forEach(([start, end]) => {
                ctx.beginPath();
                ctx.moveTo(landmarks[start].x * canvas.width, landmarks[start].y * canvas.height);
                ctx.lineTo(landmarks[end].x * canvas.width, landmarks[end].y * canvas.height);
                ctx.strokeStyle = 'rgba(129, 140, 248, 0.8)';
                ctx.lineWidth = 3;
                ctx.stroke();
              });

              landmarks.forEach((point, index) => {
                ctx.beginPath();
                ctx.arc(point.x * canvas.width, point.y * canvas.height, index === 0 ? 8 : (index % 4 === 0 ? 6 : 4), 0, 2 * Math.PI);
                ctx.fillStyle = index % 4 === 0 ? '#a855f7' : '#6366f1';
                ctx.fill();
              });

              ctx.shadowBlur = 0;
            }

            const rawGesture = recognizeGesture(results.multiHandLandmarks);
            const stableGesture = stabilizeGesture(rawGesture);
            
            if (stableGesture) {
              setDetectedGesture(stableGesture);
              setConfidence(stableGesture.confidence);
              updateHistory(stableGesture);
            }
          } else {
            setHandCount(0);
            setDetectedGesture(null);
            setConfidence(0);
            gestureBuffer.current = [];
          }

          ctx.restore();
        });

        if (videoRef.current) {
          camera = new MPCamera(videoRef.current, {
            onFrame: async () => {
              if (handsRef.current && videoRef.current) await handsRef.current.send({ image: videoRef.current });
              if (faceDetectionRef.current && videoRef.current) await faceDetectionRef.current.send({ image: videoRef.current });
            },
            width: 1280,
            height: 720,
          });

          await camera.start();
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error initializing tracking:', error);
        setCameraError('Unable to access camera. Please allow camera permissions and try again.');
        setIsLoading(false);
      }
    };

    initializeTracking();

    return () => {
      if (camera) camera.stop();
      if (handsRef.current) handsRef.current.close();
      if (faceDetectionRef.current) faceDetectionRef.current.close();
    };
  }, [recognizeGesture, stabilizeGesture, updateHistory]);

  const getMoodEmoji = () => {
    switch (woffyMood) {
      case 'happy': return '🐕😊';
      case 'excited': return '🐕🎉';
      case 'sad': return '🐕😢';
      case 'calm': return '🐕😌';
      default: return '🐕';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Header */}
      <header className="p-4 md:p-6 flex items-center justify-between border-b border-white/10 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/specs" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ChevronLeft size={20} />
          <span className="hidden sm:inline">Back to Specs</span>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} className="text-slate-500" />}
          </button>
          
          {/* Woffy Mood */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <span className="text-lg">{getMoodEmoji()}</span>
            <span className="text-sm font-medium text-amber-400 capitalize">{woffyMood}</span>
          </div>
          
          {/* Face Detection */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
            faceDetected ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-slate-800/50 border border-slate-700'
          }`}>
            <User size={16} className={faceDetected ? 'text-emerald-400' : 'text-slate-500'} />
            <span className={`text-sm font-medium ${faceDetected ? 'text-emerald-400' : 'text-slate-500'}`}>
              {faceDetected ? 'Owner Detected' : 'No Face'}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto w-full">
        
        {/* Camera Feed */}
        <div className="flex-1 flex flex-col">
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 font-medium text-sm border border-amber-500/30">
              <Dog size={16} />
              <span>Woffy Gesture Control</span>
            </div>
            <div className="text-sm text-slate-500 font-mono">{fps > 0 && `${fps} FPS`}</div>
          </div>
          
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/10">
            <video ref={videoRef} className="hidden" playsInline autoPlay muted />
            
            <canvas
              ref={canvasRef}
              width={1280}
              height={720}
              className="w-full h-full object-contain bg-slate-900"
              style={{ transform: 'scaleX(-1)' }}
            />

            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-24 relative mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-4xl">🐕</span>
                  </div>
                  <p className="text-white font-medium text-lg">Waking up Woffy...</p>
                  <p className="text-slate-500 text-sm mt-2">Loading gesture recognition</p>
                </div>
              </div>
            )}

            {/* Camera Error */}
            {cameraError && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/95">
                <div className="text-center p-8 max-w-md">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Camera Access Required</h3>
                  <p className="text-slate-400 mb-6">{cameraError}</p>
                  <button onClick={() => window.location.reload()} className="px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-500 transition-colors">
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {/* Scanning Corners */}
            {!isLoading && !cameraError && (
              <>
                <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-amber-500/50 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-amber-500/50 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-amber-500/50 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-amber-500/50 rounded-br-lg"></div>
              </>
            )}

            {/* Owner Detected Badge */}
            <AnimatePresence>
              {faceDetected && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute top-4 right-20 px-4 py-2 bg-emerald-500/90 backdrop-blur-md rounded-xl flex items-center gap-2 shadow-lg"
                >
                  <Smile className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm">Owner Detected!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Woffy Response */}
            <AnimatePresence>
              {woffyResponse && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 px-6 py-3 bg-amber-500/90 backdrop-blur-md rounded-2xl shadow-xl"
                >
                  <span className="text-white font-bold text-lg">{woffyResponse}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Detected Command Display */}
            <AnimatePresence mode="wait">
              {detectedGesture && !isLoading && (
                <motion.div
                  key={detectedGesture.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-gradient-to-r ${detectedGesture.color} backdrop-blur-md rounded-2xl flex items-center gap-5 shadow-2xl border border-white/20`}
                >
                  <motion.span 
                    className="text-5xl"
                    initial={{ scale: 0.5, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 10 }}
                  >
                    {detectedGesture.emoji}
                  </motion.span>
                  <div>
                    <div className="text-white font-black text-xl">{detectedGesture.command}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-20 h-1.5 bg-white/30 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-white rounded-full" animate={{ width: `${confidence}%` }} />
                      </div>
                      <span className="text-white/80 text-sm font-medium">{confidence}%</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/20">
            <p className="text-amber-200 text-sm text-center">
              <Dog className="inline w-4 h-4 mr-2 text-amber-400" />
              Use hand gestures to communicate with Woffy! Try <span className="text-white font-medium">👍 Good Boy</span>, <span className="text-white font-medium">✊ Stop</span>, <span className="text-white font-medium">✌️ Play Time</span>, or <span className="text-white font-medium">🫶 Love You</span>
            </p>
          </div>

          {/* Beta Notice */}
          <div className="mt-3 p-3 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-xl border border-violet-500/20">
            <div className="flex items-center justify-center gap-2">
              <span className="px-2 py-0.5 bg-violet-500/30 text-violet-300 text-xs font-bold rounded-full uppercase tracking-wider">Beta</span>
              <p className="text-violet-200/80 text-xs text-center">
                This is an early beta preview. We'll improve gesture accuracy & add more commands before launch!
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-4">
          {/* Woffy Status */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/30">
                🐕
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Woffy</h3>
                <p className="text-amber-400 text-sm capitalize">Mood: {woffyMood}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-3 bg-slate-900/50 rounded-xl">
                <div className={`text-2xl font-bold ${faceDetected ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {faceDetected ? '✓' : '—'}
                </div>
                <div className="text-xs text-slate-400">Owner</div>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl">
                <div className={`text-2xl font-bold ${handCount > 0 ? 'text-indigo-400' : 'text-slate-500'}`}>
                  {handCount}
                </div>
                <div className="text-xs text-slate-400">Hands</div>
              </div>
            </div>
          </div>

          {/* Command History */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <History className="w-4 h-4 text-amber-400" />
              Command History
            </h3>
            {gestureHistory.length === 0 ? (
              <p className="text-slate-500 text-sm text-center py-4">No commands yet</p>
            ) : (
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {gestureHistory.slice(0, 5).map((gesture, i) => (
                  <motion.div
                    key={gesture.timestamp}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1 - i * 0.15, x: 0 }}
                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/50"
                  >
                    <span className="text-xl">{gesture.emoji}</span>
                    <span className="text-sm text-slate-300 flex-1 truncate">{gesture.command}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Gesture Commands */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Woffy Commands
            </h3>
            <div className="grid grid-cols-2 gap-1">
              {Object.entries(WOFFY_GESTURES).map(([name, data]) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.02 }}
                  className={`px-2 py-1 rounded-md border transition-all duration-300 ${
                    detectedGesture?.name === name
                      ? `${data.bgColor} border-current shadow-lg`
                      : 'bg-slate-800/50 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{data.emoji}</span>
                    <div className={`font-medium text-[10px] leading-tight ${detectedGesture?.name === name ? data.textColor : 'text-white/90'}`}>
                      {data.command}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Info */}
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <Scan className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-indigo-300 mb-1">AI-Powered Control</h4>
                <p className="text-xs text-indigo-200/70 leading-relaxed">
                  Woffy understands your gestures through advanced hand tracking. All processing happens on-device for instant response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GestureDemo;
