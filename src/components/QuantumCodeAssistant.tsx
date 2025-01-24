import React, { useState } from 'react';
import { Code, Sparkles, Bot, X, Terminal, GitBranch, Shield, Zap } from 'lucide-react';

const QuantumCodeAssistant = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'generate' | 'analyze'>('generate');

  const features = [
    {
      icon: Code,
      title: "Code Generation",
      description: "Generate high-quality code from natural language descriptions"
    },
    {
      icon: Shield,
      title: "Security Analysis",
      description: "Detect potential security vulnerabilities and suggest fixes"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Identify performance bottlenecks and optimize code"
    },
    {
      icon: GitBranch,
      title: "Bug Prediction",
      description: "Predict potential bugs and code quality issues"
    }
  ];

  const handleCodeGeneration = async () => {
    if (!code.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/bigcode/starcoder', {
        headers: {
          Authorization: `Bearer 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`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          inputs: activeTab === 'generate' 
            ? `Generate code for: ${code}`
            : `Analyze the following code for bugs and suggest improvements: ${code}`,
          parameters: {
            max_length: 2000,
            temperature: 0.7,
            top_p: 0.95,
            return_full_text: false
          }
        }),
      });
      
      const result = await response.json();
      setResult(Array.isArray(result) ? result[0].generated_text : result.generated_text);
    } catch (error) {
      console.error('Error:', error);
      setResult('Error processing request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0f2c] py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-blue-600/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-violet-500/10 rounded-full backdrop-blur-sm mb-6">
            <Terminal className="w-5 h-5 text-violet-400 mr-2" />
            <span className="text-violet-400 font-medium">Quantum Code Assistant</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Next-Generation Code Analysis
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of advanced AI for code generation, analysis, and optimization
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-violet-500/20 hover:border-violet-500/40 transition-colors backdrop-blur-sm"
            >
              <feature.icon className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Interface */}
        <div className="bg-white/5 rounded-2xl border border-violet-500/20 backdrop-blur-sm p-8">
          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('generate')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'generate'
                  ? 'bg-violet-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              Generate Code
            </button>
            <button
              onClick={() => setActiveTab('analyze')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'analyze'
                  ? 'bg-violet-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              Analyze Code
            </button>
          </div>

          {/* Input Area */}
          <div className="mb-6">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={activeTab === 'generate' 
                ? "Describe the code you want to generate..."
                : "Paste your code here for analysis..."
              }
              className="w-full h-64 bg-black/30 text-white placeholder-gray-500 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={handleCodeGeneration}
            disabled={loading || !code.trim()}
            className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
            ) : (
              <>
                <span>{activeTab === 'generate' ? 'Generate Code' : 'Analyze Code'}</span>
                <Bot className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Result Area */}
          {result && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                {activeTab === 'generate' ? 'Generated Code' : 'Analysis Results'}
              </h3>
              <div className="relative">
                <pre className="bg-black/30 p-6 rounded-lg text-gray-300 overflow-auto max-h-96 whitespace-pre-wrap">
                  {result}
                </pre>
                <button
                  onClick={() => setResult(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuantumCodeAssistant;