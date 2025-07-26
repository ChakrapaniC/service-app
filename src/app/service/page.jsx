 "use client"
import React, { useState } from 'react';
import { ChevronRight, Users, Code, Database, Shield, Brain, CreditCard, TrendingUp, Settings, CheckCircle, ArrowRight, Star, Clock, Award, Zap } from 'lucide-react';
 
const ServicePage = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
 
  const sapRoles = [
    {
      title: "SAP Functional Consultant",
      icon: <Users className="w-6 h-6" />,
      modules: ["Finance (FI)", "Controlling (CO)", "Materials Management (MM)", "Sales & Distribution (SD)", "Human Resources (HR)"],
      color: "from-blue-500 to-cyan-500",
      description: "Business process experts who configure SAP to meet organizational requirements"
    },
    {
      title: "SAP Technical Consultant",
      icon: <Code className="w-6 h-6" />,
      modules: ["ABAP Development", "System Integration", "SAP Fiori", "Interface Programming"],
      color: "from-purple-500 to-pink-500",
      description: "Development specialists creating custom solutions and integrations"
    },
    {
      title: "SAP Basis Consultant",
      icon: <Settings className="w-6 h-6" />,
      modules: ["System Administration", "Upgrades", "Security", "Performance Tuning", "Database Management"],
      color: "from-green-500 to-teal-500",
      description: "Infrastructure experts managing SAP system landscapes"
    },
    {
      title: "SAP BW/BI Consultant",
      icon: <TrendingUp className="w-6 h-6" />,
      modules: ["Business Intelligence", "Data Warehousing", "Analytics Reports"],
      color: "from-orange-500 to-red-500",
      description: "Data analytics professionals transforming business intelligence"
    },
    {
      title: "SAP Security Consultant",
      icon: <Shield className="w-6 h-6" />,
      modules: ["Authorizations", "Risk Analysis", "Compliance", "User Management"],
      color: "from-red-500 to-rose-500",
      description: "Security specialists ensuring system protection and compliance"
    },
    {
      title: "SAP HANA Consultant",
      icon: <Database className="w-6 h-6" />,
      modules: ["In-memory Database", "Real-time Analytics", "Cloud Integration"],
      color: "from-indigo-500 to-blue-500",
      description: "Next-generation database experts leveraging in-memory computing"
    },
    {
      title: "SAP CRM Consultant",
      icon: <CreditCard className="w-6 h-6" />,
      modules: ["Customer Relationship Management", "Sales Process Optimization"],
      color: "from-pink-500 to-purple-500",
      description: "Customer experience specialists optimizing sales and service processes"
    },
    {
      title: "SAP Project Manager",
      icon: <Award className="w-6 h-6" />,
      modules: ["SAP Implementation Leadership", "Project Coordination"],
      color: "from-yellow-500 to-orange-500",
      description: "Implementation leaders ensuring successful project delivery"
    },
    {
      title: "SAP S/4HANA Specialist",
      icon: <Brain className="w-6 h-6" />,
      modules: ["Latest SAP Digital Core Solutions", "Migration Experts"],
      color: "from-cyan-500 to-blue-500",
      description: "Digital transformation experts specializing in SAP's intelligent suite"
    }
  ];
 
  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: "Rapid Deployment", desc: "Quick access to qualified professionals within 48-72 hours" },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Pre-Vetted Talent", desc: "Thoroughly screened consultants with proven track records" },
    { icon: <Clock className="w-8 h-8" />, title: "Flexible Engagement", desc: "Short-term projects to long-term strategic initiatives" },
    { icon: <Star className="w-8 h-8" />, title: "Industry Expertise", desc: "Specialists across all verticals and SAP technologies" }
  ];
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Enterprise SAP Solutions
            </div>
            <h1 className="text-xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              SAP Contract
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Staffing Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Secure the SAP knowledge you need, for as long as you need it. We provide experienced contractors across all major SAP modules and emerging technologies.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Find SAP Talent
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-slate-400 hover:border-blue-600 text-slate-600 hover:text-blue-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-blue-50">
                View Success Stories
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
 
      {/* Benefits Section */}
      <div className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Our SAP Staffing?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Supporting everything from strategic transformations to urgent business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-4 transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* SAP Roles Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              SAP Professionals We Provide
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive expertise across all SAP modules and technologies
            </p>
          </div>
 
          {/* Role Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sapRoles.map((role, index) => (
              <button
                key={index}
                onClick={() => setActiveRole(index)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeRole === index
                    ? `bg-gradient-to-r ${role.color} text-white shadow-lg`
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                <span className="flex items-center">
                  {role.icon}
                  <span className="ml-2 hidden sm:inline">{role.title.split(' ')[1]}</span>
                </span>
              </button>
            ))}
          </div>
 
          {/* Active Role Display */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${sapRoles[activeRole].color} flex items-center justify-center mr-4`}>
                    <div className="text-white">
                      {sapRoles[activeRole].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{sapRoles[activeRole].title}</h3>
                    <p className="text-slate-600 text-lg">{sapRoles[activeRole].description}</p>
                  </div>
                </div>
               
                <div className="grid md:grid-cols-2 gap-4">
                  {sapRoles[activeRole].modules.map((module, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-blue-50/50 rounded-xl border border-blue-200">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-6">
            Need a Different SAP Profile?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            If you don't see the profile you need, let us know—our database includes a broad range of SAP specialists for any scenario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Contact Us
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button className="group border-2 border-slate-400 hover:border-blue-600 text-slate-600 hover:text-blue-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-blue-50">
              Discuss Your Needs
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button> */}
          </div>
        </div>
      </div>
 
      {/* Footer Contact */}
      {/* <div className="py-16 bg-slate-100 border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600">Connect with our SAP staffing experts today</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Quick Response</h4>
              <p className="text-slate-600">48-72 hour candidate matching</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Global Reach</h4>
              <p className="text-slate-600">SAP talent across all time zones</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
 
export default ServicePage;
 