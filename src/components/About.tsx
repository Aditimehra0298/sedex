import React from 'react';
import { CheckCircle, Users, Globe, Award, Calendar, Target } from 'lucide-react';

const About = () => {
  const features = [
    "Accredited by SEDEX & Global Clients",
    "Fast, Transparent Process – Get Ready in 7–10 Days",
    "Experienced Audit Team Across World",
    "Free Pre-Audit Guidance",
    "Affordable & Competitive Pricing",
    "25+ Years of Experience"
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://cdn.corporatefinanceinstitute.com/assets/Industry-1024x576.jpeg)'
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
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
                  <p className="text-gray-600 text-sm">Experienced Audit Team Across World</p>
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

            {/* Videos Grid - 2x2 Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Video 1: Textile Factory Craftsmanship */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <video
                  src="/img/20250808_1259_Textile Factory Craftsmanship_simple_compose_01k249b07resj9evksj950cw1d.mp4"
                  className="w-full h-48 md:h-64 lg:h-80 object-contain rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Video 2: Global Port Operations */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <video
                  src="/img/20250808_1344_Global Port Operations_simple_compose_01k24bwwv1fa5sch6v400p8ac4.mp4"
                  className="w-full h-48 md:h-64 lg:h-80 object-contain rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Video 3: Efficient Manufacturing Process */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <video
                  src="/img/20250808_1429_Efficient Manufacturing Process_simple_compose_01k24egkddez9v41q7m9ageywr.mp4"
                  className="w-full h-48 md:h-64 lg:h-80 object-contain rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Video 4: Modern Laboratory Scene */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <video
                  src="/img/20250808_1451_Modern Laboratory Scene_simple_compose_01k24fs4jsfcxvf4hwfra3jx97.mp4"
                  className="w-full h-48 md:h-64 lg:h-80 object-contain rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;