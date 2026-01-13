import { useState } from 'react';
import { MessageCircle, X, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-8 z-40">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-4 space-y-3 animate-slideUp">
          <Link
            to="/contact"
            className="flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-all">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium">Send Message</span>
          </Link>
          
          <a
            href="tel:+911234567890"
            className="flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-all">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-medium">Call Us</span>
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-5 bg-[#0A66C2] text-white rounded-full shadow-2xl hover:shadow-xl hover:scale-110 hover:bg-[#004182] active:scale-95 transition-all ${!isOpen && 'animate-bounce'}`}
        aria-label="Contact us"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}