import React from 'react';
import { X, Check } from 'lucide-react';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const tools = [
    {
      name: "ChatGPT-4",
      features: {
        api: true,
        customization: true,
        enterprise: true,
        price: "$20/mo",
        support: "24/7",
        integration: "Full"
      }
    },
    {
      name: "Claude 2",
      features: {
        api: true,
        customization: true,
        enterprise: true,
        price: "$30/mo",
        support: "Business Hours",
        integration: "Partial"
      }
    },
    {
      name: "Bard",
      features: {
        api: false,
        customization: true,
        enterprise: false,
        price: "Free",
        support: "Community",
        integration: "Limited"
      }
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div
        className="relative bg-slate-900 rounded-2xl w-full max-w-5xl p-6 overflow-hidden shadow-lg"
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 id="modal-title" className="text-2xl font-bold text-white">
            Compare AI Tools
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close comparison modal"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="mt-6">
          <div className="grid grid-cols-4 gap-4">
            {/* Features Column */}
            <div className="space-y-6 text-gray-400 font-medium">
              <div className="h-20" /> {/* Spacer */}
              <div>API Access</div>
              <div>Customization</div>
              <div>Enterprise Ready</div>
              <div>Pricing</div>
              <div>Support</div>
              <div>Integration</div>
            </div>

            {/* Tool Columns */}
            {tools.map((tool, index) => (
              <div key={index} className="space-y-6">
                {/* Tool Header */}
                <div className="h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                </div>

                {/* Features */}
                <div className="flex justify-center">
                  {tool.features.api ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <div className="flex justify-center">
                  {tool.features.customization ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <div className="flex justify-center">
                  {tool.features.enterprise ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <div className="text-center text-white">{tool.features.price}</div>
                <div className="text-center text-white">{tool.features.support}</div>
                <div className="text-center text-white">{tool.features.integration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              Close
            </button>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Export Comparison
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
