import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-25 pt-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/img/eueo-png (1).webp" 
              alt="Eurocert Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-[#2a2a86]">EUROCERT</h1>
              <p className="text-xs text-gray-600">Eurocert Inspection Certification Experts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#2a2a86] font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#2a2a86] font-medium transition-colors duration-200"
            >
              About SMETA
            </button>
           <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#2a2a86] font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why')}
              className="text-gray-700 hover:text-[#2a2a86] font-medium transition-colors duration-200"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#2a2a86] font-medium transition-colors duration-200"
            >
              Get Quote
            </button>
          
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-[#2a2a86] font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-[#2a2a86] font-medium py-2"
              >
                About SMETA
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-[#2a2a86] font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why')}
                className="block w-full text-left text-gray-700 hover:text-[#2a2a86] font-medium py-2"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-[#2a2a86] font-medium py-2"
              >
                Get Quote
              </button>
            
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;