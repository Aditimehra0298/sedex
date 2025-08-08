import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try to save to Google Sheets
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbyoX4DKwZTC5Xtt3LdhGvXITklHcw66_32JZTPEQX67zmLsjbX5d6m1ysq1mePi4Z9w/exec';
      form.target = 'hidden-iframe-contact';
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
      let iframe = document.getElementById('hidden-iframe-contact') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden-iframe-contact';
        iframe.name = 'hidden-iframe-contact';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Add form to page and submit
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Show success message
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after 5 seconds
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
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 93160-12883","+91 62832-18008"],
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@eurocert.in"],
      color: "green"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["304- Mid town tower, Peer Muchalla , Panchkula, Haryana (140603)"],
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 5:00 PM"],
      color: "orange"
    }
  ];

  const services = [
    "SEDEX SMETA 4-Pillar Audit",
    "SEDEX SMETA 2-Pillar Audit",
    "Pre-Audit Guidance",
    "Post-Audit Support",
    "Fast-Track Certification",
    "Renewal Services",
    "Other Certification Services"
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string; hover: string } } = {
      blue: { bg: 'bg-blue-50', icon: 'bg-[#2A2A86]', hover: 'hover:bg-blue-100' },
      green: { bg: 'bg-green-50', icon: 'bg-green-600', hover: 'hover:bg-green-100' },
      purple: { bg: 'bg-purple-50', icon: 'bg-purple-600', hover: 'hover:bg-purple-100' },
      orange: { bg: 'bg-orange-50', icon: 'bg-orange-600', hover: 'hover:bg-orange-100' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 cursor-pointer" onClick={() => scrollToSection('contactForm')}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free SEDEX SMETA
            <span className="text-[#2A2A86] block">Quote Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your SEDEX SMETA certification journey? Contact our experts 
            for a free quote and consultation within 1 hour.
          </p>
        </div>
      <div className="flex flex-col lg:flex-row justify-center items-stretch mb-8 mx-2 sm:mx-4 lg:mx-10 gap-8">
        {/* Contact Information */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="w-full max-w-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">Contact Information</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              {contactInfo.map((info, index) => {
                const colors = getColorClasses(info.color);
                const IconComponent = info.icon;

                return (
                  <div key={index} className={`${colors.bg} ${colors.hover} p-6 rounded-2xl transition-all duration-300 group`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-2 sm:p-8 w-full max-w-xl">
            <h3 className="text-xl text-center sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6 animate-flicker">🚀 Start Your Certification Today</h3>
            <p className="text-center text-gray-600 mb-6">Get a Free Quote or Call Back Within 1 Hour</p>
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Thank You! Message Sent Successfully!</h4>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Thank you for contacting us. We'll get back to you within 1 hour.
                </p>
                <p className="text-sm text-blue-600">
                  Data saved to Google Sheets & email notification sent to our team.
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2A2A86] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2A2A86] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2A2A86] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
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
                  <span>{isSubmitting ? 'Saving to Google Sheets...' : 'Get Free Quote'}</span>
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-red-600 font-semibold">Limited slots available this month. Fast-track your audit with Eurocert now!</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;