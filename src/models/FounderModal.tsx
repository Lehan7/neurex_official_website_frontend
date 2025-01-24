import React from 'react';
import { X, Mail, Linkedin, Twitter, Github, Brain, Award, Lightbulb, Target } from 'lucide-react';

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FounderModal: React.FC<FounderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const achievements = [
    {
      title: "Innovation Leadership",
      description: "Led breakthrough developments in neural technology and AI systems",
      icon: Lightbulb,
    },
    {
      title: "Research Excellence",
      description: "Published 15+ papers in leading scientific journals",
      icon: Brain,
    },
    {
      title: "Strategic Growth",
      description: "Secured $50M+ in funding and strategic partnerships",
      icon: Target,
    },
    {
      title: "Industry Recognition",
      description: "Awarded Innovation Leader of the Year 2023",
      icon: Award,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-[#0f172a] rounded-2xl w-full max-w-4xl overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse delay-100" />
          </div>

          {/* Content */}
          <div className="relative p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column - Photo & Info */}
              <div className="md:w-1/3">
                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img
                    src="src\assets\images\Team\Lehan.jpg"
                    alt="Lehan Kawshila"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <a
                    href="mailto:lehankawshilaofficialmusic@gmail.com"
                    className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lehan-kawshila-856b8b288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/lehankawshila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </a>
                  <a
                    href="https://github.com/lehankawshila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="md:w-2/3 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Lehan Kawshila</h3>
                  <p className="text-xl text-blue-400">Founder, CEO & CTO</p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    A visionary leader in technology and innovation, Lehan Kawshila has been at the forefront of neural technology advancement. With a passion for pushing the boundaries of what's possible, he founded NeureX to revolutionize the intersection of human potential and technological innovation.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Under his leadership, NeureX has grown from a ambitious startup to a leading force in neural technology, AI systems, and space exploration, with groundbreaking developments that are shaping the future of human advancement.
                  </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors"
                    >
                      <achievement.icon className="w-6 h-6 text-blue-400 mb-3" />
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderModal;