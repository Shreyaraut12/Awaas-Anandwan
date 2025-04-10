
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    closeMenu();
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-serif font-bold text-primary-600">Anandwan Awaas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`text-sm font-medium ${isActive('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'}`}
            >
              About Us
            </Link>
            <Link 
              to="/faqs" 
              className={`text-sm font-medium ${isActive('/faqs') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'}`}
            >
              FAQs
            </Link>
            <Link 
              to="/guide" 
              className={`text-sm font-medium ${isActive('/guide') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'}`}
            >
              Guide
            </Link>
            <Link 
              to="/team" 
              className={`text-sm font-medium ${isActive('/team') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'}`}
            >
              Team
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Globe size={16} />
                  {language}
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => toggleLanguage('EN')}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage('HI')}>हिंदी</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/admin-login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="ghost" size="sm">Sign Up</Button>
            </Link>
            <Link to="/donate">
              <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white rounded-full">Donate</Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/about" className="text-gray-700 hover:text-primary-500" onClick={closeMenu}>About Us</Link>
            <Link to="/faqs" className="text-gray-700 hover:text-primary-500" onClick={closeMenu}>FAQs</Link>
            <Link to="/guide" className="text-gray-700 hover:text-primary-500" onClick={closeMenu}>Guide</Link>
            <Link to="/team" className="text-gray-700 hover:text-primary-500" onClick={closeMenu}>Team</Link>
            
            <div className="flex items-center space-x-4 border-t pt-4">
              <button 
                onClick={() => toggleLanguage('EN')} 
                className={`text-sm ${language === 'EN' ? 'font-bold text-primary-600' : 'text-gray-700'}`}
              >
                English
              </button>
              <button 
                onClick={() => toggleLanguage('HI')} 
                className={`text-sm ${language === 'HI' ? 'font-bold text-primary-600' : 'text-gray-700'}`}
              >
                हिंदी
              </button>
            </div>
            
            <div className="flex flex-col space-y-2 border-t pt-4">
              <Link to="/admin-login" onClick={closeMenu}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <Button variant="outline" className="w-full">Sign Up</Button>
              </Link>
              <Link to="/donate" onClick={closeMenu}>
                <Button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white">Donate</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
