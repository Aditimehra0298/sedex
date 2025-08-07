import React from 'react';
import { Shield, Clock, Award, Users, Globe, CheckCircle, Star, Zap } from 'lucide-react';


type FeatureIcon = React.ElementType | string;
const WhyChooseUs = () => {
  const features = [
    {
       src:'/img/amul.png', 
      title: "Amul",
      description: "Amul is India’s largest dairy cooperative brand, known for revolutionizing the dairy industry with its wide range of milk, butter, cheese, and other dairy products. It symbolizes the White Revolution in India.",
      color: "blue"
    },
    {
      src:'/img/sun.png',
      title: "Sun Pharma",
      description: "Sun Pharmaceutical Industries Ltd. is India’s largest pharmaceutical company and a global leader in generics. It specializes in high-quality, affordable medicines across therapeutic areas.",
      color: "green"
    },
    {
      src: '/img/titan.png',
      title: "Titan",
      description: "Titan Company Limited, a part of the Tata Group, is one of India’s leading lifestyle brands offering watches, jewelry, eyewear, and accessories. It is known for innovation, elegance, and trust.",
      color: "purple"
    },
  
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
    <section id='customers' className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Our Customers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Valued 
             <span className="text-[#2A2A86] block">Clients</span> 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a growing list of industry leaders who rely on our expertise and commitment to quality. Our clients span diverse sectors, reflecting our reputation for delivering trusted certification and compliance solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-8 mb-16">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const IconComponent = feature.src
              ? () => (
                <img
                src={feature.src}
                alt={feature.title}
                className="w-16 h-16 object-contain"
                />
              )
              : Shield;
            
            return (
              <div key={index} className={`${colors.bg} ${colors.hover} p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}>
                <div className={`w-25 h-25  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-10 h-10 " />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        


      </div>
    </section>
  );
};

export default WhyChooseUs;