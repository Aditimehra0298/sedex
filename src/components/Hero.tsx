import React, { useState } from 'react';
import { ArrowRight, Shield, CheckCircle, Send, Phone } from 'lucide-react';

const Hero = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try Google Apps Script first
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbyoX4DKwZTC5Xtt3LdhGvXITklHcw66_32JZTPEQX67zmLsjbX5d6m1ysq1mePi4Z9w/exec';
      form.target = 'hidden-iframe';
      form.style.display = 'none';

      // Add form data as hidden inputs
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Create hidden iframe to receive response
      let iframe = document.getElementById('hidden-iframe') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden-iframe';
        iframe.name = 'hidden-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Add form to page and submit
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Also send email as fallback
      const emailBody = `
New SEDEX SMETA Certification Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Service: ${formData.service}
Message: ${formData.message}

Submitted at: ${new Date().toLocaleString()}
      `;

      // Create mailto link as fallback
      const mailtoLink = `mailto:damnart.seo@gmail.com?subject=SEDEX SMETA Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client as backup
      setTimeout(() => {
        window.open(mailtoLink, '_blank');
      }, 500);

      // Simulate success
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            service: '',
            message: ''
          });
        }, 3000);
      }, 1000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
      setIsSubmitting(false);
    }
  };

  const services = [
    "SEDEX SMETA 4-Pillar Audit",
    "SEDEX SMETA 2-Pillar Audit",
    "Pre-Audit Guidance",
    "Post-Audit Support",
    "Other Certification Services"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden" style={{ backgroundImage: 'linear-gradient(to right, #0000008f,rgba(14, 11, 11, 0.19)), url(/img/eurocert1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 py-10 sm:py-20">
       
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Since 1998
              </div>
              <h1 className="text-2xl sm:text-4xl  lg:text-6xl font-bold text-[white] leading-tight text-center ">
                Get SEDEX SMETA Certification Fast — Trusted by Leading Brands
              </h1>
              <div className="bg-white/80 rounded-xl p-4 shadow-sm space-y-2">
                <p className="text-[#2a2a86] sm-text-center  block  text-center font-semibold">Eurocert India | 100% Certification Support | Accredited Auditors</p>
                <p className="text-base sm:text-lg sm-text-left text-gray-700 font-[400] text-center "> 
                  With more than 25 years of global expertise and a footprint in over 45 countries, Eurocert has successfully served 6,000+ clients. Looking to partner with global brands? Obtain your SEDEX SMETA (4-Pillar or 2-Pillar) audit and certification seamlessly with Eurocert—your trusted partner in world-class certification.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button 
                onClick={scrollToContact}
                className="group bg-[#2a2a86] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#2a2a86] transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-semibold w-full sm:w-auto"
              >
                Get Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contactForm" className="bg-gray-50 rounded-2xl sm:rounded-3xl p-2 sm:p-8 mt-0 lg:mt-0  rotate-0 hover: transition-transform duration-500">
            <h3 className="text-xl text-center sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6  animate-flicker ">🚀 Start Your Certification Today</h3>
            <p className="text-center text-gray-600 mb-6">Get a Free Quote or Call Back Within 1 Hour</p>
            
            {isSubmitted ? (
              <div  className="text-center py-6 sm:py-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Thank you for contacting us. We'll get back to you within 1 hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="+91 xxxxx-xxxxx"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2a2a86] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="City"
                    />
                  </div>
                </div>

                <div>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2a2a86] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2a2a86] focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your SEDEX SMETA certification needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2a2a86] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#2a2a86] transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Get Free Quote'}</span>
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-red-600 font-semibold">Limited slots available this month. Fast-track your audit with Eurocert now!</p>
            </div>
          </div>

          {/* WhatsApp & Call Floating Icons */}
          <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
            {/* Call Icon */}
            <a
              href="tel:9056544487"
              className="bg-red-600 hover:bg-red-700 text-white rounded-[10px]  shadow-lg p-3 flex items-center justify-center transition-transform duration-200 hover:scale-110 block md:hidden"
              aria-label="Call Eurocert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-6 h-6" />
            </a>
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/9056544487"
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg p-3 flex items-center justify-center transition-transform duration-200 hover:scale-110"
              aria-label="WhatsApp Eurocert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 012.1 12.045C2.073 6.507 6.659 1.926 12.199 1.926c2.637 0 5.112 1.027 6.988 2.896a9.825 9.825 0 012.893 6.977c-.003 5.539-4.589 10.12-10.029 10.12zm8.413-18.294A11.815 11.815 0 0012.2 0C5.452 0 .073 5.373.1 12.021c.018 2.123.557 4.197 1.607 6.032L0 24l6.064-1.606a11.89 11.89 0 005.13 1.229h.005c6.748 0 12.227-5.373 12.254-12.021a11.82 11.82 0 00-3.468-8.397z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
