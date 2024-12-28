"use client";

import React, { useState, useEffect } from "react";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  ExternalLinkIcon,
  Mail,
  Globe,
  Sparkles,
} from "lucide-react";

const links = [
  {
    title: "Portfolio",
    subtitle: "Explore my latest work",
    url: "https://portfolio.example.com",
    icon: <Globe size={20} />,
    color: "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600",
  },
  {
    title: "GitHub",
    subtitle: "Check out my code",
    url: "https://github.com",
    icon: <GithubIcon size={20} />,
    color: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900",
  },
  {
    title: "LinkedIn",
    subtitle: "Connect with me",
    url: "https://linkedin.com",
    icon: <LinkedinIcon size={20} />,
    color: "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700",
  },
  {
    title: "Twitter",
    subtitle: "Follow my updates",
    url: "https://twitter.com",
    icon: <TwitterIcon size={20} />,
    color: "bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500",
  },
  {
    title: "Instagram",
    subtitle: "Behind the scenes",
    url: "https://instagram.com",
    icon: <InstagramIcon size={20} />,
    color: "bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500",
  },
];

const ParticleEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-1 h-1 bg-white rounded-full animate-float opacity-20`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`,
        }}
      />
    ))}
  </div>
);

export default function Page() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/30 via-black to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black animate-pulse"></div>
      <ParticleEffect />

      <div className="max-w-xl w-full space-y-12 relative z-10">
        {/* Premium Profile Section */}
        <div className="text-center relative group">
          {/* Animated Background Elements */}
          <div className="absolute -inset-40 top-0 bg-gradient-to-r from-violet-600/20 via-transparent to-blue-600/20 blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative mx-auto w-48 h-48 mb-10 group">
              {/* Multiple Animated Rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-600 rounded-full animate-spin-slow blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-full animate-spin-reverse-slow blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Profile Image */}
              <div className="relative rounded-full w-full h-full p-1 bg-gradient-to-r from-gray-900 to-black">
                <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
                  <img
                    src="/api/placeholder/192/192"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="relative space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent mb-4 transform transition-all duration-500 group-hover:scale-[1.02]">
                Your Name
              </h1>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <h2 className="text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Digital Creator & Developer
                </h2>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>

              <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                Crafting exceptional digital experiences and pushing the
                boundaries of web development
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Links Section */}
        <div className="space-y-4 relative">
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-transparent to-blue-600/20 blur-3xl -z-10"></div>

          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              className={`group relative w-full flex items-center justify-between p-6 rounded-2xl ${link.color} backdrop-blur-lg transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Advanced Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>

              {/* Content Layout */}
              <div className="flex items-center gap-6">
                <div className="p-3 bg-white/10 rounded-xl transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white/15">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{link.title}</span>
                  <span className="text-sm text-white/70">{link.subtitle}</span>
                </div>
              </div>

              <ExternalLinkIcon
                size={20}
                className={`transform transition-all duration-500 ${
                  hoveredIndex === index
                    ? "translate-x-0 opacity-100 rotate-0"
                    : "translate-x-4 opacity-0 rotate-45"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Premium Contact Button */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
          <button className="relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium flex items-center justify-center gap-3 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02]">
            <Mail className="w-5 h-5" />
            <span className="text-lg">Let's Create Something Amazing</span>
          </button>
        </div>

        {/* Premium Footer */}
        <footer className="text-center pt-8 pb-4">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span>© 2024 Your Brand</span>
            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
            <span>Built by seirennn</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
