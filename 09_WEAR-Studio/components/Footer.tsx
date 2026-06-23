/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DownloadIcon } from './icons';

const REMIX_SUGGESTIONS = [
  "Remix idea: Generate a shareable lookbook.",
  "Remix idea: Integrate an e-commerce API to find similar items.",
  "Remix idea: Add accessories like hats, sunglasses, or bags.",
  "Remix idea: Create a 'style score' for outfits.",
  "Remix idea: Let users save their favorite outfits.",
  "Remix idea: Generate different colorways for garments.",
];

interface FooterProps {
  isOnDressingScreen?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isOnDressingScreen = false }) => {
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionIndex((prevIndex) => (prevIndex + 1) % REMIX_SUGGESTIONS.length);
    }, 4000); // Change suggestion every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={`fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200/60 p-3 z-50 ${isOnDressingScreen ? 'hidden sm:block' : ''}`}>
      <div className="mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 max-w-7xl px-4">
        <div className="flex items-center gap-4">
          <p className="font-semibold text-gray-800">
            VVARDROBE
          </p>
          <a 
            href="/vvardrobe-app.zip" 
            download="vvardrobe-app.zip"
            className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 hover:border-gray-800 rounded-full text-[11px] font-semibold hover:bg-gray-100 transition-all text-gray-700 hover:text-gray-950 duration-150 shadow-sm"
            title="Download full source code as a ZIP archive"
          >
            <DownloadIcon className="w-3.5 h-3.5 text-gray-700" />
            <span>Export Code (ZIP)</span>
          </a>
        </div>
        <div className="h-4 mt-1 sm:mt-0 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={suggestionIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-center sm:text-right"
              >
                {REMIX_SUGGESTIONS[suggestionIndex]}
              </motion.p>
            </AnimatePresence>
        </div>
      </div>
    </footer>
  );
};

export default Footer;