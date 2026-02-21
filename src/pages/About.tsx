import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <div className="mb-24 border-b border-black pb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-sans font-light mb-8 text-black tracking-tighter"
          >
            OUR <span className="font-bold">STORY</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-3xl font-light leading-relaxed">
            Founded on the principles of architectural integrity and modern living, Home Style Realty has established itself as the premier agency for the design-conscious buyer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Our Team" 
              className="w-full h-[600px] object-cover grayscale"
            />
          </div>
          <div>
            <h2 className="text-4xl font-sans font-light mb-8 text-black tracking-tight">A Legacy of <span className="font-bold">Design</span></h2>
            <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
              We believe that a home is more than a shelter; it is a statement of identity. For over two decades, we have curated a portfolio of properties that stand at the intersection of art and architecture.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed font-light text-lg">
              Our approach is stripped back, focusing on the essential elements of space, light, and material. We serve clients who appreciate the subtle details that define true luxury.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-black pt-12">
              <div>
                <h3 className="text-5xl font-light text-black mb-2 tracking-tighter">$2B+</h3>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">Sales Volume</p>
              </div>
              <div>
                <h3 className="text-5xl font-light text-black mb-2 tracking-tighter">500+</h3>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">Curated Homes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-sans font-light mb-16 text-black tracking-tight border-b border-gray-200 pb-6">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Alexander Sterling', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Victoria Chase', role: 'Head of Sales', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'James Kensington', role: 'Chief Architect', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-xl font-sans font-bold text-black uppercase tracking-wider">{member.name}</h3>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
