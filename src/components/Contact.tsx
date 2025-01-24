import React, { useState } from 'react';
import { Send, Brain, Rocket } from 'lucide-react';
import Alert from './Alert'; // Importing the new Alert component

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    privacy: false,
  });

  const [alertData, setAlertData] = useState({
    isOpen: false,
    success: false,
    message: '',
  });

  const closeAlert = () => {
    setAlertData({ ...alertData, isOpen: false });
    if (alertData.success) {
      window.location.reload(); // Auto-refresh on success
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.error || 'There was an error sending your message. Please try again.';
        setAlertData({ isOpen: true, success: false, message: errorMessage });
      } else {
        const result = await response.json();
        setAlertData({
          isOpen: true,
          success: true,
          message: result.message || 'Your message has been sent successfully!',
        });
        setFormData({ firstName: '', lastName: '', email: '', message: '', privacy: false });
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertData({
        isOpen: true,
        success: false,
        message: 'There was an error sending your message. Please try again.',
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0f2c] text-gray-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80"
          alt="Space Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c]/90 via-[#0a0f2c]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl">Ready to explore the future? Get in touch with our team.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 rounded-lg p-6 sm:p-8 shadow-xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400 transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400 transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm">
                  I agree to the{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-transform duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Alert Component */}
      {alertData.isOpen && (
        <Alert
          success={alertData.success}
          message={alertData.message}
          onClose={closeAlert}
        />
      )}
    </section>
  );
};

export default Contact;
