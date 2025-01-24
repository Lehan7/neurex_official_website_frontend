import React, { useState } from 'react';
import { Brain, Linkedin, Mail, Sparkles, Code, Cpu, ArrowRight } from 'lucide-react';
import FounderModal from '../models/FounderModal';

const Founder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#0a0f2c] py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Background Image with Neural Network */}
        <div className="absolute inset-0">
          <img
            src="src\assets\images\Team\Lehan.jpg"
            alt="Neural Network"
            className="absolute w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] via-[#0a0f2c]/90 to-blue-900/30" />
        </div>
        
        {/* Animated Circuit Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse" />
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse delay-100" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse delay-200" />
          <div className="absolute right-0 bottom-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse delay-300" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-float-${i}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Particle Effects */}
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
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <div className="lg:w-2/3 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full backdrop-blur-sm">
              <Cpu className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Founder & CEO</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Lehan Kawshila
              <span className="block text-2xl text-blue-400 mt-2">Founder, CEO & CTO of NeureX</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Pioneering the future of technology through innovative solutions and visionary leadership. 
              Committed to pushing the boundaries of what's possible in AI and neural technology.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Years Experience", value: "10+" },
                { label: "Projects Led", value: "50+" },
                { label: "Team Members", value: "100+" },
                { label: "Global Offices", value: "12+" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                <Brain className="w-5 h-5 mr-2" />
                <span>View Full Profile</span>
                <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="https://www.linkedin.com/in/lehan-kawshila-856b8b288"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="lg:w-1/3">
            <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 z-10" />
                <img
                  src="src\assets\images\Team\Lehan.jpg"
                  alt="Lehan Kawshila"
                  className="w-full aspect-[3/4] object-cover"
                />
                
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-blue-500/50 rounded-2xl">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 animate-pulse" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 animate-pulse delay-100" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500 animate-pulse delay-200" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500 animate-pulse delay-300" />
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-6 -left-6 p-4 bg-white/10 backdrop-blur-lg rounded-2xl transform rotate-12 animate-float">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 bg-white/10 backdrop-blur-lg rounded-2xl transform -rotate-12 animate-float-reverse">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Modal */}
      <FounderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Founder;