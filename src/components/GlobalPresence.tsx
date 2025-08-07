import React from 'react';
import { MapPin, Globe, Building, Users } from 'lucide-react';

const GlobalPresence = () => {
  const countries = [
    { name: "India", region: "Asia", offices: 3 },
    { name: "Italy", region: "Europe", offices: 2 },
    { name: "France", region: "Europe", offices: 1 },
    { name: "China", region: "Asia", offices: 2 },
    { name: "Bulgaria (Sofia)", region: "Europe", offices: 1 },
    { name: "UAE (Abu Dhabi)", region: "Middle East", offices: 1 },
    { name: "Romania (Ploiesti)", region: "Europe", offices: 1 },
    { name: "China (Shanghai)", region: "Asia", offices: 1 },
    { name: "Albania (Tirana)", region: "Europe", offices: 1 },
    { name: "Cyprus (Limassol)", region: "Europe", offices: 1 }
  ];

  const regions = [
    { name: "Europe", count: 6, color: "blue" },
    { name: "Asia", count: 3, color: "green" },
    { name: "Middle East", count: 1, color: "purple" }
  ];

  const getRegionColor = (region: string) => {
    switch (region) {
      case "Europe": return "bg-blue-100 text-blue-800";
      case "Asia": return "bg-green-100 text-green-800";
      case "Middle East": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="global-presence" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Global Presence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serving Clients
            <span className="text-blue-600 block">Across 40+ Countries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With strategic offices and partnerships worldwide, we provide local expertise 
            with global standards to meet your certification needs anywhere.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">40+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Office Locations</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-gray-600">Expert Professionals</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600">Continents</div>
          </div>
        </div>

        {/* Regional Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Regional Distribution</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{region.name}</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{region.count}</div>
                <div className="text-gray-600">Office Locations</div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries Grid */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Office Locations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {country.name}
                      </h4>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRegionColor(country.region)}`}>
                        {country.region}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {country.offices} office{country.offices > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Certified?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact our local experts in your region for personalized certification guidance 
              and support tailored to your specific market requirements.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Find Your Local Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;