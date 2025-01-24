import React, { useState, useEffect } from 'react';
import {
  Sun, Moon, Search, Bell, List, Grid
} from 'lucide-react';
import SearchBar from './SearchBar';
import CategoryGrid from './CategoryGrid';
import NotificationPanel from './NotificationPanel';
import ToolsPanel from './ToolsPanel';
import { CategoryType, ViewMode } from './types';

const AiHubLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [isToolsPanelOpen, setIsToolsPanelOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0f2c] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80" alt="Space" className="absolute w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2c] via-transparent to-[#0a0f2c]" />
        </div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Header */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-[#0a0f2c]/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-blue-500/20' : 'border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">NeureX Hub</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden sm:block">
              <SearchBar />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
                {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsNotificationPanelOpen(true)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
                <Bell className="w-5 h-5" />
              </button>
              <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryGrid viewMode={viewMode} onCategoryClick={(category) => { setSelectedCategory(category); setIsToolsPanelOpen(true); }} />
          </div>
        </main>

        {/* Panels */}
        <NotificationPanel isOpen={isNotificationPanelOpen} onClose={() => setIsNotificationPanelOpen(false)} />
        <ToolsPanel isOpen={isToolsPanelOpen} onClose={() => setIsToolsPanelOpen(false)} category={selectedCategory} />
      </div>
    </div>
  );
};

export default AiHubLayout;
