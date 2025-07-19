'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Search,
    Zap,
    Shield,
    CheckCircle,
    ArrowRight,
    Users,
    Clock,
    Star,
    Code,
    Lock,
    Cpu,
    Database,
    TrendingUp,
    Palette,
    MoreHorizontal,
    Play,
    ChevronRight
} from 'lucide-react';

const ProcessStep = ({ number, title, description, delay = 0, isActive = false, isCompleted = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex items-start gap-6">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
          isCompleted || isActive 
            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 scale-110' 
            : 'bg-slate-300'
        }`}>
          {isCompleted ? (
            <CheckCircle className="w-6 h-6 text-white" />
          ) : (
            <span className={`font-bold text-lg transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-slate-500'
            }`}>
              {number}
            </span>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
            isActive || isCompleted ? 'text-blue-600' : 'text-slate-800'
          }`}>
            {title}
          </h3>
          <p className={`leading-relaxed transition-colors duration-500 ${
            isActive || isCompleted ? 'text-slate-700' : 'text-slate-600'
          }`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// How It Works Section
export const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  
  const steps = [
    {
      title: "Post Your Requirement",
      description: "Tell us what expertise you need and your preferred engagement model."
    },
    {
      title: "Get Matched",
      description: "We recommend top SMEs that fit your needs — no wasted time."
    },
    {
      title: "Interview & Hire",
      description: "Interview your picks, finalize the scope, and onboard immediately."
    },
    {
      title: "Manage & Pay",
      description: "Track hours, communicate in-app, and pay securely via our platform."
    }
  ];

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Animation sequence - runs only once when hasStarted becomes true
  useEffect(() => {
    if (!hasStarted || animationComplete) return;

    let stepIndex = 0;
    const interval = setInterval(() => {
      setCurrentStep(stepIndex + 1);
      
      // Calculate progress height based on current step
      const progressPercentage = ((stepIndex + 1) / steps.length) * 100;
      setProgressHeight(progressPercentage);
      
      stepIndex++;
      
      // Stop animation when all steps are complete
      if (stepIndex >= steps.length) {
        clearInterval(interval);
        setAnimationComplete(true);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [hasStarted, animationComplete, steps.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-6">
            How It <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our streamlined process gets you connected with the right expert in just a few simple steps
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto relative">
          {/* Background Progress Bar */}
          <div className="absolute left-6 top-0 w-0.5 bg-slate-200 rounded-full" style={{ height: 'calc(100% - 3rem)' }}>
            {/* Animated Progress Bar */}
            <div 
              className="w-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out relative"
              style={{ height: `${progressHeight}%` }}
            >
              {/* Animated glow effect at the end */}
              {progressHeight > 0 && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                delay={index * 300}
                isActive={currentStep === index + 1}
                isCompleted={currentStep > index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};