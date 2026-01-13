import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-white text-foreground pt-16 pb-8 relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="animate-fadeIn">
            <div className="mb-6 group">
              <Logo size="md" variant="dark" className="group-hover:scale-105 transition-all" />
            </div>
            <p className="text-sm mb-6 leading-relaxed text-muted-foreground">
              Your trusted partner in finding the perfect job opportunity. We connect talented professionals with leading companies across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-muted rounded-2xl flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-2xl flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-2xl flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-2xl flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn animation-delay-100">
            <h3 className="text-foreground text-lg mb-6 font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-[#1F3A5F] hover:translate-x-1 transition-all text-sm inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-[#1F3A5F] hover:translate-x-1 transition-all text-sm inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/headhunting" className="text-muted-foreground hover:text-[#1F3A5F] hover:translate-x-1 transition-all text-sm inline-block">
                  Headhunting
                </Link>
              </li>
              <li>
                <Link to="/employers" className="text-muted-foreground hover:text-[#1F3A5F] hover:translate-x-1 transition-all text-sm inline-block">
                  For Employers
                </Link>
              </li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div className="animate-fadeIn animation-delay-200">
            <h3 className="text-foreground text-lg mb-6 font-semibold">For Job Seekers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/upload-resume" className="text-muted-foreground hover:text-[#1F3A5F] hover:translate-x-1 transition-all text-sm inline-block">
                  Upload Resume
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#1F3A5F] hover:translate-x-1 transition-all text-sm inline-block">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#1F3A5F] hover:translate-x-1 transition-all text-sm inline-block">
                  Interview Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#1F3A5F] hover:translate-x-1 transition-all text-sm inline-block">
                  Resume Writing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeIn animation-delay-300">
            <h3 className="text-foreground text-lg mb-6 font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm group">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1E7F5C] group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed text-muted-foreground">123 Business Park, Andheri East, Mumbai - 400069, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#1F3A5F] group-hover:scale-110 transition-transform" />
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-[#1F3A5F] transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#1F3A5F] group-hover:scale-110 transition-transform" />
                <a href="mailto:info@thejobshop.com" className="text-muted-foreground hover:text-[#1F3A5F] transition-colors">
                  info@thejobshop.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 The Job Shop. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-[#1F3A5F] transition-colors hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#1F3A5F] transition-colors hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#1F3A5F] transition-colors hover:underline">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}