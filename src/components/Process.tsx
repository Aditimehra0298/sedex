import React from 'react';
import { MessageCircle, FileText, Settings, CheckCircle, ArrowRight, Clock, Award, Users } from 'lucide-react';

const Process = () => {
  const scrollToHero = () => {
    const element = document.getElementById('home');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const steps = [
    {
      icon: MessageCircle,
      title: "Free Consultation & Quote",
      description: "Get a free consultation and quote within 1 hour. Our experts assess your needs and recommend the right SEDEX SMETA audit type (4-Pillar or 2-Pillar).",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Pre-Audit Guidance",
      description: "Receive free pre-audit guidance to prepare your organization thoroughly. We help you understand requirements and ensure compliance before the audit.",
      color: "green"
    },
    {
      icon: Users,
      title: "SEDEX SMETA Audit",
      description: "Our experienced auditors conduct the SEDEX SMETA audit at your facility, covering Labour Standards, Health & Safety, Environment, and Business Ethics.",
      color: "purple"
    },
    {
      icon: Award,
      title: "Certification & SEDEX Upload",
      description: "Receive your SEDEX SMETA certification within 7-10 days. We upload results to SEDEX platform for global buyer visibility.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-50', icon: 'bg-[#2A2A86]', text: 'text-[#2A2A86]', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', icon: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-50', icon: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-50', icon: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4 mr-2" />
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fast & Transparent
            <span className="text-[#2A2A86] block">SEDEX SMETA Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined 4-step process ensures you get your SEDEX SMETA certification 
            quickly and hassle-free, with full transparency at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const colors = getColorClasses(step.color);
                const IconComponent = step.icon;
                
                return (
                  <div key={index} className="relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-full w-8 h-0.5 bg-gray-300 z-0 transform translate-x-4">
                        <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-gray-400" />
                      </div>
                    )}
                    
                    {/* Step Card */}
                    <div className={`${colors.bg} ${colors.border} border-2 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative z-10`}>
                      <div className={`w-16 h-16 ${colors.icon} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className={`text-sm font-bold ${colors.text}`}>{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const IconComponent = step.icon;
              
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300"></div>
                  )}
                  
                  {/* Step Card */}
                  <div className={`${colors.bg} ${colors.border} border-2 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 relative`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 ${colors.icon} rounded-full flex items-center justify-center flex-shrink-0 relative`}>
                        <IconComponent className="w-8 h-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                          <span className={`text-xs font-bold ${colors.text}`}>{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-[#2A2A86]" />
              <h3 className="text-2xl font-bold text-gray-900">Timeline: 7-10 Days</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#2A2A86] mb-2">Day 1-2</div>
                <p className="text-gray-600">Initial consultation & preparation</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2A2A86] mb-2">Day 3-5</div>
                <p className="text-gray-600">SEDEX SMETA audit at your facility</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2A2A86] mb-2">Day 7-10</div>
                <p className="text-gray-600">Certification & SEDEX upload</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Ready to Start Your SEDEX SMETA Process?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a Free Quote or Call Back Within 1 Hour. Limited slots available this month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToHero} className="bg-[#2A2A86] text-white px-8 py-3 rounded-full hover:bg-[#2A2A86] transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2">
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
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

export default Process;