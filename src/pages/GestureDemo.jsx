import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, Camera, Scan, Sparkles, ChevronLeft, AlertCircle, Zap, History, Volume2, VolumeX, User, Smile, Heart, Dog, Play, Square, ThumbsUp, ThumbsDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hands } from '@mediapipe/hands';
import { FaceDetection } from '@mediapipe/face_detection';
import '../styles/gesture.css';

export function createFrameLoop({ processFrame, onError, requestFrame = requestAnimationFrame, cancelFrame = cancelAnimationFrame }) {
  let stopped = false;
  let started = false;
  let frame = null;
  const tick = async () => {
    frame = null;
    if (stopped) return;
    try {
      await processFrame(() => stopped);
    } catch (error) {
      if (!stopped) {
        stopped = true;
        onError(error);
      }
      return;
    }
    if (!stopped) frame = requestFrame(tick);
  };
  return {
    start() {
      if (started || stopped) return;
      started = true;
      frame = requestFrame(tick);
    },
    stop() {
      stopped = true;
      if (frame !== null) cancelFrame(frame);
      frame = null;
    },
  };
}

const HAND_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [9, 10], [10, 11], [11, 12],
  [0, 13], [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
  [5, 9], [9, 13], [13, 17], [0, 17]
];

// Woffy-themed gesture commands - 6 easy-to-detect gestures
const WOFFY_GESTURES = {
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
  'Pointing': {
    emoji: '☝️',
    command: 'Come Here!',
    description: 'Point up - Call Woffy over',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/20',
    textColor: 'text-amber-400',
    response: 'Woffy is coming! 🐕',
    icon: Dog
  },
  'Thumbs Down': {
    emoji: '👎',
    command: 'No, Woffy!',
    description: 'Thumb down - Negative feedback',
    color: 'from-slate-500 to-gray-600',
    bgColor: 'bg-slate-500/20',
    textColor: 'text-slate-400',
    response: 'Woffy looks sad... 🐕😢',
    icon: ThumbsDown
  }
};

