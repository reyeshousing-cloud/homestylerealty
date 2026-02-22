import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Star, Shield, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { PropertyCard, Button } from '../components/ui/Components';
import { properties, testimonials, blogPosts } from '../data/mockData';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://i.ibb.co/gbmYXsfc/7578547-uhd-3840-2160-30fps-ezgif-com-video-to-gif-converter.gif" 
          alt="Modern Architecture" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        
        <div className="relative z-20 container-custom h-full flex flex-col justify-center items-start text-white pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="border-l-2 border-white pl-8 md:pl-12"
          >
            <h1 className="text-6xl md:text-8xl font-sans font-light mb-6 tracking-tight leading-[0.9]">
              MODERN <br />
              <span className="font-bold">LIVING</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl font-light tracking-wide">
              Curating the world's most exceptional properties. <br/>
              Where architecture meets lifestyle.
            </p>

            <Link to="/properties">
              <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors text-xs">
                Explore Collection
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search Section - Minimalist Strip */}
      <div className="bg-black text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-0 border border-gray-800">
            <div className="flex-grow relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="SEARCH BY LOCATION OR KEYWORD" 
                className="w-full pl-16 pr-4 py-6 bg-transparent text-white placeholder-gray-600 focus:outline-none text-xs tracking-widest uppercase"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-white text-black px-12 py-6 font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors text-xs border-l border-gray-800 md:border-l-0">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-20 border-b border-black pb-6">
            <h2 className="text-4xl md:text-5xl font-sans font-light text-black tracking-tight">Selected <span className="font-bold">Works</span></h2>
            <Link to="/properties" className="hidden md:flex items-center text-black font-bold hover:opacity-50 transition-opacity uppercase tracking-[0.2em] text-xs">
              View All <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Minimal */}
      <section className="py-32 bg-gray-50">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-sans font-light mb-12 text-black tracking-tight leading-tight">
              The Art of <br/><span className="font-bold">Real Estate</span>
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed font-light text-lg">
              We approach real estate with the precision of an architect and the eye of a curator. 
              Home Style Realty is not just about transactions; it's about finding the space that reflects your identity.
            </p>
            
            <div className="space-y-10">
              {[
                { title: 'Curated Portfolio', desc: 'Every property is hand-selected for its architectural merit.', icon: Star },
                { title: 'Market Intelligence', desc: 'Data-driven insights for the modern investor.', icon: Award },
                { title: 'Private Access', desc: 'Exclusive off-market listings for our private clients.', icon: Shield }
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <item.icon size={24} strokeWidth={1} className="mr-6 text-black mt-1" />
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-widest mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[800px] bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Interior Design" 
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="py-32 bg-black text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-light mb-20 text-center tracking-widest uppercase">Client Perspectives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="pt-8">
                <p className="text-gray-300 font-light text-lg italic mb-8 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 mr-4 overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white text-center">
        <div className="container-custom">
          <h2 className="text-5xl md:text-7xl font-sans font-light mb-8 text-black tracking-tighter">
            Define Your <span className="font-bold">Legacy</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12 text-lg font-light">
            Begin the journey to finding your architectural masterpiece.
          </p>
          <Link to="/contact">
            <button className="bg-black text-white px-12 py-5 font-bold uppercase tracking-[0.25em] hover:bg-gray-900 transition-colors text-xs">
              Start Conversation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
