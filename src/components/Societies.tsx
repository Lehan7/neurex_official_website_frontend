import React, { useState } from 'react';
import { Rocket, Brain, Shield, MonitorSmartphone } from 'lucide-react';
import RegisterModal from '../models/RegisterModal';

const Societies = () => {
  const [selectedSociety, setSelectedSociety] = useState<null | {
    title: string;
    icon: React.ElementType;
  }>(null);

  const societies = [
    {
      title: "Space & Rocket Society",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80",
      bgColor: "from-blue-400/20 to-blue-600/20"
    },
    {
      title: "AI Systems Society",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
      bgColor: "from-cyan-400/20 to-cyan-600/20"
    },
    {
      title: "Master Hacking Society",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
      bgColor: "from-green-400/20 to-green-600/20"
    },
    {
      title: "Robotics Society",
      icon: MonitorSmartphone,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      bgColor: "from-purple-400/20 to-purple-600/20"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f2c] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Research And Academic Societies
          </h2>
        </div>

        {/* Societies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {societies.map((society, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={society.image}
                  alt={society.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${society.bgColor} opacity-90`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col">
                <society.icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {society.title}
                </h3>
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedSociety(society)}
                    className="inline-flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      <RegisterModal
        isOpen={!!selectedSociety}
        onClose={() => setSelectedSociety(null)}
        society={selectedSociety}
      />
    </section>
  );
};

export default Societies;