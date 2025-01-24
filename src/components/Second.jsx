import React from 'react';
import { ArrowRight, Rocket, Atom, Zap } from 'lucide-react';

const Second = () => {
  return (
    <div className="min-h-screen bg-[#0a0f2c] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 animate-float opacity-20">
          <Rocket className="w-16 h-16 text-blue-400" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float-reverse opacity-20">
          <Atom className="w-20 h-20 text-purple-400" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-20">
          <Zap className="w-12 h-12 text-cyan-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Holographic Display */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10" />
            <div className="absolute top-4 left-4 text-xs text-blue-400 font-mono z-20 flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>QUANTUM.DRIVE.3000</span>
            </div>
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://player.vimeo.com/external/538526979.sd.mp4?s=a3f03c935c7d13c5645ac79e8f366a22be0c5993&profile_id=164&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-blue-400 font-mono z-20">
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>QUANTUM CORE ACTIVE</span>
              </div>
              <span className="text-right">TIME DILATION: 3000.YR</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full backdrop-blur-sm animate-float">
              <Rocket className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Quantum Advancement Initiative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold space-y-2">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                3000 Years of
              </span>
              <span className="block text-white">
                Technology Evolution
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Experience the convergence of three millennia of technological advancement. Our quantum-powered systems and neural interfaces transcend conventional boundaries, offering glimpses into humanity's ultimate potential. From interstellar travel to consciousness expansion, we're not just predicting the future - we're creating it.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                Explore Technologies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="group relative inline-flex items-center gap-2 bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/20 backdrop-blur-sm">
                View Timeline
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              </button>
            </div>

            {/* Tech Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">3000+</div>
                <div className="text-sm text-gray-400">Years Advanced</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-gray-400">Quantum Power</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Neural Sync</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;