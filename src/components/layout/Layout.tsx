import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isTransparent = location.pathname === '/' && !scrolled;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isTransparent ? 'bg-transparent border-transparent py-8' : 'bg-white border-gray-100 py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="block">
          <img 
            src="https://i.ibb.co/m553KXH1/Chat-GPT-Image-Feb-21-2026-03-10-59-PM.png" 
            alt="Home Style Realty" 
            className="h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-medium uppercase tracking-[0.15em] hover:opacity-60 transition-opacity ${
                isTransparent ? 'text-white' : 'text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] border transition-all duration-300 ${
              isTransparent 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className={`w-6 h-6 ${isTransparent ? 'text-white' : 'text-black'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-3xl font-sans font-light text-black hover:text-gray-500 tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-gray-900">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="block mb-8">
            <img 
              src="https://i.ibb.co/m553KXH1/Chat-GPT-Image-Feb-21-2026-03-10-59-PM.png" 
              alt="Home Style Realty" 
              className="h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light max-w-xs">
            Curating spaces for the modern individual. We define the intersection of architecture, design, and lifestyle.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} strokeWidth={1} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} strokeWidth={1} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} strokeWidth={1} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} strokeWidth={1} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Explore</h4>
          <ul className="space-y-4 text-sm font-light text-gray-300">
            <li><Link to="/properties" className="hover:text-white transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Properties</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Services</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> About</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Contact</h4>
          <ul className="space-y-4 text-sm font-light text-gray-300">
            <li className="flex items-start space-x-3">
              <span>Airport Residential<br/>Accra, Ghana 00233</span>
            </li>
            <li>+1 (212) 555-0199</li>
            <li>hello@homestylerealty.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Newsletter</h4>
          <form className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent border-b border-gray-800 text-white px-0 py-3 focus:outline-none focus:border-white text-xs tracking-wider placeholder-gray-600"
            />
            <button className="text-left text-xs font-bold uppercase tracking-[0.2em] hover:text-gray-400 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-900 pt-12">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} Home Style Realty.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
