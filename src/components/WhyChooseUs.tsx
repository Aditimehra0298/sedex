import React from 'react';
import { Shield, Clock, Users, CheckCircle, Star, Zap, Target, FileCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Accredited by SEDEX & Global Clients",
      description: "EUROCERT is officially accredited by SEDEX and recognized by leading global retailers, ensuring your certification is accepted worldwide by major buyers and brands.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Fast, Transparent Process – Get Ready in 7–10 Days",
      description: "Our streamlined audit process ensures you get your SEDEX SMETA certification quickly, with full transparency at every step. No delays, no surprises.",
      color: "green"
    },
    {
      icon: Users,
      title: "Experienced Audit Team Across World",
      description: "Our certified auditors have extensive experience in SEDEX SMETA audits across all major industrial sectors all our world, ensuring thorough and professional assessment.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Free Pre-Audit Guidance",
      description: "We provide comprehensive pre-audit guidance at no additional cost, helping you prepare thoroughly and increase your chances of successful certification on the first attempt.",
      color: "orange"
    },
    {
      icon: Target,
      title: "Affordable & Competitive Pricing",
      description: "Our SEDEX SMETA certification services are priced competitively to make ethical trade certification accessible to businesses of all sizes, from SMEs to large corporations.",
      color: "red"
    },
    {
      icon: FileCheck,
      title: "25+ Years of Experience",
      description: "With over 25 years in the certification industry, EUROCERT brings unmatched expertise and reliability to your SEDEX SMETA certification journey.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string; hover: string } } = {
        blue: { bg: 'bg-blue-50', icon: 'bg-[#2A2A86]', hover: 'hover:bg-blue-100' },
      green: { bg: 'bg-green-50', icon: 'bg-green-600', hover: 'hover:bg-green-100' },
      purple: { bg: 'bg-purple-50', icon: 'bg-purple-600', hover: 'hover:bg-purple-100' },
      orange: { bg: 'bg-orange-50', icon: 'bg-orange-600', hover: 'hover:bg-orange-100' },
      red: { bg: 'bg-red-50', icon: 'bg-red-600', hover: 'hover:bg-red-100' },
      indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-600', hover: 'hover:bg-indigo-100' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="why" className="py-20 bg-gray-50 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(/img/eueo-png (1).webp)'
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for
              <span className="text-[#2A2A86] block">SEDEX SMETA Certification</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose EUROCERT for your SEDEX SMETA certification and benefit from our proven track record, 
              experienced team, and commitment to helping you meet global ethical trade standards.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              const IconComponent = feature.icon;
              
              return (
                <div key={index} className={`${colors.bg} ${colors.hover} p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}>
                  <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Benefits Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌍 Why SEDEX SMETA Certification?
              </h3>
              <p className="text-gray-600">
                SEDEX SMETA certification opens doors to global markets and major retailers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Work with global retailers (Walmart, Tesco, Marks & Spencer, etc.)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Meet international ethical trade standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Win buyer trust & grow exports</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Ensure social compliance (Labour, Health & Safety, Environment, Business Ethics)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Access to SEDEX platform for buyer visibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Demonstrate commitment to ethical business practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;