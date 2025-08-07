import React from 'react';
import { CheckCircle, Users, Globe, Award, Calendar, Target, Building, Package, Leaf, Factory } from 'lucide-react';

const About = () => {
  const features = [
    "Accredited by SEDEX & Global Clients",
    "Fast, Transparent Process – Get Ready in 7–10 Days",
    "Experienced Audit Team Across India",
    "Free Pre-Audit Guidance",
    "Affordable & Competitive Pricing",
    "25+ Years of Experience"
  ];

  const whoNeedsSMETA = [
    {
      icon: Building,
      title: "Garment & Textile Manufacturers",
      description: "Suppliers to global fashion and retail brands"
    },
    {
      icon: Leaf,
      title: "Food & Agri Exporters",
      description: "Producers supplying to international food retailers"
    },
    {
      icon: Package,
      title: "Packaging & Plastic Industries",
      description: "Manufacturers of packaging materials and products"
    },
    {
      icon: Factory,
      title: "Chemical & Engineering Units",
      description: "Industrial suppliers to global manufacturing chains"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-[#2A2A86]  rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                About SEDEX SMETA
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Trusted SEDEX SMETA
                <span className="text-[#2A2A86] block">Certification Partner</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
               Eurocert is a trusted global certification body with 25+ years of experience, accredited by SEDEX and recognized by leading global clients. We specialize in SEDEX SMETA (4-Pillar and 2-Pillar) audits, helping businesses meet international ethical trade standards and supply to global retailers like Walmart, Tesco, and Marks & Spencer.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 border-[#2A2A86] rounded-full flex items-center justify-center group-hover:bg-[#2A2A86] transition-colors duration-200">
                    <CheckCircle className="w-4 h-4 text-[#2A2A86] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                </div>
              ))}
            </div>

            
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#2A2A86] rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm">Accredited by SEDEX & Global Clients</p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300 ">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Experienced Audit Team Across India</p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fast Process</h3>
                <p className="text-gray-600 text-sm">Get Ready in 7–10 Days</p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300 ">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Guidance</h3>
                <p className="text-gray-600 text-sm">Free Pre-Audit Guidance</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        {/* Who Needs SMETA Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              💡 Who Needs SMETA?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Any B2B supplier to global buyers needs SEDEX SMETA certification to meet international ethical trade standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoNeedsSMETA.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-[#2A2A86] rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;