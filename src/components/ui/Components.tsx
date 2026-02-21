import React from 'react';
import { Bed, Bath, Move, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: string;
  status: 'For Sale' | 'For Rent';
}

export const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <motion.div 
      className="group bg-white border-b border-gray-200 hover:border-black transition-colors duration-500 pb-6"
    >
      <div className="relative h-[400px] overflow-hidden mb-6">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
        />
        <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-bold px-4 py-2 uppercase tracking-[0.2em]">
          {property.status}
        </div>
      </div>
      
      <div className="px-2">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="text-lg font-sans font-medium text-black mb-1">{property.title}</h3>
            <div className="flex items-center text-gray-500 text-xs uppercase tracking-wider">
              <MapPin size={12} className="mr-1" />
              {property.location}
            </div>
          </div>
          <span className="text-black font-light text-xl tracking-tight">{property.price}</span>
        </div>
        
        <div className="flex justify-between border-t border-gray-100 pt-4 text-gray-500 text-xs font-mono">
          <div className="flex items-center">
            <span className="mr-2 text-black font-bold">{property.beds}</span> Beds
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-black font-bold">{property.baths}</span> Baths
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-black font-bold">{property.sqft}</span> Sq Ft
          </div>
        </div>
        
        <Link to={`/properties/${property.id}`} className="mt-6 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-black hover:opacity-60 transition-opacity">
          View Details <ArrowRight size={12} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'white' }) {
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900 border border-black',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200 border border-transparent',
    outline: 'bg-transparent border border-black text-black hover:bg-black hover:text-white',
    white: 'bg-white text-black hover:bg-gray-100 border border-white',
  };

  return (
    <button 
      className={`px-8 py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
