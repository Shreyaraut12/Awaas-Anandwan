
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Anandwan Awaas</h3>
            <p className="text-sm mb-4">
              Transforming lives through compassion and community in the heart of nature.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent-orange">About Us</Link></li>
              <li><Link to="/faqs" className="hover:text-accent-orange">FAQs</Link></li>
              <li><Link to="/guide" className="hover:text-accent-orange">Guest Guide</Link></li>
              <li><Link to="/team" className="hover:text-accent-orange">Our Team</Link></li>
              <li><Link to="/donate" className="hover:text-accent-orange">Donate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@anandwanawaas.org" className="hover:text-accent-orange">info@anandwanawaas.org</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+911234567890" className="hover:text-accent-orange">+91 123 456 7890</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <p>Anandwan, Warora, Chandrapur District, Maharashtra, India - 442914</p>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-bold mb-4">Find Us</h3>
            <div className="h-40 bg-primary-500 rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.123670558875!2d79.00120541493493!3d20.238291486422446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3a427a75fffff%3A0x3e2947d0efe0d911!2sAnandwan!5e0!3m2!1sen!2sin!4v1649248714229!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Anandwan Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-500 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Anandwan Awaas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
