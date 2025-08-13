import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToHero = () => {
    // Add a small delay to prevent conflicts with carousel auto-scroll
    setTimeout(() => {
      // Try to scroll to contact form first, then fallback to home
      const contactForm = document.getElementById('contactForm');
      const homeElement = document.getElementById('home');
      
      console.log('ScrollToHero called, contactForm found:', contactForm, 'home found:', homeElement);
      
      // Test scroll first
      console.log('Current scroll position:', window.pageYOffset);
      
      if (contactForm) {
        const headerHeight = 80;
        const elementPosition = contactForm.offsetTop - headerHeight;
        console.log('Scrolling to contact form position:', elementPosition);
        
        // Try scrollIntoView first
        try {
          contactForm.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        } catch {
          console.log('scrollIntoView failed, using window.scrollTo');
        }
        
        // Also try window.scrollTo as backup
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        
        // Fallback: force scroll if smooth scroll fails
        setTimeout(() => {
          if (window.pageYOffset < elementPosition - 100) {
            console.log('Smooth scroll may have failed, forcing scroll');
            window.scrollTo(0, elementPosition);
          }
        }, 1000);
        
      } else if (homeElement) {
        const headerHeight = 80;
        const elementPosition = homeElement.offsetTop - headerHeight;
        console.log('Scrolling to home position:', elementPosition);
        
        // Try scrollIntoView first
        try {
          homeElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        } catch {
          console.log('scrollIntoView failed, using window.scrollTo');
        }
        
        // Also try window.scrollTo as backup
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        
        // Fallback: force scroll if smooth scroll fails
        setTimeout(() => {
          if (window.pageYOffset < elementPosition - 100) {
            console.log('Smooth scroll may have failed, forcing scroll');
            window.scrollTo(0, elementPosition);
          }
        }, 1000);
        
      } else {
        // Fallback: scroll to top if element not found
        console.log('No elements found, scrolling to top');
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      
      // Alternative approach: try scrolling by a fixed amount
      setTimeout(() => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
          console.log('Trying alternative scroll approach');
          window.scrollBy({
            top: -currentScroll + 100,
            behavior: 'smooth'
          });
        }
      }, 2000);
      
      // Log final scroll position
      setTimeout(() => {
        console.log('Final scroll position:', window.pageYOffset);
      }, 500);
      
    }, 100);
  };

  const testimonials = [
    {
      name: "Priya sharma",
      position: "Quality Manager",
      company: "Textile Exporter, Tirupur",
      content: "Smooth & professional experience. We got SMETA certified within 8 days thanks to Eurocert's team. The pre-audit guidance was excellent and helped us prepare thoroughly.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Rajesh Kumar",
      position: "Export Manager",
      company: "Food & Agri Exporter, Mumbai",
      content: "Eurocert's SEDEX SMETA certification process was seamless. Their experienced auditors helped us meet all requirements for supplying to major UK retailers. Highly recommended!",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Anjali Sharma",
      position: "Operations Director",
      company: "Packaging Manufacturer, Ahmedabad",
      content: "The team at Eurocert made our SEDEX SMETA certification journey stress-free. Their fast-track process got us certified in just 7 days, helping us meet urgent buyer requirements.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Karna Reddy",
      position: "Compliance Officer",
      company: "Chemical Manufacturer, Hyderabad",
      content: "Eurocert's expertise in SEDEX SMETA audits is outstanding. Their affordable pricing and professional approach helped us achieve certification without breaking the bank.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    
    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]); // Add currentSlide as dependency to reset timer when manually changed

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="text-[#2A2A86] block">Say About SEDEX SMETA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their SEDEX SMETA certification experience with Eurocert.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-[#2A2A86]" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentSlide].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-[#2A2A86] font-medium">
                    {testimonials[currentSlide].position}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-20"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-[#2A2A86]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ⭐ Ready to Get Your SEDEX SMETA Certification?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who have achieved SEDEX SMETA certification with Eurocert.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={(e) => {
                  // Prevent event bubbling
                  e.preventDefault();
                  e.stopPropagation();
                  
                  console.log('Button clicked, pausing carousel and scrolling');
                  
                  // Pause auto-scroll temporarily
                  setCurrentSlide(currentSlide);
                  
                  // Call scroll function
                  scrollToHero();
                }} 
                className="bg-[#2A2A86] text-white px-8 py-3 rounded-full hover:bg-[#2A2A86] transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;