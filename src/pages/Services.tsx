import React from 'react';
import { Home, Briefcase, Key, TrendingUp, Shield, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home size={24} strokeWidth={1} />,
      title: 'Residential Sales',
      description: 'Expert guidance for buying and selling luxury homes, estates, and penthouses in prime locations.'
    },
    {
      icon: <Briefcase size={24} strokeWidth={1} />,
      title: 'Commercial Real Estate',
      description: 'Strategic investment advice and transaction management for commercial properties and developments.'
    },
    {
      icon: <Key size={24} strokeWidth={1} />,
      title: 'Property Management',
      description: 'Comprehensive management services for luxury properties, ensuring your investment is well-maintained.'
    },
    {
      icon: <TrendingUp size={24} strokeWidth={1} />,
      title: 'Investment Consulting',
      description: 'Data-driven market analysis and portfolio strategy for real estate investors seeking high returns.'
    },
    {
      icon: <Shield size={24} strokeWidth={1} />,
      title: 'Legal Support',
      description: 'Access to our network of top-tier legal and financial experts to facilitate smooth transactions.'
    },
    {
      icon: <Globe size={24} strokeWidth={1} />,
      title: 'Global Relocation',
      description: 'Seamless relocation services for international clients moving to or from major global cities.'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <div className="mb-24 border-b border-black pb-12">
          <h1 className="text-6xl md:text-8xl font-sans font-light mb-8 text-black tracking-tighter">
            OUR <span className="font-bold">SERVICES</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl font-light leading-relaxed">
            Bespoke real estate solutions tailored to the unique needs of the modern individual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-12 hover:bg-gray-50 transition-colors duration-300 group">
              <div className="w-12 h-12 flex items-center justify-center text-black mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-sans font-bold mb-4 text-black uppercase tracking-wider">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 bg-black text-white p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-sans font-light mb-8 tracking-tight">Experience <span className="font-bold">Exceptional</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-12 font-light">
              Contact our team today to discuss your real estate goals.
            </p>
            <button className="bg-white text-black px-12 py-5 font-bold uppercase tracking-[0.25em] hover:bg-gray-200 transition-colors text-xs">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
