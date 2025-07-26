"use client";
import React, { useState, useEffect } from 'react';
import { Users, Target, Award, Clock, CheckCircle, MapPin, Mail, Phone, Calendar, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  const whyChooseData = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Deep Network of SAP Experts",
      description: "Access to SAP-certified consultants and specialists across all modules"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Full Project Lifecycle Support",
      description: "Specialists for every phase from blueprinting to go-live support"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Turnaround Times",
      description: "Transparent engagement model with quick response times"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality & Reliability",
      description: "Commitment to excellence and long-term partnership"
    }
  ];

  const skills = [
    { name: "SAP S/4 HANA", level: 95 },
    { name: "SAP CPI/BTP", level: 90 },
    { name: "ABAP/OOP", level: 98 },
    { name: "Solution Architecture", level: 95 },
    { name: "Team Leadership", level: 92 },
    { name: "Integration Services", level: 88 }
  ];

  const certifications = [
    "ITIL 4 Certified",
    "SAP SolMan Certified",
    "S/4 HANA Implementation",
    "SAP Cloud Platform (SCP/BTP)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      {/* Header */}
      {/* <header className={`bg-white/80 backdrop-blur-lg shadow-lg transition-all duration-1000 ${fadeInClass}`}>
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-pulse">
            NiceTech Inc.
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Specialist SAP Staffing, Simplified
          </p>
        </div>
      </header> */}

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Company Description */}
        <section className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-xl transition-all duration-1000 delay-300 ${fadeInClass}`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About <span className="text-sky-600">NiceTech Inc.</span>
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              NiceTech Inc. offers a singular focus—connecting organizations with top-tier SAP professionals 
              on a contract basis for critical and niche roles. With years of experience in SAP staffing, 
              we understand the urgency and precision required to assemble expert SAP teams that make projects successful.
            </p>
            <p className="text-lg">
              Our approach is personalized, agile, and built on long-standing relationships with both clients 
              and the SAP talent pool. Every business is different. We'll find SAP experts who fit your industry, 
              culture, and objectives.
            </p>
          </div>
        </section>

        

        {/* Expert Profile */}
        <section className={`bg-white/90 backdrop-blur-sm rounded-3xl mb-12 p-8 shadow-xl transition-all duration-1000 delay-700 ${fadeInClass}`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our <span className="text-sky-600">SAP Expert</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Image and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl p-8 text-white text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-20 h-20 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ajay Sharma</h3>
                <p className="text-sky-100 mb-4">SAP Solution Architect</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>20+ Years Experience</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>S/4 HANA Specialist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2">
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-6 bg-gray-100 p-2 rounded-xl">
                {['experience', 'skills', 'certifications'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? 'bg-sky-600 text-white shadow-lg'
                        : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-96">
                {activeTab === 'experience' && (
                  <div className="space-y-6 animate-fadeIn max-h-96 overflow-y-auto pr-2">
                    <div className="mb-6 p-4 bg-sky-50 rounded-lg">
                      <h4 className="text-xl font-bold text-sky-800 mb-3">Professional Summary</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        20 Years of experience as an SAP Technical Consultant / Solution Architect with strong knowledge in ABAP, OOPS, OData, 
                        along with various integration technologies like cloud connectors, CIG for EAI, DI in various SAP modules like Ariba, SCM, 
                        EWM FICO, MM, SD, PP, SRM, PLM, BI/BW, EP etc. on different SAP versions from 4.6, 4.7 and ECC6.0, S/4 HANA etc.
                      </p>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">Professional Experience</h4>
                    <div className="space-y-6">
                      <div className="border-l-4 border-sky-600 pl-6 bg-white p-4 rounded-r-lg shadow-sm">
                        <h5 className="text-lg font-semibold text-gray-800">Sr. Solution Architect</h5>
                        <p className="text-sky-600 font-medium">Lam Research, Fremont, CA • Aug 2021 – Present</p>
                        <div className="text-gray-600 mt-2 text-sm space-y-1">
                          <p>• Working as Solution architect for global quality systems includes SAP, Trackwise, Liferay and MS Azure applications</p>
                          <p>• Design DB tables in different systems including SAP and develop logical flow of data</p>
                          <p>• SAP ECC solutions assessment for HANA migration with ABAP Objects oriented architecture</p>
                          <p>• Troubleshoot complex logic across systems using code traces, SAP debugging, log files</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-sky-500 pl-6 bg-white p-4 rounded-r-lg shadow-sm">
                        <h5 className="text-lg font-semibold text-gray-800">SAP Solution Architect / Sr. SAP Developer</h5>
                        <p className="text-sky-600 font-medium">GyanSys Inc, Indianapolis, IN • Jul 2019 – Aug 2021</p>
                        <div className="text-gray-600 mt-2 text-sm space-y-1">
                          <p>• Implemented S/4 HANA 2019 and 2020 releases for multiple clients (Delta faucet, Agreliant, Allison Transmissions)</p>
                          <p>• Configurations of CIG in ECC for Ariba integration to sync PO and invoices</p>
                          <p>• Worked on SAP Cloud Connector configurations for S/4 HANA integrations</p>
                          <p>• Delivered complex SAP HANA integration with supplier portal using JDBC/JAVA connectors</p>
                          <p>• Managed teams for ABAP proxies, PI/CPI development with third party vendors</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-sky-400 pl-6 bg-white p-4 rounded-r-lg shadow-sm">
                        <h5 className="text-lg font-semibold text-gray-800">SAP Solution Architect / Team Lead</h5>
                        <p className="text-sky-600 font-medium">Toyota Material Handling, Columbus, IN • Apr 2014 – Jul 2019</p>
                        <div className="text-gray-600 mt-2 text-sm space-y-1">
                          <p>• Responsible for 300+ SAP interfaces with third party solutions (D&B, Banks, Salesforce, CRM, MS Dynamics)</p>
                          <p>• Lead PI/PO (Process Integration/Process Orchestration) development and upgrades</p>
                          <p>• Developed integration scenarios with dealers and third parties on SAP cloud environment SCP/BTP</p>
                          <p>• Architected various solutions in ECC/CRM/BW systems</p>
                          <p>• Worked on oData/SAPUI5 applications, migration from webdynpro</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-sky-300 pl-6 bg-white p-4 rounded-r-lg shadow-sm">
                        <h5 className="text-lg font-semibold text-gray-800">SAP Solution Architect / Lead Developer</h5>
                        <p className="text-sky-600 font-medium">GyanSys Inc, Indianapolis, IN • Apr 2009 – Mar 2014</p>
                        <div className="text-gray-600 mt-2 text-sm space-y-2">
                          <div>
                            <p className="font-medium text-gray-700">American Railcar Industries (ARI) • Mar 2013 – Feb 2014</p>
                            <p>• Managed team of 6 resources, developed BRC Cockpit Web Dynpro application</p>
                            <p>• Created PM documents management system with SD integration</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Allison Transmission • Dec 2009 – Mar 2013</p>
                            <p>• Worked on SAP Enterprise Portal implementation on Netweaver 7.01</p>
                            <p>• Deployed ESS/MSS, SRM, PLM, and GRC portal components</p>
                            <p>• Developed custom applications, iViews, Pages, Worksets for Enterprise Portal</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Johnson & Johnson • Apr 2009 – Dec 2009</p>
                            <p>• Team lead on Adobe Interactive Forms for FI-GL documents</p>
                            <p>• Developed interfaces between Adobe forms and Web Dynpro applications</p>
                            <p>• Configured workflow tasks for approval process</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-6 bg-white p-4 rounded-r-lg shadow-sm">
                        <h5 className="text-lg font-semibold text-gray-800">Senior SAP Solution Developer</h5>
                        <p className="text-sky-600 font-medium">SAP America, Newton Square, PA • Jul 2006 – Apr 2009</p>
                        <div className="text-gray-600 mt-2 text-sm space-y-1">
                          <p>• Worked on various projects in R/3 (ECC6.0) and Netweaver technology</p>
                          <p>• Material ledger enhancement with BADI 'GET_DEFCCS' for Cost Component Splits</p>
                          <p>• Developed Web Dynpro/Adobe forms for RMS (Resource management scheduling)</p>
                          <p>• Used enhancement techniques like BADIs and enhancement spots</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-blue-300 pl-6 bg-white p-4 rounded-r-lg shadow-sm">
                        <h5 className="text-lg font-semibold text-gray-800">Senior SAP Technical Consultant</h5>
                        <p className="text-sky-600 font-medium">Multiple Clients • 2002 – 2006</p>
                        <div className="text-gray-600 mt-2 text-sm space-y-2">
                          <div>
                            <p className="font-medium text-gray-700">Volvo CE, Asheville, NC • Mar 2006 – Jul 2006 & Oct 2004 – Jun 2005</p>
                            <p>• Implemented VMS (Vehicle Management System) for Smartforms and LSMW</p>
                            <p>• Integrated third party printout system (KSD) with SAP R/3 using IDOCs</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Nike, Portland, OR • Dec 2005 – Mar 2006</p>
                            <p>• Created solution to update Sales orders using inbound IDOC and BAPI</p>
                            <p>• Worked on Business Object BUS2032 and ALE interface</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Ranbaxy Laboratories • Mar 2004 – Oct 2004</p>
                            <p>• Developed RAS (Role Authorization System) with .NET integration</p>
                            <p>• Worked on BAPI and RFC functions for data extraction and updates</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">ENDO Pharmaceutical • Sep 2003 – Jan 2004</p>
                            <p>• Development and Production Support for ALE/IDOC Interfaces, BAPI, Workflows</p>
                            <p>• Screen enhancements and material extensions using BAPI_MATERIAL_SAVEDATA</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Allstate Insurance Co • Jun 2003 – Sep 2003</p>
                            <p>• FICO Module implementation with IS (Insurance Solution) Module</p>
                            <p>• Developed reports for tax calculations and asset management</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-blue-200 pl-6 bg-white p-4 rounded-r-lg shadow-sm">
                        <h5 className="text-lg font-semibold text-gray-800">ABAP/4 Developer</h5>
                        <p className="text-sky-600 font-medium">Knowledge Crop Technologies, Noida, India • Jan 2002 – May 2003</p>
                        <div className="text-gray-600 mt-2 text-sm space-y-1">
                          <p>• Worked on in-house projects for different customers in SD module</p>
                          <p>• Created reports for Physical inventory variance using ALV</p>
                          <p>• Developed dialog programs for Tag number entry and Physical Inventory processing</p>
                          <p>• Modified Material master screens and MARC table enhancements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="animate-fadeIn">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h4>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-700 font-medium">{skill.name}</span>
                            <span className="text-sky-600 font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-sky-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">Specialized Technologies</h5>
                      <div className="flex flex-wrap gap-3">
                        {['S/4 HANA', 'SCP/BTP', 'SAP CPI', 'ABAP Objects', 'OData', 'SAPUI5', 'Fiori', 'Cloud Connector', 'Azure', 'AWS'].map((tech, index) => (
                          <span key={index} className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'certifications' && (
                  <div className="animate-fadeIn">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6">Certifications & Education</h4>
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-sky-500" />
                          <span className="text-gray-700 font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-6 bg-sky-50 rounded-xl">
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Education</h5>
                      <p className="text-gray-700">
                        <strong>Bachelor of Engineering</strong> (ERP Specialization, Production Engineering)<br />
                        Punjab Technical University (PTU), India • 1997-2001
                      </p>
                    </div>
                    <div className="mt-6">
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">Notable Achievements</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-sky-500 mt-0.5" />
                          <span>Completed 5 full lifecycle SAP implementations</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-sky-500 mt-0.5" />
                          <span>Managed teams of 10+ developers across multiple projects</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-sky-500 mt-0.5" />
                          <span>Two end-to-end S/4 HANA implementations from setup to reporting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`mb-12 transition-all duration-1000 delay-500 ${fadeInClass}`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose <span className="text-sky-600">NiceTech Inc.</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseData.map((item, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sky-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className={`text-center py-16 transition-all duration-1000 delay-1000 ${fadeInClass}`}>
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your SAP Projects?</h2>
            <p className="text-xl mb-8 text-sky-100">
              Let us connect you with top-tier SAP professionals who fit your industry, culture, and objectives.
            </p>
            <button onClick={()=> router.push('/contact-us')} className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;