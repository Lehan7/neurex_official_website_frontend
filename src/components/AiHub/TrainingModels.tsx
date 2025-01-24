import React, { useState } from 'react';
import { Brain, Cpu, Code, Rocket, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

const TrainingModels = () => {
  const [activeModel, setActiveModel] = useState<string | null>(null);

  const models = [
    {
      id: 'gpt4',
      name: 'GPT-4 Training',
      type: 'Language Model',
      status: 'In Progress',
      progress: 67,
      eta: '2h 15m',
      metrics: {
        accuracy: 98.5,
        loss: 0.15,
        epochs: 100
      },
      icon: Brain,
      gradient: 'from-blue-600/20 to-purple-600/20',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80'
    },
    {
      id: 'vision',
      name: 'Vision Transformer',
      type: 'Computer Vision',
      status: 'Queued',
      progress: 0,
      eta: '4h 30m',
      metrics: {
        accuracy: 0,
        loss: 0,
        epochs: 200
      },
      icon: Cpu,
      gradient: 'from-purple-600/20 to-pink-600/20',
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80'
    },
    {
      id: 'codex',
      name: 'Code Generation',
      type: 'Programming',
      status: 'Completed',
      progress: 100,
      eta: '0h 0m',
      metrics: {
        accuracy: 95.8,
        loss: 0.22,
        epochs: 150
      },
      icon: Code,
      gradient: 'from-cyan-600/20 to-blue-600/20',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
    },
    {
      id: 'robotics',
      name: 'Robotics Control',
      type: 'Reinforcement',
      status: 'Failed',
      progress: 45,
      eta: '0h 0m',
      metrics: {
        accuracy: 78.2,
        loss: 1.45,
        epochs: 50
      },
      icon: Rocket,
      gradient: 'from-red-600/20 to-orange-600/20',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'text-blue-400';
      case 'Queued':
        return 'text-yellow-400';
      case 'Completed':
        return 'text-green-400';
      case 'Failed':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

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
            <Cpu className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Model Training</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Model Training Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Monitor and manage your AI model training processes in real-time
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {models.map((model) => (
            <div
              key={model.id}
              className={`relative overflow-hidden rounded-2xl bg-white/5 border transition-all duration-300 ${
                activeModel === model.id
                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Header */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${model.gradient} backdrop-blur-sm opacity-90`} />
                
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/10 rounded-xl">
                        <model.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{model.name}</h3>
                        <p className="text-sm text-white/80">{model.type}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(model.status)} bg-white/10`}>
                      {model.status}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="flex justify-between text-sm text-white/80 mb-2">
                      <span>Progress</span>
                      <span>{model.progress}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${model.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <div className="text-sm text-gray-400 mb-1">Accuracy</div>
                    <div className="text-xl font-bold text-white">
                      {model.metrics.accuracy}%
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <div className="text-sm text-gray-400 mb-1">Loss</div>
                    <div className="text-xl font-bold text-white">
                      {model.metrics.loss}
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <div className="text-sm text-gray-400 mb-1">Epochs</div>
                    <div className="text-xl font-bold text-white">
                      {model.metrics.epochs}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    ETA: {model.eta}
                  </div>
                  <div className="flex items-center space-x-2">
                    {model.status === 'In Progress' ? (
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Pause className="w-5 h-5 text-white" />
                      </button>
                    ) : (
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Play className="w-5 h-5 text-white" />
                      </button>
                    )}
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <RotateCcw className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={() => setActiveModel(model.id)}
                      className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingModels;