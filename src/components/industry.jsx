'use client';

import React, { useState, useEffect } from 'react';
// import IndustryCard from '@/components/IndustryCard';
import {
  Code, Shield, Cpu, Database,
  TrendingUp, Users, Palette, Lock,
  ChevronRight, ArrowRight
} from 'lucide-react';
import Button from './common/button.jsx';

const industries = [
  { icon: Code, title: "Software Development", gradient: "bg-gradient-to-r from-blue-500 to-blue-600", description: "Full-stack developers, mobile app specialists, and software architects", stats: { experts: "250+", projects: "1.2k+" } },
  { icon: Shield, title: "Cybersecurity & DevSecOps", gradient: "bg-gradient-to-r from-red-500 to-red-600", description: "Security experts, penetration testers, and compliance specialists", stats: { experts: "120+", projects: "800+" } },
  { icon: Cpu, title: "Cloud & DevOps", gradient: "bg-gradient-to-r from-green-500 to-green-600", description: "AWS, Azure, GCP experts and infrastructure automation specialists", stats: { experts: "180+", projects: "950+" } },
  { icon: Database, title: "AI & Data Science", gradient: "bg-gradient-to-r from-purple-500 to-purple-600", description: "Machine learning engineers, data scientists, and AI researchers", stats: { experts: "160+", projects: "600+" } },
  { icon: TrendingUp, title: "Finance & Risk", gradient: "bg-gradient-to-r from-emerald-500 to-emerald-600", description: "Financial analysts, risk managers, and fintech specialists", stats: { experts: "90+", projects: "400+" } },
  { icon: Users, title: "Digital Marketing", gradient: "bg-gradient-to-r from-orange-500 to-orange-600", description: "Growth marketers, SEO specialists, and social media experts", stats: { experts: "140+", projects: "1.5k+" } },
  { icon: Palette, title: "Design & UI/UX", gradient: "bg-gradient-to-r from-pink-500 to-pink-600", description: "UI/UX designers, product designers, and brand specialists", stats: { experts: "110+", projects: "700+" } },
  { icon: Lock, title: "Blockchain & Web3", gradient: "bg-gradient-to-r from-yellow-500 to-yellow-600", description: "Blockchain developers, smart contract auditors, and DeFi experts", stats: { experts: "75+", projects: "300+" } },
];

const IndustryCard = ({ icon: Icon, title, gradient, description, stats }) => {
  return (
    <div className="w-80 flex-shrink-0 group relative mx-4">
      <div className="relative p-8 bg-white rounded-3xl shadow-md border border-slate-200 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-500 group-hover:-translate-y-2 overflow-hidden">
        <div className={`absolute inset-0 ${gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
        {/* <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent rounded-full rotate-45 group-hover:rotate-90 transition-transform duration-700" />
        </div> */}

        <div className="relative z-10">
          <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition duration-500 shadow-md`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition">
            {title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>

          {/* <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{stats.experts} experts</span>
            <span>{stats.projects} projects</span>
          </div> */}

          {/* <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className="w-5 h-5 text-blue-600" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;


export const IndustriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getVisibleCards = () => {
    const visible = 3;
    const cards = [];
    for (let i = 0; i < visible; i++) {
      const index = (currentIndex + i) % industries.length;
      cards.push(industries[index]);
    }
    return cards;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-4">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-lg text-slate-600">
            From cutting-edge technology to creative solutions, our experts span across all major industries.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            onClick={() => setCurrentIndex(prev => (prev - 1 + industries.length) % industries.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-md hover:shadow-lg flex items-center justify-center group"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 rotate-180 group-hover:text-blue-600" />
          </button>

          <button
            onClick={() => setCurrentIndex(prev => (prev + 1) % industries.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-md hover:shadow-lg flex items-center justify-center group"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
          </button>

          <div className="flex justify-center items-center overflow-hidden px-12">
            <div className="flex transition-transform duration-700 ease-in-out">
              {getVisibleCards().map((industry, index) => (
                <IndustryCard key={`${currentIndex}-${index}`} {...industry} />
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">Ready to find your perfect expert match?</p>
          <Button variant="primary" size="lg" className="group">
            Explore All Industries
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
