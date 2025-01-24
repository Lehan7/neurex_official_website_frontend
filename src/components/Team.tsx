import React, { useState } from 'react';
import { Brain, Mail, Linkedin, Sparkles, Rocket, Code, Cpu, ChevronRight } from 'lucide-react';
import TeamModal from '../models/TeamModal';

interface TeamMember {
  name: string;
  title: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  image: string;
  gradient: string;
  icon: React.ElementType;
  bio?: string;
  achievements?: string[];
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Lehan Kawshila",
      title: "Founder, CEO & CTO",
      email: "lehankawshilaofficialmusic@gmail.com",
      linkedin: "www.linkedin.com/in/lehan-kawshila-856b8b288",
      twitter: "lehankawshila",
      github: "lehankawshila",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      gradient: "from-blue-600/20 to-purple-600/20",
      icon: Brain,
      bio: "Pioneering the future of technology through innovative solutions and visionary leadership. Leading the charge in AI and neural technology advancement.",
      achievements: [
        "Led development of breakthrough neural interface technology",
        "Secured $50M in Series A funding",
        "Published 15+ research papers in leading journals",
        "Awarded Innovation Leader of the Year 2023"
      ]
    },
    {
      name: "Yujika Kaushalya",
      title: "CFO & President, Strategic Acquisitions",
      email: "wmykrathnayaka@gmail.com",
      linkedin: "yujika-kaushalya",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      gradient: "from-purple-600/20 to-pink-600/20",
      icon: Cpu,
      bio: "Strategic financial leader with expertise in M&A and corporate development. Driving NeureX's financial growth and expansion strategies.",
      achievements: [
        "Managed $100M+ in strategic acquisitions",
        "Increased company valuation by 300%",
        "Implemented AI-driven financial forecasting system"
      ]
    },
    {
      name: "Athif",
      title: "President & COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      gradient: "from-emerald-600/20 to-teal-600/20",
      icon: Code,
      bio: "Operations expert focused on scaling NeureX's global presence and optimizing organizational efficiency.",
      achievements: [
        "Established operations in 15+ countries",
        "Reduced operational costs by 40%",
        "Led digital transformation initiatives"
      ]
    },
    {
      name: "Navindu Sachinda",
      title: "VP, Technical Engineering",
      email: "navindu@neurex.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      gradient: "from-cyan-600/20 to-blue-600/20",
      icon: Rocket,
      bio: "Leading technical innovation and engineering excellence across all NeureX products.",
      achievements: [
        "Patented 5 new technologies",
        "Built core engineering team of 100+",
        "Launched revolutionary neural interface platform"
      ]
    },
    {
      name: "Dinethra Mahanama",
      title: "VP, Materials Engineering",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      gradient: "from-red-600/20 to-orange-600/20",
      icon: Cpu,
      bio: "Pioneering advanced materials research for next-generation neural interfaces.",
      achievements: [
        "Developed new biocompatible materials",
        "Led research team of 50+ scientists",
        "Published groundbreaking materials research"
      ]
    },
    {
      name: "Athoof Ajmal",
      title: "VP of Web Development and VP of Finance",
      email: "athoof@neurex.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      gradient: "from-indigo-600/20 to-violet-600/20",
      icon: Code,
      bio: "Dual expertise in web technologies and financial strategy, driving digital innovation.",
      achievements: [
        "Rebuilt company website increasing conversions by 200%",
        "Implemented blockchain-based financial systems",
        "Led successful Series B funding round"
      ]
    },
    {
      name: "Nethula Rankidu",
      title: "VP, Research and Development",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80",
      gradient: "from-yellow-600/20 to-amber-600/20",
      icon: Brain,
      bio: "Leading cutting-edge research initiatives in neural technology and AI systems.",
      achievements: [
        "Filed 10+ patents in neural technology",
        "Established research partnerships with top universities",
        "Led breakthrough AI research projects"
      ]
    },
    {
      name: "Yenula Senevirathna",
      title: "VP, Spacecraft Engineering",
      image: "https://images.unsplash.com/photo-1548449112-96a38a643324?auto=format&fit=crop&q=80",
      gradient: "from-blue-600/20 to-sky-600/20",
      icon: Rocket,
      bio: "Spearheading aerospace innovations and space technology development.",
      achievements: [
        "Designed next-gen spacecraft systems",
        "Led successful orbital mission planning",
        "Developed revolutionary propulsion technology"
      ]
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0f2c] py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
          alt="Neural Network"
          className="absolute w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] via-[#0a0f2c]/90 to-blue-900/30" />
        
        {/* Circuit Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full backdrop-blur-sm mb-6">
            <Brain className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Our Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Visionaries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team of experts is dedicated to pushing the boundaries of technology and innovation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              {/* Background Image and Overlay */}
              <div className="relative h-[400px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-90 group-hover:opacity-80 transition-opacity duration-500`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                      <member.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  </div>

                  <p className="text-sm text-gray-200 mb-4">{member.title}</p>

                  {/* Contact Links */}
                  <div className="flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center text-sm text-white/90 hover:text-white group"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate">{member.email}</span>
                        <ChevronRight className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={`https://${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white/90 hover:text-white group"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        <span>LinkedIn Profile</span>
                        <ChevronRight className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-full border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      <TeamModal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />
    </section>
  );
};

export default Team;