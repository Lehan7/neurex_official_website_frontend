import React, { useState } from "react";
import { Send, Brain, Sparkles } from "lucide-react";
import Swal from "sweetalert2";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://neurex-official-website-server-main.vercel.app/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Thank You for Subscribing!",
          text: "Stay tuned for new tools and updates.",
          icon: "success",
          confirmButtonText: "Awesome!",
          timer: 3000,
          showConfirmButton: false,
          willClose: () => {
            setSubscribed(true); // Set subscribed state
          },
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: result.error || "Subscription failed.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }

    setEmail("");
  };

  return (
    <section className="relative min-h-[60vh] bg-[#0a0f2c] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
          alt="Neural Network"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] via-[#0a0f2c]/90 to-blue-900/30" />
        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150" />
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Robot Hand */}
          <div className="lg:w-1/2">
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
                alt="Robot Hand"
                className="rounded-2xl shadow-2xl shadow-blue-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Right Side - Subscription Form */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full backdrop-blur-sm">
              <Brain className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">NeureX</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's subscribe to NeureX
            </h2>

            <p className="text-xl text-gray-300">
              Stay updated with our latest innovations and breakthroughs
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="relative max-w-xl">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/5 border border-blue-500/20 rounded-full focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400 pr-36"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-white text-2xl">You're already subscribed!</p>
            )}

            <div className="flex items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Exclusive Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
