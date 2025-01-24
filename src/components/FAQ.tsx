import React, { useState } from 'react';
import { ChevronDown, Brain, Rocket, Shield, Zap } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is quantum neural integration?",
      answer: "Quantum neural integration is our revolutionary technology that merges quantum computing with human consciousness, allowing for unprecedented mental capabilities and direct neural interfaces with advanced AI systems.",
      icon: Brain
    },
    {
      question: "How does the interstellar drive work?",
      answer: "Our interstellar drive utilizes quantum tunneling and space-time manipulation to achieve faster-than-light travel, enabling exploration of distant star systems within human lifetimes.",
      icon: Rocket
    },
    {
      question: "Is consciousness transfer safe?",
      answer: "Our consciousness transfer process has been perfected over centuries of development, utilizing quantum state preservation to ensure 100% fidelity in neural pattern transmission.",
      icon: Shield
    },
    {
      question: "What powers the quantum core?",
      answer: "The quantum core harnesses zero-point energy from vacuum fluctuations, providing virtually unlimited clean energy for all our advanced systems and technologies.",
      icon: Zap
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0f2c]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
          alt="Quantum Background"
          className="absolute w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] via-[#0a0f2c]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Knowledge Base
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the mysteries of advanced technology from the year 5023
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-blue-500/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <faq.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-8 pb-6 transition-all duration-300 ${
                  openIndex === index ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-300 pl-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Particles Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100" />
          <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200" />
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;