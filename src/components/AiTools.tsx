import React, { useState } from 'react';
import { Brain, Sparkles, Cpu, Bot, Microscope, Code, Lock, Wand2 } from 'lucide-react';

interface Tool {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  category: 'free' | 'paid';
  features: string[];
  price?: string;
  background: string;
  gradient: string;
}

const AiTools = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'free' | 'paid'>('all');

  const tools: Tool[] = [
    {
      id: 1,
      title: "NeureX Predictor",
      description: "Advanced AI-powered prediction system for data analysis and forecasting",
      icon: Brain,
      category: 'paid',
      features: ["Real-time predictions", "Multi-variable analysis", "Custom model training"],
      price: "$49/month",
      background: "https://images.unsplash.com/photo-1676277791608-ac54525aa94d?auto=format&fit=crop&q=80",
      gradient: "from-blue-600/90 to-purple-600/90"
    },
    {
      id: 2,
      title: "Neural Code Assistant",
      description: "AI-powered code completion and optimization tool",
      icon: Code,
      category: 'free',
      features: ["Code suggestions", "Bug detection", "Performance optimization"],
      background: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      gradient: "from-emerald-600/90 to-cyan-600/90"
    },
    {
      id: 3,
      title: "Quantum Analysis Suite",
      description: "Advanced quantum computing simulation and analysis platform",
      icon: Cpu,
      category: 'paid',
      features: ["Quantum simulations", "Algorithm optimization", "Research tools"],
      price: "$199/month",
      background: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
      gradient: "from-violet-600/90 to-fuchsia-600/90"
    },
    {
      id: 4,
      title: "BioTech Explorer",
      description: "AI-driven biotechnology research and analysis platform",
      icon: Microscope,
      category: 'free',
      features: ["Protein analysis", "Gene sequencing", "Research collaboration"],
      background: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
      gradient: "from-green-600/90 to-teal-600/90"
    },
    {
      id: 5,
      title: "Security Guardian AI",
      description: "Advanced cybersecurity threat detection and prevention",
      icon: Lock,
      category: 'paid',
      features: ["Real-time monitoring", "Threat prevention", "Automated response"],
      price: "$79/month",
      background: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
      gradient: "from-red-600/90 to-orange-600/90"
    },
    {
      id: 6,
      title: "Creative AI Studio",
      description: "AI-powered creative content generation platform",
      icon: Wand2,
      category: 'free',
      features: ["Image generation", "Content creation", "Style transfer"],
      background: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80",
      gradient: "from-pink-600/90 to-rose-600/90"
    },
  ];

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section className="relative min-h-screen bg-[#0a0f2c] overflow-hidden py-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-float-reverse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our AI Tools & Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge AI tools and applications designed to revolutionize your workflow
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'free', 'paid'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as 'all' | 'free' | 'paid')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="relative group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={tool.background}
                  alt={tool.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient}`} />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  {tool.category === 'paid' && (
                    <span className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                      {tool.price}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mt-6 mb-2">{tool.title}</h3>
                <p className="text-gray-200 mb-6">{tool.description}</p>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-8 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center justify-center group">
                  <span>Try Now</span>
                  <Bot className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTools;