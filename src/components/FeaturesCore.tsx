import React from 'react';
import { Cpu, Atom, Rocket, Brain, Zap, Globe, Shield, Radio } from 'lucide-react';

const FeaturesCore = () => {
  const features = [
    {
      icon: Cpu,
      title: "Quantum Processing",
      description: "3000-year advanced quantum computing cores capable of infinite parallel processing",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Atom,
      title: "Neural Synthesis",
      description: "Direct brain-computer interfaces with quantum entanglement synchronization",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Rocket,
      title: "Interstellar Drive",
      description: "Revolutionary propulsion systems for faster-than-light space travel",
      gradient: "from-red-600 to-orange-600"
    },
    {
      icon: Brain,
      title: "Consciousness Upload",
      description: "Digital immortality through advanced neural pattern preservation",
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0f2c]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Space Background"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] via-[#0a0f2c]/90 to-blue-900/30" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150" />
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Technologies from
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              The Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience breakthrough innovations that transcend current technological limitations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              />
              <div className="relative p-8 rounded-2xl bg-white/5 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-10 mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r pointer-events-none"
                     style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Specs Display */}
        <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-blue-500/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-400">Processing Power</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3000</div>
              <div className="text-gray-400">Years Advanced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-400">Neural Sync</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
              <div className="text-gray-400">Star Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCore;