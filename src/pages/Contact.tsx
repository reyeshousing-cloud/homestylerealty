import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        <div className="mb-24 border-b border-black pb-12">
          <h1 className="text-6xl md:text-8xl font-sans font-light mb-8 text-black tracking-tighter">
            GET IN <span className="font-bold">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl font-light leading-relaxed">
            We are here to assist you with your architectural real estate needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-sans font-light mb-12 text-black tracking-tight">Contact <span className="font-bold">Details</span></h2>
            
            <div className="space-y-12">
              <div className="flex items-start group">
                <MapPin size={24} strokeWidth={1} className="mr-8 text-black mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-black mb-2 uppercase tracking-[0.2em]">Office</h3>
                  <p className="text-gray-600 font-light text-lg">Airport Residential<br /> , Accra, Ghana 00233</p>
                </div>
              </div>

              <div className="flex items-start group">
                <Phone size={24} strokeWidth={1} className="mr-8 text-black mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-black mb-2 uppercase tracking-[0.2em]">Phone</h3>
                  <p className="text-gray-600 font-light text-lg">+1 (212) 555-0199</p>
                  <p className="text-gray-400 text-sm mt-1 font-light">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start group">
                <Mail size={24} strokeWidth={1} className="mr-8 text-black mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-black mb-2 uppercase tracking-[0.2em]">Email</h3>
                  <p className="text-gray-600 font-light text-lg">hello@homestylerealty.com</p>
                  <p className="text-gray-400 text-sm mt-1 font-light">We reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-12">
            <h2 className="text-2xl font-sans font-bold mb-10 text-black uppercase tracking-widest">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-black mb-3 uppercase tracking-[0.2em]">First Name</label>
                  <input type="text" className="w-full px-4 py-4 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-black mb-3 uppercase tracking-[0.2em]">Last Name</label>
                  <input type="text" className="w-full px-4 py-4 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-black mb-3 uppercase tracking-[0.2em]">Email Address</label>
                <input type="email" className="w-full px-4 py-4 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-black mb-3 uppercase tracking-[0.2em]">Message</label>
                <textarea rows={5} className="w-full px-4 py-4 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
              </div>
              
              <button className="w-full bg-black text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors text-xs">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
