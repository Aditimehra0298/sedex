import React, { useState } from 'react';
import { Shield, Award, FileCheck, Leaf, Users, Zap, Utensils, Building, BarChart3, Globe, CheckCircle, Eye, Footprints, Handshake, AlertTriangle, Recycle, BadgeCheck, GraduationCap, Clock, Star, Target } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('smeta'); // Set 'smeta' as default

  const smetaServices = [
    {
      icon: Shield,
      title: "SEDEX SMETA 4-Pillar",
      subtitle: "Complete Ethical Trade Audit",
      description: "Comprehensive audit covering Labour Standards, Health & Safety, Environment, and Business Ethics. Required for suppliers to major global retailers.",
      color: "blue"
    },
    {
      icon: Eye,
      title: "SEDEX SMETA 2-Pillar",
      subtitle: "Labour & Health & Safety Audit",
      description: "Focused audit on Labour Standards and Health & Safety. Ideal for suppliers with basic ethical trade requirements.",
      color: "green"
    },
    {
      icon: Clock,
      title: "Fast-Track Certification",
      subtitle: "7-10 Days Process",
      description: "Expedited audit process to get your SEDEX SMETA certification quickly and meet urgent buyer requirements.",
      color: "orange"
    },
    {
      icon: Target,
      title: "Pre-Audit Guidance",
      subtitle: "Free Preparation Support",
      description: "Comprehensive guidance to prepare your organization for SEDEX SMETA audit and ensure successful certification.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Post-Audit Support",
      subtitle: "Ongoing Compliance Help",
      description: "Continuous support after certification to maintain compliance and address any audit findings or improvements needed.",
      color: "emerald"
    },
    {
      icon: Star,
      title: "Renewal Services",
      subtitle: "Annual Re-certification",
      description: "Assistance with annual SEDEX SMETA renewal audits to maintain your certification status and buyer relationships.",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string; icon: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-[#2a2a86]', hover: 'hover:bg-blue-100', icon: 'bg-[#2A2A86]' },
      green: { bg: 'bg-green-50', text: 'text-green-600', hover: 'hover:bg-green-100', icon: 'bg-green-600' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'hover:bg-emerald-100', icon: 'bg-emerald-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'hover:bg-orange-100', icon: 'bg-orange-600' },
      red: { bg: 'bg-red-50', text: 'text-red-600', hover: 'hover:bg-red-100', icon: 'bg-red-600' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', hover: 'hover:bg-yellow-100', icon: 'bg-yellow-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', hover: 'hover:bg-purple-100', icon: 'bg-purple-600' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-600', hover: 'hover:bg-pink-100', icon: 'bg-pink-600' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hover: 'hover:bg-indigo-100', icon: 'bg-indigo-600' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', hover: 'hover:bg-teal-100', icon: 'bg-teal-600' },
      lime: { bg: 'bg-lime-50', text: 'text-lime-600', hover: 'hover:bg-lime-100', icon: 'bg-lime-600' },
      rose: { bg: 'bg-rose-50', text: 'text-rose-600', hover: 'hover:bg-rose-100', icon: 'bg-rose-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const ServiceCard = ({ service }: { service: any }) => {
    const colors = getColorClasses(service.color);
    const IconComponent = service.icon;

    return (
      <div className={`${colors.bg} ${colors.hover} p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group cursor-pointer text-center flex flex-col items-center`}>
        <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 text-center `}>
          <IconComponent className="w-7 h-7 text-white text-center" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className={`${colors.text} font-medium text-sm mb-3`}>{service.subtitle}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Our SEDEX SMETA Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete SEDEX SMETA
            <span className="text-[#2A2A86] block">Certification Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial audit to ongoing compliance, we provide comprehensive SEDEX SMETA certification services 
            to help you meet global ethical trade standards and supply to leading international retailers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {smetaServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Start Your SEDEX SMETA Certification Today
            </h3>
            <p className="text-gray-600 mb-6">
              Get a Free Quote or Call Back Within 1 Hour. Limited slots available this month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2A2A86] text-white px-8 py-3 rounded-full hover:bg-[#2A2A86] transition-all duration-300 transform hover:scale-105 font-semibold">
                Get Free Quote
              </button>
              <button className="border border-[#2A2A86] text-[#2A2A86] px-8 py-3 rounded-full hover:bg-[#2A2A86] hover:text-white transition-all duration-300 font-semibold">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;