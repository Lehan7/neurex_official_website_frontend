import React from 'react';
import { Brain, Rocket, Globe, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Neural Innovation",
      description: "Pioneering breakthroughs in neural technology and cognitive enhancement."
    },
    {
      icon: Rocket,
      title: "Space Exploration",
      description: "Pushing the boundaries of human exploration beyond Earth's horizons."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that benefit humanity on a global scale."
    },
    {
      icon: Zap,
      title: "Advanced Research",
      description: "Cutting-edge research in quantum computing and AI integration."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f2c] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10" />
              <video
                className="w-full aspect-video object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="src\assets\videos\NeureX Intrudicing Video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-3">
                About NeureX
              </h2>
              <h3 className="text-4xl font-bold text-white mb-6">
                Pioneering the Future of
                <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Human Evolution
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                At NeureX, we're not just imagining the future – we're creating it. Our groundbreaking research and development in neural technology and space exploration are pushing the boundaries of what's possible for humanity.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-blue-500/10 hover:border-blue-500/30 transition-colors group"
                >
                  <feature.icon className="h-8 w-8 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                  <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;