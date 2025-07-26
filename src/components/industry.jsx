'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Users, Building, UserCheck, Briefcase,
  ArrowRight, Zap, CheckCircle, Star
} from 'lucide-react';
import Button from './common/button';
import { useRouter } from 'next/navigation';

// Custom hook for intersection observer with single trigger
const useIntersectionObserver = (threshold = 0.1, rootMargin = '0px') => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasTriggered]);

  return [ref, hasTriggered];
};

const ServiceCard = ({ icon: Icon, title, description, delay = 0, gradient, hasAnimated, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hasAnimated && !isVisible) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated, isVisible, delay]);

  return (
    <div className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>

        {/* Floating orb decoration */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

        <div className="relative z-10">
          {/* Icon with pulsing effect */}
          <div className={`relative w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
            <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Title with gradient text on hover */}
          <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed text-lg">
            {description}
          </p>

          {/* Hover indicator */}
          {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const TrustBadge = ({ icon: Icon, text, delay, hasAnimated }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hasAnimated && !isVisible) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated, isVisible, delay]);

  return (
    <div className={`flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-slate-200/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
};

export const WhoWeServeSection = () => {
  const [sectionRef, hasAnimated] = useIntersectionObserver(0.2, '-50px');
  const [titleVisible, setTitleVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    if (hasAnimated && !titleVisible) {
      const timer = setTimeout(() => setTitleVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated, titleVisible]);

  useEffect(() => {
    if (hasAnimated && !ctaVisible) {
      const timer = setTimeout(() => setCtaVisible(true), 1800);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated, ctaVisible]);

  const services = [
    {
      icon: Users,
      title: "SAP End Users",
      description: "Organizations running SAP systems who need specialized expertise to optimize, maintain, or upgrade their SAP environment.",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      icon: Building,
      title: "Consulting Firms",
      description: "SAP consulting companies looking to scale their teams with certified professionals for client projects and implementations.",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600"
    },
    {
      icon: UserCheck,
      title: "Project Teams",
      description: "Dedicated project groups requiring specific SAP skills and expertise to deliver successful implementations on time.",
      gradient: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      icon: Briefcase,
      title: "Businesses of Any Size",
      description: "From startups to enterprises, any organization needing SAP expertise without the overhead of permanent hires.",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  const trustBadges = [
    { icon: Zap, text: "Simple, Fast & Reliable" },
    { icon: CheckCircle, text: "Most Critical SAP Hiring Needs" },
    { icon: Star, text: "Trusted by Businesses Worldwide" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
            Who Do We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Serve?</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            From SAP end users to consulting firms, we provide the right talent for every SAP challenge
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              delay={index * 200}
              hasAnimated={hasAnimated}
              index={index}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <TrustBadge
                key={index}
                icon={badge.icon}
                text={badge.text}
                delay={1200 + (index * 150)}
                hasAnimated={hasAnimated}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative p-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-6">
                Ready to accelerate your <span className="text-yellow-300">SAP success?</span>
              </h3>
              <p className="text-blue-100 text-md mb-8 leading-relaxed max-w-2xl mx-auto">
                Contact us today and get the SAP professionals you need—on demand. Focus on your business, let us manage the talent.
              </p>
              {/* <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                Get Started Today
                                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button> */}
              <Button onClick={()=> Router.push('/contact-us')} variant='success' size='lg' className="group">
                <div className='flex items-center gap-2'>
                  Get Started Today
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};