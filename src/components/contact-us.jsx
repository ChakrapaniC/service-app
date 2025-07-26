"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, Users, Clock, Award, User, Building, MessageSquare, Briefcase } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    mode: 'onChange'
  });

  const watchedFields = watch();

  const onSubmit = async (data) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitted(true);
    setIsLoading(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 text-center max-w-md mx-auto border border-gray-200/50 shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Thank you!</h2>
          <p className="text-gray-600 text-sm mb-8">We'll connect you with the perfect SAP expert within 24 hours.</p>
          <div
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 cursor-pointer inline-block"
          >
            Send another message
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold mb-2">Let's <span className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>Connect</span></h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
            Ready to find your SAP expert? Share your requirements and we'll match you with the perfect candidate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Phone</h3>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Email</h3>
                  <p className="text-sm text-gray-600">experts@sapstaffing.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">Office</h3>
                  <p className="text-sm text-gray-600">123 Business Ave, Suite 456<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">SAP Experts</span>
                </div>
                <span className="text-sm font-medium text-gray-800">500+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Success Rate</span>
                </div>
                <span className="text-sm font-medium text-gray-800">98%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">Response Time</span>
                </div>
                <span className="text-sm font-medium text-gray-800">24h</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
              
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Full Name"
                    className={`w-full pl-10 pr-10 py-3 bg-white/80 border ${
                      errors.name ? 'border-red-300' : watchedFields.name ? 'border-green-300' : 'border-gray-200'
                    } rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  {watchedFields.name && !errors.name && (
                    <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500" />
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="Email Address"
                    className={`w-full pl-10 pr-10 py-3 bg-white/80 border ${
                      errors.email ? 'border-red-300' : watchedFields.email && !errors.email ? 'border-green-300' : 'border-gray-200'
                    } rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  {watchedFields.email && !errors.email && (
                    <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500" />
                  )}
                </div>

                {/* Phone and Company */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="w-4 h-4 text-gray-400" />
                    </div>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="Phone (Optional)"
                      className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="w-4 h-4 text-gray-400" />
                    </div>
                    <input
                      {...register('company', { required: 'Company is required' })}
                      type="text"
                      placeholder="Company Name"
                      className={`w-full pl-10 pr-10 py-3 bg-white/80 border ${
                        errors.company ? 'border-red-300' : watchedFields.company ? 'border-green-300' : 'border-gray-200'
                      } rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors`}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                    {watchedFields.company && !errors.company && (
                      <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500" />
                    )}
                  </div>
                </div>

                {/* Subject/Role Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                  </div>
                  <select
                    {...register('subject', { required: 'Please select a role' })}
                    className={`w-full pl-10 pr-10 py-3 bg-white/80 border ${
                      errors.subject ? 'border-red-300' : watchedFields.subject ? 'border-green-300' : 'border-gray-200'
                    } rounded-lg text-sm text-gray-800 focus:outline-none focus:border-blue-400 transition-colors appearance-none cursor-pointer`}
                  >
                    <option value="">Select SAP Role</option>
                    <option value="sap-consultant">SAP Consultant</option>
                    <option value="sap-developer">SAP Developer</option>
                    <option value="sap-analyst">SAP Business Analyst</option>
                    <option value="sap-architect">SAP Solution Architect</option>
                    <option value="sap-pm">SAP Project Manager</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                  {watchedFields.subject && !errors.subject && (
                    <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500" />
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                    <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5" />
                  </div>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows="4"
                    placeholder="Tell us about your requirements, timeline, and ideal candidate..."
                    className={`w-full pl-10 pr-10 py-3 bg-white/80 border ${
                      errors.message ? 'border-red-300' : watchedFields.message ? 'border-green-300' : 'border-gray-200'
                    } rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  {watchedFields.message && !errors.message && (
                    <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500" />
                  )}
                </div>

                {/* Submit Button */}
                <div
                  onClick={handleSubmit(onSubmit)}
                  className={`w-full py-3 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white hover:shadow-md'
                  }`}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center mt-6">
                We'll respond within one business day with carefully selected candidates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}