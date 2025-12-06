import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: serverTimestamp(),
        source: 'web_waitlist_modal'
      });
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setEmail('');
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                    <span className="text-2xl">🐶</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Pack</h2>
                  <p className="text-gray-600">
                    Be among the first to experience Woffy. Early access spots are limited!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading' || status === 'success'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="w-4 h-4" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                      status === 'success' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-200'
                    }`}
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        You're on the list!
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-center text-gray-400">
                  We respect your privacy. No spam, just puppy love.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;

