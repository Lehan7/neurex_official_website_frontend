import React from 'react';
import { X, Bell, Star, Download, Zap } from 'lucide-react';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    type: 'update',
    title: 'New AI Tool Added',
    description: 'Neural Network Visualizer Pro is now available',
    time: '2 minutes ago',
    icon: Star,
    color: 'text-yellow-400',
  },
  {
    id: 2,
    type: 'news',
    title: 'Industry Update',
    description: 'Latest breakthroughs in quantum computing',
    time: '1 hour ago',
    icon: Zap,
    color: 'text-blue-400',
  },
  {
    id: 3,
    type: 'update',
    title: 'Tool Update Available',
    description: 'Version 2.0 of AI Research Assistant released',
    time: '3 hours ago',
    icon: Download,
    color: 'text-green-400',
  },
];

const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md">
        <div className="h-full bg-white dark:bg-[#0f1835] shadow-xl">
          {/* Header */}
          <div className="px-6 py-4 border-b dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-semibold dark:text-white">Notifications</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5 dark:text-white" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="p-4 space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg bg-white/10 ${notification.color}`}>
                    <notification.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium dark:text-white">{notification.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {notification.description}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
                      {notification.time}
                    </span>
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

export default NotificationPanel;