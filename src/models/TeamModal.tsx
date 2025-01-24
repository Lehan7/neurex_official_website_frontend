import React from 'react';
import { X, Mail, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    title: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    image: string;
    bio?: string;
    achievements?: string[];
  } | null;
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, member }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-[#0f172a] rounded-2xl w-full max-w-4xl overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
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
              {/* Left Column - Photo */}
              <div className="md:w-1/3">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="md:w-2/3 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-xl text-blue-400">{member.title}</p>
                </div>

                {member.bio && (
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                )}

                {member.achievements && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <ExternalLink className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={`https://twitter.com/${member.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;