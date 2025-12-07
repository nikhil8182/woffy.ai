import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, AlertCircle, User, Mail, Phone, Sparkles } from 'lucide-react';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const interestOptions = [
    { value: 'personal', label: '🏠 Personal Companion', desc: 'For home use' },
    { value: 'family', label: '👨‍👩‍👧‍👦 Family Pet', desc: 'For kids & family' },
    { value: 'elderly', label: '👴 Elderly Care', desc: 'For senior support' },
    { value: 'therapy', label: '💚 Emotional Support', desc: 'Therapy companion' },
    { value: 'investor', label: '💼 Investor Interest', desc: 'Investment opportunity' },
    { value: 'other', label: '✨ Other', desc: 'Something else' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    
    setStatus('loading');
    try {
      // Check for duplicate email
      const q = query(collection(db, "waitlist"), where("email", "==", formData.email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        setStatus('error');
        setErrorMsg('This email is already on the waitlist!');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }

      await addDoc(collection(db, "waitlist"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        interest: formData.interest || 'not_specified',
        timestamp: serverTimestamp(),
        source: 'web_waitlist_modal'
      });
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', interest: '' });
      }, 2500);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isDisabled = status === 'loading' || status === 'success';

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
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Gradient */}
              <div className="h-2 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500" />
              
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl mb-4 shadow-lg shadow-rose-100">
                    <span className="text-3xl">🐶</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Woffy Pack</h2>
                  <p className="text-gray-500 text-sm">
                    Be among the first to meet your new AI companion
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isDisabled}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-gray-50/50 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isDisabled}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-gray-50/50 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number (optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isDisabled}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-gray-50/50 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Interest Selection */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Sparkles className="w-4 h-4 text-rose-500" />
                      What interests you most?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {interestOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          disabled={isDisabled}
                          onClick={() => setFormData(prev => ({ ...prev, interest: option.value }))}
                          className={`p-3 rounded-xl border-2 text-left transition-all ${
                            formData.interest === option.value
                              ? 'border-rose-400 bg-rose-50 shadow-sm'
                              : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <span className="block text-sm font-medium text-gray-800">{option.label}</span>
                          <span className="block text-xs text-gray-500">{option.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl border border-red-100"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMsg}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isDisabled}
                    className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg ${
                      status === 'success' 
                        ? 'bg-emerald-500 shadow-emerald-200' 
                        : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-rose-200 hover:shadow-xl hover:shadow-rose-200'
                    }`}
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Welcome to the pack! 🎉
                      </>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <span className="text-lg">→</span>
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-center text-gray-400">
                  🔒 Your data is safe with us. No spam, just puppy updates.
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
