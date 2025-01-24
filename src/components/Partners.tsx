import React from 'react';
import { Brain, Rocket, Shield, Globe, Cpu, Zap } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: "TechDrone Solutions",
      logo: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80",
      description: "Leading drone technology and autonomous systems",
      icon: Rocket,
      gradient: "from-blue-600/20 to-cyan-600/20"
    },
    {
      name: "Neural Dynamics",
      logo: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
      description: "Advanced AI and neural network solutions",
      icon: Brain,
      gradient: "from-purple-600/20 to-pink-600/20"
    },
    {
      name: "Quantum Aerospace",
      logo: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80",
      description: "Aerospace and quantum computing integration",
      icon: Globe,
      gradient: "from-green-600/20 to-emerald-600/20"
    },
    {
      name: "CyberShield Systems",
      logo: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80",
      description: "Cybersecurity and data protection",
      icon: Shield,
      gradient: "from-red-600/20 to-orange-600/20"
    },
    {
      name: "RoboTech Industries",
      logo: "https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&q=80",
      description: "Robotics and automation solutions",
      icon: Cpu,
      gradient: "from-blue-600/20 to-indigo-600/20"
    },
    {
      name: "Future Energy Labs",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      description: "Sustainable energy and power systems",
      icon: Zap,
      gradient: "from-yellow-600/20 to-amber-600/20"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0f2c] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80"
          alt="Drone Technology"
          className="absolute w-full h-full object-cover opacity-20"
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
            Our Technology Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with industry leaders to push the boundaries of innovation
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image and Overlay */}
              <div className="absolute inset-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} backdrop-blur-sm opacity-90`} />
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[320px] flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <partner.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                </div>

                <p className="text-gray-200 mb-8">{partner.description}</p>

                {/* Hover Effect Elements */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80">View Partnership Details</span>
                    <button className="p-2 bg-white/10 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                      <partner.icon className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="h-1 w-full bg-white/10 mt-4 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-white group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full filter blur-3xl transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full filter blur-3xl transform -translate-x-16 translate-y-16" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;