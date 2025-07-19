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

const FeatureCard = ({ icon: Icon, title, description, delay = 0 , iconColor}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r  ${iconColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};


export const WhyChooseUsSection = () => {
    const features = [
        {
            icon: Search,
            title: "Vetted Experts Only",
            description: "Every SME is handpicked and verified for deep domain knowledge and real-world experience.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: Zap,
            title: "Fast Turnaround",
            description: "Hire within 24–48 hours. No long wait times, no endless interviews.",
            color: "from-yellow-500 to-orange-600",
            bgColor: "bg-yellow-50"
        },
        {
            icon: Shield,
            title: "Flexible Engagements",
            description: "Choose hourly, monthly, or project-based hiring — whatever works best for you.",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50"
        },
        {
            icon: Lock,
            title: "Secure & Transparent",
            description: "Clear contracts, tracked time, and secured payments ensure smooth, trusted engagements.",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-6">
                        Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Platform</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Experience the difference with our carefully curated network of experts and streamlined hiring process
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 200}
                            iconColor={feature.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};