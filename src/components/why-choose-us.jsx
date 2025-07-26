'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    UserCheck,
    Timer,
    Settings,
    DollarSign,
    Award
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0, iconColor, hasAnimated }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (hasAnimated && !isVisible) {
            const timer = setTimeout(() => setIsVisible(true), delay);
            return () => clearTimeout(timer);
        }
    }, [delay, hasAnimated, isVisible]);

    return (
        <div className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${iconColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
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

// Custom hook for intersection observer with single trigger
const useIntersectionObserver = (threshold = 0.1, rootMargin = '0px') => {
    const [hasTriggered, setHasTriggered] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // Don't create observer if already triggered
        if (hasTriggered) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered) {
                    setHasTriggered(true);
                    // Stop observing once triggered
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, hasTriggered]);

    return [ref, hasTriggered];
};

export const WhyChooseUsSection = () => {
    const [sectionRef, hasAnimated] = useIntersectionObserver(0.2, '-50px');
    const [titleVisible, setTitleVisible] = useState(false);

    useEffect(() => {
        if (hasAnimated && !titleVisible) {
            const timer = setTimeout(() => setTitleVisible(true), 100);
            return () => clearTimeout(timer);
        }
    }, [hasAnimated, titleVisible]);

    const features = [
        {
            icon: UserCheck,
            title: "Immediate Access to Talent",
            description: "Select from our pool of SAP specialists and fill your requirements — within days, not months.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: Timer,
            title: "On-demand, Hassle-Free Hiring",
            description: "Forget slow recruitment cycles. Get the right SAP expert exactly when you need them, for as long as you need.",
            color: "from-yellow-500 to-orange-600",
            bgColor: "bg-yellow-50"
        },
        {
            icon: Settings,
            title: "Niche SAP Expertise",
            description: "From core modules to the most specialized SAP roles, we source consultants tailored to your business.",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50"
        },
        {
            icon: DollarSign,
            title: "Cost and Time Savings",
            description: "Scale your SAP team flexibly, eliminate overhead costs, and meet project deadlines with no hiring delays",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            icon: Award,
            title: "100% Quality Guaranteed",
            description: "Every professional is rigorously screened for technical and functional expertise.",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50"
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-6">
                <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-6">
                        Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">NiceTech Inc</span> for Your SAP Staffing?
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Hire top-tier SAP experts faster with our rigorously vetted network and seamless, on-demand hiring process
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 200}
                            iconColor={feature.color}
                            hasAnimated={hasAnimated}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};