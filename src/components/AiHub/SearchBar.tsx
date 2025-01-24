import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const mockSuggestions = [
    'Healthcare AI Solutions',
    'Neural Networks',
    'Machine Learning',
    'Space Technology',
    'Scientific Research Tools',
    'AI Development',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div ref={searchRef} className="relative">
      <div className={`relative flex items-center transition-all duration-300 ${
        isFocused ? 'scale-105' : 'scale-100'
      }`}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className={`w-5 h-5 transition-colors duration-300 ${
            isFocused ? 'text-blue-500' : 'text-gray-400'
          }`} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search AI tools, categories, or resources..."
          className={`w-full pl-10 pr-12 py-2 bg-white/5 border rounded-lg transition-all duration-300
            focus:outline-none focus:ring-2 dark:text-white
            ${isFocused
              ? 'border-blue-500 ring-blue-500/20'
              : 'border-gray-300 dark:border-gray-700'
            }`}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {isFocused && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#0f1835] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(suggestion);
                  setIsFocused(false);
                }}
                className="w-full flex items-center justify-between px-4 py-2 text-left rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              >
                <span>{suggestion}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;