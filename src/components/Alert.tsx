import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Alert = ({ success, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative mx-auto max-w-sm w-full bg-white rounded-lg shadow-lg p-6 text-center border border-gray-300">
        {success ? (
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        ) : (
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        )}
        <h3 className="text-lg font-semibold mb-2">
          {success ? 'Success!' : 'Error'}
        </h3>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
