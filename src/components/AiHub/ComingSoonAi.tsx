import React, { useState } from 'react';
import { Brain, Star, Calendar, Bell, ArrowRight } from 'lucide-react';

const ComingSoonAi = () => {
  const [notifyEmail, setNotifyEmail] = useState('');

  const upcomingModels = [
    {
      name: "NeureX Vision Pro",
      description: "Advanced computer vision model with real-time object detection and scene understanding",
      releaseDate: "Q2 2024",
      features: [
        "8K resolution support",
        "Real-time tracking",
        "Multi-object detection",
        "Scene segmentation"
      ],
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      name: "BioMed GPT",
      description: "Specialized language model for medical research and diagnosis assistance",
      releaseDate: "Q3 2024",
      features: [
        "Medical terminology understanding",
        "Research paper analysis",
        "Diagnosis assistance",
        "Drug interaction checking"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      gradient: "from-purple-600/20 to-pink-600/20"
    },
    {
      name: "CodeX Advanced",
      description: "Next-generation code generation and analysis model",
      releaseDate: "Q4 2024",
      features: [
        "Multi-language support",
        "Code optimization",
        "Security analysis",
        "Architecture suggestions"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
      gradient: "from-cyan-600/20 to-blue-600/20"
    }
  ];

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle notification signup
    console.log('Notification signup:', notifyEmail);
    setNotifyEmail('');
  };

  return (
    <section className="relative min-h-screen bg-[#0a0f2c] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full backdrop-blur-sm mb-6">
            <Brain className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Coming Soon</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upcoming AI Models
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a sneak peek at our next-generation AI models and be the first to know when they launch
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {upcomingModels.map((model, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${model.gradient} backdrop-blur-sm opacity-90`} />
                
                <div className="absolute inset-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{model.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-gray-300">{model.description}</p>

                {/* Release Date */}
                <div className="flex items-center space-x-2 text-blue-400">
                  <Calendar className="w-5 h-5" />
                  <span>Expected Release: {model.releaseDate}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <h4 className="text-white font-medium">Key Features:</h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Notify Button */}
                <button className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors flex items-center justify-center space-x-2 group">
                  <Bell className="w-5 h-5" />
                  <span>Notify Me</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter to receive updates about new AI models and early access opportunities
              </p>
            </div>

            <form onSubmit={handleNotifySubmit} className="flex space-x-4">
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors flex items-center space-x-2"
              >
                <Bell className="w-5 h-5" />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonAi;