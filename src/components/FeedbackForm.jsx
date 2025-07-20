import React, { useState } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Star, 
  User, 
  Mail, 
  FileText,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';
import { submitFeedback } from '../utils/feedback';

const FeedbackForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: 0
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await submitFeedback(formData);
      
      if (response.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            rating: 0
          });
        }, 2000);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-700 w-full max-w-md relative animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            Send Feedback
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            disabled={loading}
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Success State */}
        {success ? (
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-green-500/20 border border-green-500/30">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Thank you!</h4>
            <p className="text-gray-400 text-sm">
              Your feedback has been submitted successfully. We appreciate your input!
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6">
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-500/50 text-red-300 rounded-lg text-sm flex items-start">
                <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-800/60 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your full name"
                required
                disabled={loading}
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800/60 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
                required
                disabled={loading}
              />
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FileText className="w-4 h-4 inline mr-1" />
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-gray-800/60 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Brief subject line (optional)"
                disabled={loading}
              />
            </div>

            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rate your experience (optional)
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className={`p-1 rounded transition-colors ${
                      star <= formData.rating ? 'text-yellow-400' : 'text-gray-600 hover:text-yellow-400'
                    }`}
                    disabled={loading}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-gray-800/60 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all min-h-[100px] resize-none"
                placeholder="Share your thoughts, suggestions, or report issues..."
                required
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Feedback
                </>
              )}
            </button>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 mt-3 text-center">
              Your feedback will be sent to our team and helps us improve CodeTrack.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
