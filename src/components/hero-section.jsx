'use client';

import React, { useState, useEffect } from 'react';
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

import Button from './common/button.jsx';
import { useRouter } from 'next/navigation';
// Hero Section Component
export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-[500px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Headline */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-sm md:text-base text-indigo-600 font-semibold mb-4 tracking-wide uppercase">
                            Welcome to NiceTech Inc.
                        </div>
                        <h1 className="text-xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                            Your On-Demand
                            <span className="relative">
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> SAP Talent</span>
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transform scale-x-0 animate-pulse"></div>
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Partner</span>
                        </h1>
                    </div>

                    {/* Subtext */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed w-full mx-auto font-medium">
                            Power your projects instantly with the right SAP professionals, precisely when you need them.
                        </p>
                        <p className="text-base md:text-lg text-slate-500 mb-8 leading-relaxed w-full mx-auto">
                            We redefine SAP hiring by giving your business the flexibility to scale up or down with SAP expertise on demand. 
                            No more lengthy hiring processes or weeks of searching — we swiftly connect you with pre-vetted, contract-based SAP professionals for every business need.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 mb-12">
                            <div className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>Pre-vetted SAP professionals</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>Contract-based flexibility</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>Swift connections</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button onClick={()=> router.push('/contact-us')} variant="primary" size="xl" className="group">
                                <div className='flex items-center gap-2'>
                                    <span>Find SAP Talent</span>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Button>
                            <Button onClick={()=> router.push('/contact-us')} variant="outline" size="xl" className="group">
                                <div className='flex items-center gap-2'>
                                    <span>Join as SAP Expert</span>
                                    <Star className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span>500+ SAP Professionals</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-blue-500" />
                                <span>1000+ SAP Projects Delivered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-green-500" />
                                <span>48hr Talent Matching</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};