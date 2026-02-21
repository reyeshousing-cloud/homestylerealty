import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "What distinguishes Home Style Realty?",
      answer: "We specialize exclusively in architectural and design-led properties. Our curation process ensures that every home we represent meets a high standard of aesthetic and structural integrity."
    },
    {
      question: "Do you handle international property transactions?",
      answer: "Yes, we have a global network of partners and specialize in assisting international buyers with the complexities of purchasing property abroad, including legal, financial, and relocation support."
    },
    {
      question: "How do you determine the value of a property?",
      answer: "We use a comprehensive approach that includes comparative market analysis, assessment of architectural significance, historical data, and current market trends."
    },
    {
      question: "What is your marketing strategy?",
      answer: "Our marketing strategy is bespoke for each property. It typically includes professional architectural photography, features in design publications, and direct outreach to our exclusive database."
    },
    {
      question: "Can you help with financing?",
      answer: "While we are not a lender, we have established relationships with private banks and wealth management firms that specialize in complex financial structures."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="mb-24 border-b border-black pb-12 text-center">
          <h1 className="text-6xl font-sans font-light mb-8 text-black tracking-tighter">
            FAQ
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Common questions about our process and services.
          </p>
        </div>

        <div className="space-y-0 border-t border-black">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                className="w-full py-8 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-sans text-xl tracking-tight transition-colors ${openIndex === idx ? 'font-bold text-black' : 'font-light text-gray-800 group-hover:text-black'}`}>
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <Minus className="text-black" size={20} strokeWidth={1} />
                ) : (
                  <Plus className="text-gray-400 group-hover:text-black transition-colors" size={20} strokeWidth={1} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-8 text-gray-500 leading-relaxed font-light pr-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-600 mb-8 font-light">Still have questions?</p>
          <a href="/contact" className="inline-block bg-black text-white px-10 py-4 font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors text-xs">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