const GestureDemo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
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
  const [permissionStatus, setPermissionStatus] = useState('unknown'); // unknown, prompt, granted, denied, blocked, unsupported, error
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);
  const lastFrameTime = useRef(Date.now());
  const frameCount = useRef(0);
  const gestureBuffer = useRef([]);
  const lastGesture = useRef(null);
  const faceDetectionRef = useRef(null);
  const handsRef = useRef(null);
  const permissionRequestRef = useRef(false);
  const streamRef = useRef(null);
  const frameLoopRef = useRef(null);
  const trackingCleanupRef = useRef(null);
  const responseTimerRef = useRef(null);
  const soundEnabledRef = useRef(false);
  const audioContextRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      trackingCleanupRef.current?.();
      frameLoopRef.current?.stop();
      streamRef.current?.getTracks().forEach(track => track.stop());
      clearTimeout(responseTimerRef.current);
      audioContextRef.current?.close().catch(() => {});
      audioContextRef.current = null;
    };
  }, []);

  const toggleSound = async () => {
    if (soundEnabledRef.current) {
      soundEnabledRef.current = false;
      setSoundEnabled(false);
      audioContextRef.current?.suspend().catch(() => {});
      return;
    }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    try {
      const context = audioContextRef.current || new AudioContextClass();
      audioContextRef.current = context;
      await context.resume();
      if (!mountedRef.current) return;
      soundEnabledRef.current = context.state === 'running';
      setSoundEnabled(soundEnabledRef.current);
    } catch {
      soundEnabledRef.current = false;
      if (mountedRef.current) setSoundEnabled(false);
    }
  };

  const playSoundCue = useCallback(() => {
    const context = audioContextRef.current;
    if (!soundEnabledRef.current || !context || context.state !== 'running') return;
    try {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const time = context.currentTime;
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(660, time);
      gain.gain.setValueAtTime(0.018, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
      oscillator.start(time);
      oscillator.stop(time + 0.085);
    } catch { /* A sound cue must never interrupt recognition. */ }
  }, []);

  const distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow((p1.z || 0) - (p2.z || 0), 2));
  };

  const recognizeGesture = useCallback((landmarks) => {
    if (!landmarks || landmarks.length === 0) return null;

    const hand = landmarks[0];

    // All 21 hand landmarks
    const wrist = hand[0];
    const thumbCMC = hand[1];
    const thumbMCP = hand[2];
    const thumbIP = hand[3];
    const thumbTip = hand[4];
    const indexMCP = hand[5];
    const indexPIP = hand[6];
    const indexDIP = hand[7];
    const indexTip = hand[8];
    const middleMCP = hand[9];
    const middlePIP = hand[10];
    const middleDIP = hand[11];
    const middleTip = hand[12];
    const ringMCP = hand[13];
    const ringPIP = hand[14];
    const ringDIP = hand[15];
    const ringTip = hand[16];
    const pinkyMCP = hand[17];
    const pinkyPIP = hand[18];
    const pinkyDIP = hand[19];
    const pinkyTip = hand[20];

    // ===== PALM GEOMETRY =====
    const palmCenter = {
      x: (wrist.x + indexMCP.x + pinkyMCP.x + middleMCP.x + ringMCP.x) / 5,
      y: (wrist.y + indexMCP.y + pinkyMCP.y + middleMCP.y + ringMCP.y) / 5,
      z: ((wrist.z || 0) + (indexMCP.z || 0) + (pinkyMCP.z || 0) + (middleMCP.z || 0) + (ringMCP.z || 0)) / 5
    };

    // Palm size for relative measurements
    const palmSize = distance(wrist, middleMCP);

    // Hand orientation (is palm facing camera or away)
    const palmFacingCamera = middleMCP.z < wrist.z;

    // ===== ADVANCED FINGER DETECTION =====

    // Method 1: Angle-based detection (finger tip above PIP above MCP)
    const fingerAngleExtended = (tip, pip, mcp) => {
      return tip.y < pip.y && pip.y < mcp.y;
    };

    // Method 2: Distance ratio (tip far from palm vs MCP)
    const fingerDistanceExtended = (tip, mcp, threshold = 1.4) => {
      return distance(tip, palmCenter) > distance(mcp, palmCenter) * threshold;
    };

    // Method 3: Tip-to-wrist vs MCP-to-wrist (for orientation-independent)
    const fingerWristExtended = (tip, mcp) => {
      return distance(tip, wrist) > distance(mcp, wrist) * 1.3;
    };

    // Method 4: Curl detection - tip closer to palm than it should be
    const fingerCurled = (tip, pip, mcp) => {
      const tipToPalm = distance(tip, palmCenter);
      const mcpToPalm = distance(mcp, palmCenter);
      const tipBelowPIP = tip.y > pip.y;
      return tipToPalm < mcpToPalm * 1.2 || tipBelowPIP;
    };

    // Combine methods for robust detection (voting system)
    const isFingerExtended = (tip, dip, pip, mcp) => {
      let votes = 0;
      if (fingerAngleExtended(tip, pip, mcp)) votes++;
      if (fingerDistanceExtended(tip, mcp, 1.3)) votes++;
      if (fingerWristExtended(tip, mcp)) votes++;
      if (!fingerCurled(tip, pip, mcp)) votes++;
      return votes >= 2; // At least 2 methods agree
    };

    const isFingerCurled = (tip, dip, pip, mcp) => {
      let votes = 0;
      if (!fingerAngleExtended(tip, pip, mcp)) votes++;
      if (!fingerDistanceExtended(tip, mcp, 1.2)) votes++;
      if (fingerCurled(tip, pip, mcp)) votes++;
      if (tip.y > pip.y) votes++;
      return votes >= 2;
    };

    // Apply to each finger
    const indexExtended = isFingerExtended(indexTip, indexDIP, indexPIP, indexMCP);
    const middleExtended = isFingerExtended(middleTip, middleDIP, middlePIP, middleMCP);
    const ringExtended = isFingerExtended(ringTip, ringDIP, ringPIP, ringMCP);
    const pinkyExtended = isFingerExtended(pinkyTip, pinkyDIP, pinkyPIP, pinkyMCP);

    const indexCurled = isFingerCurled(indexTip, indexDIP, indexPIP, indexMCP);
    const middleCurled = isFingerCurled(middleTip, middleDIP, middlePIP, middleMCP);
    const ringCurled = isFingerCurled(ringTip, ringDIP, ringPIP, ringMCP);
    const pinkyCurled = isFingerCurled(pinkyTip, pinkyDIP, pinkyPIP, pinkyMCP);

    // ===== THUMB DETECTION (Special - moves differently) =====
    const thumbToWrist = distance(thumbTip, wrist);
    const thumbMCPToWrist = distance(thumbMCP, wrist);
    const thumbToPalm = distance(thumbTip, palmCenter);
    const thumbToIndex = distance(thumbTip, indexMCP);

    // Thumb extended away from palm
    const thumbExtended = thumbToPalm > palmSize * 0.8 && thumbToWrist > thumbMCPToWrist * 1.1;

    // Thumb pointing UP (y decreases upward)
    const thumbUp = thumbTip.y < thumbMCP.y - palmSize * 0.3 &&
                    thumbTip.y < indexMCP.y &&
                    thumbTip.y < wrist.y - palmSize * 0.2;

    // Thumb pointing DOWN
    const thumbDown = thumbTip.y > thumbMCP.y + palmSize * 0.3 &&
                      thumbTip.y > wrist.y + palmSize * 0.2 &&
                      thumbTip.y > indexTip.y;

    // Thumb tucked (for fist)
    const thumbTucked = thumbToIndex < palmSize * 0.5 || thumbToPalm < palmSize * 0.6;

    // ===== FINGER COUNTS =====
    const extendedFingers = [indexExtended, middleExtended, ringExtended, pinkyExtended];
    const curledFingers = [indexCurled, middleCurled, ringCurled, pinkyCurled];
    const extendedCount = extendedFingers.filter(Boolean).length;
    const curledCount = curledFingers.filter(Boolean).length;

    // ===== GESTURE RECOGNITION WITH PER-GESTURE ENGINEERING =====
    let gestureName = null;
    let conf = 0;

    // 1) OPEN PALM: all fingers extended, good spread, neutral thumb
    if (extendedCount >= 4 && thumbExtended && !thumbUp && !thumbDown) {
      const fingerSpread = distance(indexTip, pinkyTip) > palmSize * 0.75;
      const evenSpread = distance(indexTip, middleTip) > palmSize * 0.25 && distance(ringTip, pinkyTip) > palmSize * 0.2;
      conf = 92 + (extendedCount === 4 ? 4 : 6) + (fingerSpread ? 3 : 0) + (evenSpread ? 2 : 0);
      gestureName = 'Open Palm';
    }

    // 2) THUMBS UP: thumb strongly up, others curled
    else if (thumbUp && thumbExtended && curledCount >= 3 && extendedCount <= 1) {
      const strongThumbUp = thumbTip.y < wrist.y - palmSize * 0.4;
      const thumbAwayFromPalm = thumbToPalm > palmSize * 0.9;
      conf = 90 + (curledCount === 4 ? 6 : 3) + (strongThumbUp ? 4 : 0) + (thumbAwayFromPalm ? 2 : 0);
      gestureName = 'Thumbs Up';
    }

    // 3) THUMBS DOWN: thumb strongly down, others curled
    else if (thumbDown && thumbExtended && curledCount >= 3 && extendedCount <= 1) {
      const strongThumbDown = thumbTip.y > wrist.y + palmSize * 0.4;
      const thumbAwayFromPalm = thumbToPalm > palmSize * 0.9;
      conf = 90 + (curledCount === 4 ? 6 : 3) + (strongThumbDown ? 4 : 0) + (thumbAwayFromPalm ? 2 : 0);
      gestureName = 'Thumbs Down';
    }

    // 4) FIST: all fingers curled, thumb tucked or neutral (not up/down)
    else if (curledCount >= 3 && extendedCount === 0 && !thumbUp && !thumbDown) {
      const tightFist = curledCount === 4 && (thumbTucked || !thumbExtended);
      conf = 88 + (tightFist ? 8 : 4);
      gestureName = 'Fist';
    }

    // 5) PEACE SIGN: index + middle extended, ring + pinky curled, thumb relaxed
    else if (indexExtended && middleExtended && ringCurled && pinkyCurled && !thumbDown) {
      const separation = distance(indexTip, middleTip);
      const balancedV = separation > palmSize * 0.25 && separation < palmSize * 0.8;
      conf = 90 + (balancedV ? 6 : 3) + (thumbExtended ? 2 : 0);
      gestureName = 'Peace Sign';
    }

    // 6) POINTING: only index extended, others curled, thumb neutral
    else if (indexExtended && !middleExtended && ringCurled && pinkyCurled && !thumbDown) {
      const strongPoint = distance(indexTip, wrist) > palmSize * 1.4;
      const stableFinger = distance(indexTip, indexMCP) > palmSize * 0.9;
      conf = 88 + (middleCurled ? 4 : 0) + (strongPoint ? 4 : 0) + (stableFinger ? 2 : 0);
      gestureName = 'Pointing';
    }

    // Return result with confidence
    if (gestureName && WOFFY_GESTURES[gestureName] && conf >= 85) {
      const gestureData = WOFFY_GESTURES[gestureName];
      return {
        name: gestureName,
        emoji: gestureData.emoji,
        command: gestureData.command,
        response: gestureData.response,
        color: gestureData.color,
        confidence: Math.min(conf, 99)
      };
    }

    return null;
  }, []);

  const stabilizeGesture = useCallback((newGesture) => {
    if (!newGesture) {
      // Clear buffer gradually when no gesture detected
      if (gestureBuffer.current.length > 0) {
        gestureBuffer.current.shift();
      }
      return null;
    }

    // Add new gesture with confidence weight
    gestureBuffer.current.push({
      name: newGesture.name,
      confidence: newGesture.confidence
    });

    // Keep buffer size at 7 frames for smoother detection
    if (gestureBuffer.current.length > 7) {
      gestureBuffer.current.shift();
    }

    // Count occurrences with confidence weighting
    const counts = {};
    const confidenceSum = {};
    gestureBuffer.current.forEach(g => {
      counts[g.name] = (counts[g.name] || 0) + 1;
      confidenceSum[g.name] = (confidenceSum[g.name] || 0) + g.confidence;
    });

    // Find gesture with highest weighted score
    let bestGesture = null;
    let bestScore = 0;
    Object.entries(counts).forEach(([gesture, count]) => {
      // Score = count * average confidence
      const avgConf = confidenceSum[gesture] / count;
      const score = count * (avgConf / 100);
      if (score > bestScore) {
        bestScore = score;
        bestGesture = gesture;
      }
    });

    // Require at least 3 occurrences OR very high confidence
    const minOccurrences = counts[bestGesture] >= 3;
    const highConfidence = (confidenceSum[bestGesture] / counts[bestGesture]) >= 92;

    if (bestGesture && (minOccurrences || (counts[bestGesture] >= 2 && highConfidence))) {
      const gestureData = WOFFY_GESTURES[bestGesture];
      if (gestureData) {
        return {
          ...newGesture,
          name: bestGesture,
          command: gestureData.command,
          response: gestureData.response,
          color: gestureData.color,
          emoji: gestureData.emoji,
          confidence: Math.round(confidenceSum[bestGesture] / counts[bestGesture])
        };
      }
    }

    return null; // Don't show unstable gestures
  }, []);

  const updateWoffyMood = useCallback((gestureName) => {
    switch (gestureName) {
      case 'Thumbs Up':
        setWoffyMood('happy');
        break;
      case 'Peace Sign':
      case 'Pointing':
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
      clearTimeout(responseTimerRef.current);
      responseTimerRef.current = setTimeout(() => {
        if (mountedRef.current) setWoffyResponse(null);
      }, 2000);

      // Update mood
      updateWoffyMood(gesture.name);

      setGestureHistory(prev => {
        const newHistory = [{ ...gesture, timestamp: Date.now() }, ...prev].slice(0, 10);
        return newHistory;
      });

      playSoundCue();
    }
  }, [playSoundCue, updateWoffyMood]);

  const requestCameraAccess = useCallback(async (userInitiated = false) => {
    if (!userInitiated || permissionRequestRef.current || streamRef.current) return false;

    if (!window.isSecureContext) {
      setCameraError('Camera access needs HTTPS. Open the secure website to try this experiment.');
      setPermissionStatus('blocked');
      return false;
    }

    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setCameraError('Camera access is not supported in this browser.');
      setPermissionStatus('unsupported');
      setIsLoading(false);
      return false;
    }

    permissionRequestRef.current = true;
    setIsRequestingPermission(true);
    setIsLoading(true);
    setCameraError(null);
    setPermissionStatus('prompt');

    let granted = false;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });

      if (!mountedRef.current) {
        stream.getTracks().forEach(track => track.stop());
        return false;
      }
      streamRef.current = stream;

      setPermissionStatus('granted');
      setCameraError(null);
      granted = true;
    } catch (error) {
      if (!mountedRef.current) return false;
      console.error('Camera permission error:', error);
      const denied = error?.name === 'NotAllowedError' || error?.name === 'PermissionDeniedError';
      const notFound = error?.name === 'NotFoundError' || error?.name === 'OverconstrainedError';

      if (denied) {
        setPermissionStatus('denied');
        setCameraError(
          userInitiated
            ? 'Camera permission is still blocked. Please allow access in your browser settings and try again.'
            : 'Camera access was blocked. Please allow permissions to use the gesture demo.'
        );
      } else if (notFound) {
        setPermissionStatus('error');
        setCameraError('No camera device was found. Connect a camera and try again.');
      } else {
        setPermissionStatus('error');
        setCameraError('Unable to access the camera. Please check your device settings and try again.');
      }
    } finally {
      permissionRequestRef.current = false;
      if (mountedRef.current) {
        setIsRequestingPermission(false);
        if (!granted) setIsLoading(false);
      }
    }

    return granted;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!window.isSecureContext) {
      setCameraError('Camera access requires a secure (HTTPS) connection. Please reopen this page over https:// to continue.');
      setPermissionStatus('blocked');
      setIsLoading(false);
      return;
    }

    // Inspect support only. Camera permission is requested exclusively by a click.
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError('Camera access is not supported in this browser. Try a current browser on a device with a camera.');
      setPermissionStatus('unsupported');
    }
  }, []);

  const stopCamera = () => {
    trackingCleanupRef.current?.();
    frameLoopRef.current?.stop();
    const stream = streamRef.current;
    stream?.getTracks?.().forEach(track => track.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }
    clearTimeout(responseTimerRef.current);
    setPermissionStatus('unknown');
    setIsLoading(false);
    setCameraError(null);
    setDetectedGesture(null);
    setWoffyResponse(null);
    setHandCount(0);
    setFaceDetected(false);
    setFaceCount(0);
    setFps(0);
    setConfidence(0);
    setWoffyMood('happy');
    gestureBuffer.current = [];
    lastGesture.current = null;
    frameCount.current = 0;
    lastFrameTime.current = Date.now();
  };

  useEffect(() => {
    if (permissionStatus !== 'granted' || !streamRef.current) return;

    let loop = null;
    let hands = null;
    let faceDetection = null;
    let cancelled = false;
    let released = false;
    const videoElement = videoRef.current;
    const stream = streamRef.current;

    const release = () => {
      cancelled = true;
      loop?.stop();
      if (released) return;
      released = true;
      if (trackingCleanupRef.current === release) trackingCleanupRef.current = null;
      if (frameLoopRef.current === loop) frameLoopRef.current = null;
      stream.getTracks().forEach(track => {
        track.removeEventListener('ended', onStreamEnded);
        track.stop();
      });
      if (streamRef.current === stream) streamRef.current = null;
      if (videoElement?.srcObject === stream) {
        videoElement.pause();
        videoElement.srcObject = null;
      }
      if (hands) Promise.resolve().then(() => hands.close()).catch(() => {});
      if (faceDetection) Promise.resolve().then(() => faceDetection.close()).catch(() => {});
      if (handsRef.current === hands) handsRef.current = null;
      if (faceDetectionRef.current === faceDetection) faceDetectionRef.current = null;
    };

    const reportTrackingError = (error) => {
      if (cancelled || !mountedRef.current) return;
      release();
      let errorMessage = 'Unable to run gesture recognition. Please try the camera again.';
      if (error?.name === 'NotAllowedError' || error?.name === 'PermissionDeniedError') errorMessage = 'Camera permission denied. Please allow access in your browser settings.';
      else if (/fetch|load|network/i.test(error?.message || '')) errorMessage = 'The recognition models could not load. Check your connection and try again.';
      else if (/camera|stream/i.test(error?.message || '')) errorMessage = 'Camera access ended. Check your camera and try again.';
      clearTimeout(responseTimerRef.current);
      setCameraError(errorMessage);
      setPermissionStatus('error');
      setIsLoading(false);
      setDetectedGesture(null);
      setWoffyResponse(null);
      setHandCount(0);
      setFaceDetected(false);
      setFaceCount(0);
      setFps(0);
      setConfidence(0);
      lastGesture.current = null;
      gestureBuffer.current = [];
    };

    function onStreamEnded() { reportTrackingError(new Error('Camera stream ended')); }
    trackingCleanupRef.current = release;
    stream.getTracks().forEach(track => track.addEventListener('ended', onStreamEnded));

    const initializeTracking = async () => {
      try {
        setIsLoading(true);
        setCameraError(null);

        faceDetection = new FaceDetection({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.4.1646425229/${file}`,
        });
        faceDetectionRef.current = faceDetection;

        faceDetectionRef.current.setOptions({
          model: 'short',
          minDetectionConfidence: 0.5,
        });

        faceDetectionRef.current.onResults((results) => {
          if (cancelled) return;
          setFaceDetected(results.detections?.length > 0);
          setFaceCount(results.detections?.length || 0);
        });

        hands = new Hands({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`,
        });
        handsRef.current = hands;

        handsRef.current.setOptions({
          maxNumHands: 2,
          modelComplexity: 1,
          minDetectionConfidence: 0.75,
          minTrackingConfidence: 0.6,
        });

        handsRef.current.onResults((results) => {
          if (cancelled) return;
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

        if (!videoElement) throw new Error('Camera preview is unavailable');
        videoElement.srcObject = stream;
        await videoElement.play();
        if (cancelled) return;
        loop = createFrameLoop({
          processFrame: async (isStopped) => {
            if (cancelled || videoElement.readyState < 2) return;
            await hands.send({ image: videoElement });
            if (cancelled || isStopped()) return;
            await faceDetection.send({ image: videoElement });
          },
          onError: reportTrackingError,
        });
        frameLoopRef.current = loop;
        loop.start();
        setIsLoading(false);
      } catch (error) {
        reportTrackingError(error);
      }
    };

    initializeTracking();

    return release;
  }, [permissionStatus, recognizeGesture, stabilizeGesture, updateHistory]);

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
    <div className="g-page min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Header */}
      <header className="g-header p-4 md:p-6 flex items-center justify-between border-b border-white/10 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/specs" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ChevronLeft size={20} />
          <span className="hidden sm:inline">Back to Specs</span>
        </Link>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={soundEnabled ? 'Turn sound cues off' : 'Turn sound cues on'}
            aria-pressed={soundEnabled}
            onClick={toggleSound}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} className="text-slate-500" />}
          </button>

          {/* Woffy Mood */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <span className="text-lg">{getMoodEmoji()}</span>
            <span className="text-sm font-medium text-amber-400 capitalize">Demo: {woffyMood}</span>
          </div>

          {/* Face Detection */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
            faceDetected ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-slate-800/50 border border-slate-700'
          }`}>
            <User size={16} className={faceDetected ? 'text-emerald-400' : 'text-slate-500'} />
            <span className={`text-sm font-medium ${faceDetected ? 'text-emerald-400' : 'text-slate-500'}`}>
              {permissionStatus !== 'granted' ? 'Camera off' : faceDetected ? 'Face detected' : 'No face detected'}
            </span>
          </div>
        </div>
      </header>

      <div className="g-heading"><p>Woffy browser experiment</p><h1>A little body language.</h1><span>Explore six hand gestures and their on-screen responses. This experiment does not control a physical robot.</span></div>

      <div className="g-body flex-1 p-4 md:p-8 flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto w-full">

        {/* Camera Feed */}
        <div className="flex-1 flex flex-col">
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 font-medium text-sm border border-amber-500/30">
              <Dog size={16} />
              <span>Gesture playground</span>
            </div>
            <div className="g-camera-actions">{permissionStatus === 'granted' && <button type="button" onClick={stopCamera} className="g-stop"><Square size={13} aria-hidden="true" />Stop camera</button>}</div>
          </div>

          <div className="g-camera-frame relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/10">
            <video ref={videoRef} className="hidden" playsInline autoPlay muted />

            <canvas
              ref={canvasRef}
              width={1280}
              height={720}
              className="w-full h-full object-contain bg-slate-900"
              style={{ transform: 'scaleX(-1)' }}
              aria-label="Camera preview with detected hand landmarks"
            />

            {permissionStatus === 'unknown' && !cameraError && !isLoading && (
              <div className="g-entry">
                <span className="g-camera-icon"><Camera size={29} strokeWidth={1.4} aria-hidden="true" /></span>
                <h2>Your camera. Your choice.</h2>
                <p>Allow your camera when you’re ready. Hand and face detection runs in this browser, and you can stop the camera at any time.</p>
                <button type="button" className="g-start" onClick={() => requestCameraAccess(true)} disabled={isRequestingPermission}><Camera size={16} aria-hidden="true" />Start camera experiment</button>
                <small>The browser will ask for camera access. No microphone is requested.</small>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-24 relative mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-4xl">🐕</span>
                  </div>
                  <p className="text-white font-medium text-lg">{isRequestingPermission ? 'Waiting for camera permission' : 'Preparing the experiment'}</p>
                  <p className="text-slate-500 text-sm mt-2">{isRequestingPermission ? 'Choose Allow in your browser to continue.' : 'Loading hand and face detection'}</p>
                </div>
              </div>
            )}

            {/* Camera Error */}
            {cameraError && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/95">
                <div className="g-error text-center p-8 max-w-md space-y-4" role="alert">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Let’s get the camera ready</h3>
                    <p className="text-slate-400 mt-2">{cameraError}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {permissionStatus !== 'granted' && permissionStatus !== 'unsupported' && permissionStatus !== 'blocked' && (
                      <button
                        type="button"
                        onClick={() => requestCameraAccess(true)}
                        disabled={isRequestingPermission}
                        className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isRequestingPermission ? 'Requesting access…' : 'Try camera access again'}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      className="px-6 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors"
                    >
                      Reload Page
                    </button>
                  </div>
                  {(permissionStatus === 'denied' || permissionStatus === 'blocked') && (
                    <p className="text-xs text-slate-500">
                      If the browser blocked the camera, enable permissions from the address bar (🔒 icon) and try again.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Scanning Corners */}
            {permissionStatus === 'granted' && !isLoading && !cameraError && (
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
                  <span className="text-white font-bold text-sm">Face detected</span>
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
                  <span className="text-white font-bold text-lg"><small className="g-simulation-label">On-screen response</small>{woffyResponse}</span>
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
                      <span className="text-white/80 text-sm font-medium">Match score: {confidence}%</span>
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
              Try an open palm, a fist, thumbs up, or a peace sign. Keep your hand in view and use good lighting.
            </p>
          </div>

          {/* Beta Notice */}
          <div className="mt-3 p-3 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-xl border border-violet-500/20">
            <div className="flex items-center justify-center gap-2">
              <span className="px-2 py-0.5 bg-violet-500/30 text-violet-300 text-xs font-bold rounded-full uppercase tracking-wider">Experiment</span>
              <p className="text-violet-200/80 text-xs text-center">
                Recognition is experimental. The responses are a simulation, not a product capability or safety control.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="g-sidebar w-full lg:w-80 space-y-4">
          {/* Woffy Status */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/30">
                🐕
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">On-screen Woffy</h3>
                <p className="text-amber-400 text-sm capitalize">Demo mood: {woffyMood}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-3 bg-slate-900/50 rounded-xl">
                <div className={`text-2xl font-bold ${faceDetected ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {permissionStatus === 'granted' ? faceCount : 'Off'}
                </div>
                <div className="text-xs text-slate-400">Faces in view</div>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl">
                <div className={`text-2xl font-bold ${handCount > 0 ? 'text-indigo-400' : 'text-slate-500'}`}>
                  {permissionStatus === 'granted' ? handCount : 'Off'}
                </div>
                <div className="text-xs text-slate-400">Hands</div>
              </div>
            </div>
          </div>

          {/* Command History */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <History className="w-4 h-4 text-amber-400" />
              Gesture history
            </h3>
            {gestureHistory.length === 0 ? (
              <p className="text-slate-500 text-sm text-center py-4">Your detected gestures will appear here.</p>
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
              Try these gestures
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
                      {name}
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
                <h4 className="font-medium text-indigo-300 mb-1">A browser experiment</h4>
                <p className="text-xs text-indigo-200/70 leading-relaxed">
                  This page uses MediaPipe in your browser to detect hand shapes and faces. It does not identify people or connect to a robot. Models are downloaded when you start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestureDemo;
