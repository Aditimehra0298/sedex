import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About SMETA', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Choose Us', id: 'why' },
    { name: 'Get Quote', id: 'contact' }
  ];

  const services = [
    'SEDEX SMETA 4-Pillar',
    'SEDEX SMETA 2-Pillar',
    'Fast-Track Certification',
    'Pre-Audit Guidance',
    'Post-Audit Support',
    'Renewal Services',
    'Free Consultation',
    'More Services...'
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-[#2a2a86] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 shadow-lg"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/eueo-png (1).webp" 
                alt="Eurocert Logo" 
                className="h-13 w-13 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">EUROCERT ASIA</h3>
                <p className="text-gray-400 text-sm">SEDEX SMETA Certification Experts</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Trusted SEDEX SMETA certification partner with 25+ years of experience. 
              Accredited by SEDEX & Global Clients. Fast-track your audit in 7-10 days.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2A2A86] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2A2A86] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2A2A86] transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#2a2a86] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">SEDEX SMETA Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-left"
                  >
                    <span className="w-2 h-2 bg-[white] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Offices */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact & Offices</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#2a2a86] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 93160-12883 </p>
                  <p className="text-gray-300">+91 62832-18008</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#2a2a86] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@eurocert.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#2a2a86] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">304- Mid town tower, Peer Muchalla , Panchkula, Haryana (140603)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Eurocert Inspection Services Pvt Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;