import React from 'react';
import { X, ExternalLink, Download, Star, DollarSign } from 'lucide-react';
import { CategoryType } from './types';

interface ToolsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  category: CategoryType | null;
}

const tools = {
  quantum: [
    {
      name: 'Quantum Simulator Pro',
      description: 'Professional quantum circuit simulation tool',
      type: 'paid',
      price: '$199/month',
      rating: 4.8,
      downloads: 12500,
    },
    {
      name: 'QubitViz',
      description: 'Quantum state visualization toolkit',
      type: 'free',
      rating: 4.6,
      downloads: 28000,
    },
  ],
  space: [
    {
      name: 'StellarMap Analytics',
      description: 'Advanced astronomical data analysis platform',
      type: 'paid',
      price: '$299/month',
      rating: 4.9,
      downloads: 8900,
    },
    {
      name: 'CosmoSim',
      description: 'Space environment simulation tool',
      type: 'free',
      rating: 4.7,
      downloads: 34000,
    },
  ],
  // Add more tools for other categories...
};

const ToolsPanel: React.FC<ToolsPanelProps> = ({ isOpen, onClose, category }) => {
  if (!isOpen || !category) return null;

  const categoryTools = tools[category] || [];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-2xl">
        <div className="h-full bg-[#0f1835] shadow-xl overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-[#0f1835]/80 backdrop-blur-md border-b border-blue-500/20 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Available Tools</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="p-6 grid gap-6">
            {categoryTools.map((tool, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-gray-300">{tool.description}</p>
                    </div>
                    {tool.type === 'paid' ? (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tool.price}
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        Free
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="ml-1 text-white">{tool.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-5 h-5 text-blue-400" />
                        <span className="ml-1 text-white">{tool.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center space-x-2">
                      <span>Try Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPanel;