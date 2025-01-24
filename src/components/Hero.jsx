import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-screen video background */}
      <div className="absolute inset-0">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="src\assets\videos\NeureX earth_2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Main Title */}
        <h1 className="text-7xl md:text-[120px] lg:text-[150px] font-bold text-white tracking-wider mb-4 animate-fade-in">
          NEUREX
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 tracking-widest mb-12 animate-fade-in-delayed">
        💫SHAPING THE FUTURE OF HUMANATY💫
        </p>

        {/* CTA Button */}
        <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-delayed-more">
          <span>REWATCH LAUNCH</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-[2px] h-16 bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-gray-400">LAUNCHES</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">96%</div>
                <div className="text-sm text-gray-400">SUCCESS RATE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50M</div>
                <div className="text-sm text-gray-400">KM RANGE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">150T</div>
                <div className="text-sm text-gray-400">PAYLOAD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
      </div>
    </div>
  );
};

export default Hero;