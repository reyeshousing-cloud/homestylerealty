import React, { useState } from 'react';
import { PropertyCard } from '../components/ui/Components';
import { properties } from '../data/mockData';
import { Filter, Search } from 'lucide-react';

export default function Properties() {
  const [filter, setFilter] = useState('All');

  const filteredProperties = properties.filter(property => {
    if (filter !== 'All' && property.type !== filter) return false;
    return true;
  });

  const propertyTypes = ['All', 'Villa', 'Penthouse', 'Estate', 'Mansion', 'Townhouse'];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container-custom">
        <div className="mb-20 border-b border-black pb-8">
          <h1 className="text-6xl font-sans font-light mb-4 text-black tracking-tighter">Collection</h1>
          <p className="text-gray-500 max-w-xl font-light">
            A curated selection of architectural residences.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
              <span className="uppercase tracking-widest text-xs font-bold mr-4 text-black">Filter:</span>
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all border ${
                    filter === type 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80 border-b border-gray-300 focus-within:border-black transition-colors">
              <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black" size={16} />
              <input 
                type="text" 
                placeholder="SEARCH PROPERTIES..." 
                className="w-full pl-8 pr-4 py-3 bg-transparent focus:outline-none text-xs tracking-widest uppercase placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-32 border border-gray-100">
            <p className="text-gray-400 text-lg font-light">No properties found matching your criteria.</p>
            <button 
              onClick={() => setFilter('All')}
              className="mt-6 text-black font-bold uppercase tracking-widest text-xs border-b border-black pb-1 hover:opacity-50"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
