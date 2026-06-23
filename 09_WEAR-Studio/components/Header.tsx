/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { ShirtIcon, DownloadIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="w-full py-5 px-4 md:px-8 bg-white sticky top-0 z-40 border-b border-gray-100">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <ShirtIcon className="w-6 h-6 text-gray-700" />
          <h1 className="text-2xl font-serif tracking-widest text-gray-800">
            Virtual Try-On
          </h1>
        </div>
        
        <a 
          href="/vvardrobe-app.zip" 
          download="vvardrobe-app.zip"
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-gray-800 rounded-full text-xs font-semibold hover:bg-gray-50 transition-all text-gray-700 hover:text-gray-950 duration-150 shadow-sm"
          title="Download full source code as a ZIP archive"
        >
          <DownloadIcon className="w-4 h-4" />
          <span>Export as ZIP</span>
        </a>
      </div>
    </header>
  );
};

export default Header;