import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/98 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="hover:scale-105 transition-transform duration-300 flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
            <Logo size="md" variant="dark" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link to="/" className="px-3 xl:px-4 py-2 rounded-2xl text-foreground hover:bg-muted transition-all font-medium text-sm xl:text-base whitespace-nowrap">
              Home
            </Link>
            <Link to="/about" className="px-3 xl:px-4 py-2 rounded-2xl text-foreground hover:bg-muted transition-all font-medium text-sm xl:text-base whitespace-nowrap">
              About Us
            </Link>
            <Link to="/headhunting" className="px-3 xl:px-4 py-2 rounded-2xl text-foreground hover:bg-muted transition-all font-medium text-sm xl:text-base whitespace-nowrap">
              Headhunting
            </Link>
            <Link to="/employers" className="px-3 xl:px-4 py-2 rounded-2xl text-foreground hover:bg-muted transition-all font-medium text-sm xl:text-base whitespace-nowrap">
              For Employers
            </Link>
            <Link to="/clients" className="px-3 xl:px-4 py-2 rounded-2xl text-foreground hover:bg-muted transition-all font-medium text-sm xl:text-base whitespace-nowrap">
              Our Clients
            </Link>
            <Link to="/contact" className="px-3 xl:px-4 py-2 rounded-2xl text-foreground hover:bg-muted transition-all font-medium text-sm xl:text-base whitespace-nowrap">
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              to="/upload-resume"
              className="bg-[#0A66C2] text-white px-5 xl:px-6 py-2.5 rounded-full hover:bg-[#004182] hover:scale-105 transition-all duration-300 font-semibold shadow-md text-sm xl:text-base whitespace-nowrap"
            >
              Upload Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-all active:scale-95 touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-border animate-fadeIn">
            <Link
              to="/"
              className="block px-4 py-3.5 hover:bg-muted active:bg-muted text-foreground rounded-2xl transition-all font-medium touch-manipulation mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3.5 hover:bg-muted active:bg-muted text-foreground rounded-2xl transition-all font-medium touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/headhunting"
              className="block px-4 py-3.5 hover:bg-muted active:bg-muted text-foreground rounded-2xl transition-all font-medium touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Headhunting
            </Link>
            <Link
              to="/employers"
              className="block px-4 py-3.5 hover:bg-muted active:bg-muted text-foreground rounded-2xl transition-all font-medium touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              For Employers
            </Link>
            <Link
              to="/clients"
              className="block px-4 py-3.5 hover:bg-muted active:bg-muted text-foreground rounded-2xl transition-all font-medium touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Clients
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3.5 hover:bg-muted active:bg-muted text-foreground rounded-2xl transition-all font-medium touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/upload-resume"
              className="block bg-[#0A66C2] text-white px-4 py-3.5 rounded-2xl hover:bg-[#004182] active:bg-[#004182] transition-all text-center mt-3 font-semibold shadow-md touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Upload Resume
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}