import React, { useState } from 'react';
import { Brain, Search, Filter, Star, Users, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

const AiResearch = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const researchCategories = [
    {
      id: 'neural',
      title: 'Neural Networks',
      count: 156,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
      gradient: 'from-blue-600/20 to-purple-600/20'
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      count: 89,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      gradient: 'from-purple-600/20 to-pink-600/20'
    },
    {
      id: 'cv',
      title: 'Computer Vision',
      count: 124,
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80',
      gradient: 'from-cyan-600/20 to-blue-600/20'
    },
    {
      id: 'rl',
      title: 'Reinforcement Learning',
      count: 67,
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80',
      gradient: 'from-green-600/20 to-emerald-600/20'
    }
  ];

  const researchPapers = [
    {
      title: "Advanced Neural Architecture for Real-time Processing",
      authors: ["Dr. Sarah Chen", "Prof. James Wilson"],
      institution: "MIT",
      date: "2024",
      citations: 156,
      category: "neural",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
    },
    {
      title: "Transformer Models in Medical Diagnosis",
      authors: ["Dr. Michael Brown", "Dr. Emily White"],
      institution: "Stanford",
      date: "2024",
      citations: 89,
      category: "nlp",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    },
    {
      title: "Real-time Object Detection in Low-light Conditions",
      authors: ["Prof. David Lee"],
      institution: "Berkeley",
      date: "2024",
      citations: 124,
      category: "cv",
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0f2c] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full backdrop-blur-sm mb-6">
            <Brain className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Research Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Research & Publications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge research papers, studies, and publications in artificial intelligence
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search research papers, publications..."
              className="w-full px-12 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Filter className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative overflow-hidden rounded-xl aspect-[4/3] group ${
                activeCategory === category.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} backdrop-blur-sm opacity-90`} />
              <div className="relative p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm text-white/80">{category.count} Papers</span>
                  <ArrowRight className="w-5 h-5 text-white transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {paper.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {paper.authors.map((author, idx) => (
                    <span key={idx} className="text-sm text-gray-400">{author}</span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-400">{paper.institution}</span>
                  <span className="text-gray-400">{paper.date}</span>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-400">{paper.citations} citations</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="text-sm text-gray-400">12 researchers</span>
                    </div>
                  </div>
                  
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiResearch;