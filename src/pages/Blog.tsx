import React from 'react';
import { blogPosts } from '../data/mockData';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <div className="mb-24 border-b border-black pb-12">
          <h1 className="text-6xl md:text-8xl font-sans font-light mb-8 text-black tracking-tighter">
            THE <span className="font-bold">JOURNAL</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl font-light leading-relaxed">
            Insights on design, architecture, and modern living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col h-full group cursor-pointer">
              <div className="overflow-hidden mb-8 h-80 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              
              <div className="flex items-center text-[10px] font-bold text-black mb-4 uppercase tracking-[0.2em] space-x-4">
                <div className="flex items-center">
                  {post.date}
                </div>
                <span className="w-8 h-[1px] bg-black"></span>
                <div className="flex items-center">
                  Design
                </div>
              </div>
              
              <h2 className="text-3xl font-sans font-light mb-4 text-black group-hover:underline decoration-1 underline-offset-8 decoration-gray-300 transition-all leading-tight">
                {post.title}
              </h2>
              
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed font-light text-sm">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <span className="inline-flex items-center text-black font-bold uppercase tracking-[0.2em] text-[10px] group-hover:opacity-60 transition-opacity">
                  Read Story <ArrowRight size={12} className="ml-2" />
                </span>
              </div>
            </article>
          ))}
          
          {/* Duplicate posts to fill the grid for demo purposes */}
          {blogPosts.map((post) => (
            <article key={`${post.id}-dup`} className="flex flex-col h-full group cursor-pointer">
              <div className="overflow-hidden mb-8 h-80 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              
              <div className="flex items-center text-[10px] font-bold text-black mb-4 uppercase tracking-[0.2em] space-x-4">
                <div className="flex items-center">
                  {post.date}
                </div>
                <span className="w-8 h-[1px] bg-black"></span>
                <div className="flex items-center">
                  Architecture
                </div>
              </div>
              
              <h2 className="text-3xl font-sans font-light mb-4 text-black group-hover:underline decoration-1 underline-offset-8 decoration-gray-300 transition-all leading-tight">
                {post.title}
              </h2>
              
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed font-light text-sm">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <span className="inline-flex items-center text-black font-bold uppercase tracking-[0.2em] text-[10px] group-hover:opacity-60 transition-opacity">
                  Read Story <ArrowRight size={12} className="ml-2" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
