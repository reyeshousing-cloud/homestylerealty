import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/mockData';
import { MapPin, Bed, Bath, Move, Check, Calendar, Phone, Mail, ArrowLeft } from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-sans font-light mb-4 tracking-tight">Property Not Found</h2>
          <Link to="/properties" className="text-black border-b border-black pb-1 hover:opacity-50 uppercase tracking-widest text-xs font-bold">Return to Collection</Link>
        </div>
      </div>
    );
  }

  // Mock additional images
  const images = [
    property.image,
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  ];

  const features = [
    'Smart Home System', 'Wine Cellar', 'Infinity Pool', 'Home Theater', 
    'Gourmet Kitchen', 'Spa & Sauna', 'Private Gym', 'Guest House'
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <Link to="/properties" className="inline-flex items-center text-gray-400 hover:text-black mb-12 transition-colors uppercase tracking-[0.2em] text-xs font-bold">
          <ArrowLeft size={12} className="mr-2" /> Back to Collection
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black pb-8">
          <div>
            <div className="flex items-center text-black font-bold uppercase tracking-[0.2em] text-xs mb-4">
              <span className="bg-black text-white px-3 py-1 mr-3">{property.status}</span>
              <span>{property.type}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-light text-black mb-2 tracking-tighter">{property.title}</h1>
            <div className="flex items-center text-gray-500 text-sm tracking-wide uppercase mt-2">
              <MapPin size={14} className="mr-2" />
              {property.location}
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-4xl font-light text-black tracking-tight">{property.price}</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-20 h-[600px]">
          <div className="lg:col-span-2 h-full relative group">
            <img 
              src={images[activeImage]} 
              alt={property.title} 
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col gap-1 h-full">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`flex-1 relative cursor-pointer overflow-hidden group ${activeImage === idx ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {idx === 3 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold uppercase tracking-[0.2em] text-xs">
                    View Gallery
                  </div>
                )}
              </div>
            )).slice(1, 4)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-y border-gray-200 py-10 mb-12 gap-8">
              <div className="text-center">
                <span className="block font-light text-3xl text-black mb-1">{property.beds}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Bedrooms</span>
              </div>
              <div className="text-center border-l border-gray-200">
                <span className="block font-light text-3xl text-black mb-1">{property.baths}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Bathrooms</span>
              </div>
              <div className="text-center border-l border-gray-200">
                <span className="block font-light text-3xl text-black mb-1">{property.sqft}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Square Ft</span>
              </div>
              <div className="text-center border-l border-gray-200 hidden sm:block">
                <span className="block font-light text-3xl text-black mb-1">2024</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Year Built</span>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-sans font-light mb-8 text-black tracking-tight uppercase border-b border-black pb-4 inline-block">The Residence</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                Experience the pinnacle of luxury living in this breathtaking {property.type.toLowerCase()} located in the prestigious {property.location}. 
                Designed by world-renowned architects, this masterpiece seamlessly blends contemporary design with timeless elegance.
              </p>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                The open-concept living space features floor-to-ceiling windows that flood the home with natural light and offer panoramic views. 
                The gourmet kitchen is equipped with top-of-the-line appliances and custom cabinetry, perfect for culinary enthusiasts. 
                Retreat to the master suite, a sanctuary of relaxation with a spa-inspired bathroom and a private terrace.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-sans font-light mb-8 text-black tracking-tight uppercase border-b border-black pb-4 inline-block">Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-800 border-b border-gray-100 pb-4">
                    <Check size={14} className="mr-4 text-black" />
                    <span className="uppercase tracking-wider text-xs font-bold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-10 border border-gray-100 sticky top-32">
              <h3 className="text-xl font-sans font-bold mb-8 text-black uppercase tracking-widest">Inquire</h3>
              
              <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Agent" 
                  className="w-12 h-12 grayscale object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm">Eleanor Rigby</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Senior Partner</p>
                </div>
              </div>

              <form className="space-y-6">
                <input type="text" placeholder="NAME" className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-xs tracking-widest uppercase placeholder-gray-500" />
                <input type="email" placeholder="EMAIL" className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-xs tracking-widest uppercase placeholder-gray-500" />
                <input type="tel" placeholder="PHONE" className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-xs tracking-widest uppercase placeholder-gray-500" />
                <textarea rows={3} placeholder="MESSAGE" className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black text-xs tracking-widest uppercase placeholder-gray-500 resize-none"></textarea>
                <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors text-xs">
                  Request Viewing
                </button>
              </form>

              <div className="mt-8 pt-8 space-y-4">
                <div className="flex items-center text-gray-600 text-xs uppercase tracking-wider">
                  <Phone size={14} className="mr-3 text-black" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600 text-xs uppercase tracking-wider">
                  <Mail size={14} className="mr-3 text-black" />
                  <span>agent@homestylerealty.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
