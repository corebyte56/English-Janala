// navbar.jsx
import React, { useState } from 'react';
import NavLeft from './nav-left';
import NavRight from './nav-right';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#BADEFF]/26 backdrop-blur-sm shadow-md">
      <div className="py-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          
          <NavLeft />

         
          <div className="hidden md:flex items-center">
            <NavRight />
          </div>

         
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#422AD5] hover:text-[#422AD5]/80 hover:bg-[#422AD5]/10 focus:outline-none"
              aria-expanded="false"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#422AD5]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavRight isMobile={true} />  
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;