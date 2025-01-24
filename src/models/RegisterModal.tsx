import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  society: {
    title: string;
    icon: React.ElementType;
    whatsappLink: string; // Added WhatsApp group link
  } | null;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, society }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    field: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen || !society) return null;

  const Icon = society.icon;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send data to the backend
      const response = await axios.post("https://neurex-official.vercel.app/api/register", {
        ...formData,
        society: society.title,
      });

      if (response.data.success) {
        alert("Registration successful! Redirecting to WhatsApp group...");
        window.open(society.whatsappLink, "_blank");
        onClose();
      } else {
        alert("Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-[#0f172a] rounded-2xl w-full max-w-xl p-8 shadow-xl border border-blue-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Icon className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Join {society.title}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/5 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/5 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="field" className="block text-sm font-medium text-gray-300 mb-1">
                  Field of Study
                </label>
                <select
                  id="field"
                  value={formData.field}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/5 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white"
                  required
                >
                  <option value="" className="bg-[#0f172a]">Select your field</option>
                  <option value="computer-science" className="bg-[#0f172a]">Computer Science</option>
                  <option value="engineering" className="bg-[#0f172a]">Engineering</option>
                  <option value="physics" className="bg-[#0f172a]">Physics</option>
                  <option value="mathematics" className="bg-[#0f172a]">Mathematics</option>
                  <option value="other" className="bg-[#0f172a]">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Why do you want to join?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/5 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-500"
                  placeholder="Tell us about your interest in this society..."
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Submit Application"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-white/5 text-gray-300 rounded-lg font-medium hover:bg-white/10 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
