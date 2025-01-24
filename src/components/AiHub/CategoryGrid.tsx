import React from 'react';
import { Brain, Microscope, Rocket, FlaskRound as Flask, Atom, Database, Cpu, Binary, Telescope, Dna, Globe, Zap } from 'lucide-react';
import { ViewMode, CategoryType } from './types';

interface CategoryGridProps {
  viewMode: ViewMode;
  onCategoryClick: (category: CategoryType) => void;
}

const categories = [
  {
    id: 'quantum',
    title: 'Quantum Computing Tools',
    icon: Atom,
    description: 'Advanced quantum simulation and computation tools',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    tools: 48,
    updates: 8,
    background: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  },
  {
    id: 'space',
    title: 'Space Research & Astronomy',
    icon: Telescope,
    description: 'Tools for astronomical research and space exploration',
    gradient: 'from-purple-600/20 to-pink-600/20',
    tools: 76,
    updates: 12,
    background: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80',
  },
  {
    id: 'biotech',
    title: 'Biotechnology Research',
    icon: Dna,
    description: 'Advanced tools for genetic and biological research',
    gradient: 'from-green-600/20 to-emerald-600/20',
    tools: 92,
    updates: 15,
    background: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
  },
  {
    id: 'ai-research',
    title: 'AI Research Tools',
    icon: Brain,
    description: 'Neural networks and machine learning research tools',
    gradient: 'from-orange-600/20 to-red-600/20',
    tools: 124,
    updates: 20,
    background: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
  },
  {
    id: 'data-analysis',
    title: 'Scientific Data Analysis',
    icon: Database,
    description: 'Advanced data analysis and visualization tools',
    gradient: 'from-indigo-600/20 to-blue-600/20',
    tools: 86,
    updates: 14,
    background: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    icon: Cpu,
    description: 'Tools for robotics research and development',
    gradient: 'from-violet-600/20 to-purple-600/20',
    tools: 68,
    updates: 10,
    background: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
  },
  {
    id: 'computational',
    title: 'Computational Science',
    icon: Binary,
    description: 'High-performance computing and simulation tools',
    gradient: 'from-yellow-600/20 to-amber-600/20',
    tools: 94,
    updates: 16,
    background: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&q=80',
  },
  {
    id: 'climate',
    title: 'Climate & Earth Science',
    icon: Globe,
    description: 'Tools for climate research and earth science',
    gradient: 'from-teal-600/20 to-green-600/20',
    tools: 72,
    updates: 11,
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  },
];

const CategoryGrid: React.FC<CategoryGridProps> = ({ viewMode, onCategoryClick }) => {
  return (
    <div className={`grid gap-6 ${
      viewMode === 'grid'
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1'
    }`}>
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => onCategoryClick(category.id as CategoryType)}
          className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer
            ${viewMode === 'grid' ? 'aspect-square' : 'h-32'}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={category.background}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} backdrop-blur-sm opacity-90`} />
          </div>

          {/* Content */}
          <div className={`relative h-full p-6 flex ${
            viewMode === 'grid' ? 'flex-col' : 'flex-row items-center'
          }`}>
            <div className={`flex items-center ${viewMode === 'grid' ? 'mb-4' : 'mr-6'}`}>
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <category.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className={`text-gray-200 ${viewMode === 'grid' ? 'mb-4' : 'hidden md:block'}`}>
                {category.description}
              </p>

              <div className={`flex items-center space-x-4 ${
                viewMode === 'grid' ? 'mt-auto' : ''
              }`}>
                <span className="text-sm text-white/80">
                  {category.tools} Tools
                </span>
                {category.updates > 0 && (
                  <span className="text-sm text-white/80">
                    {category.updates} Updates
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Hover Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;