import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-secondary mr-2" />
              <span className="text-2xl font-bold">VarsityDigs</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Connecting Zimbabwean students with verified, affordable accommodation 
              near their universities. No agents, no hidden fees, just honest housing.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">For Students</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Find Accommodation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Guide</a></li>
            </ul>
          </div>

          {/* For Owners */}
          <div>
            <h3 className="font-semibold mb-4">For Property Owners</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">List Your Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Owner Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
        </div>

        {/* Universities We Serve */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <h3 className="font-semibold mb-4">Universities We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-white/80">
            <span>University of Zimbabwe</span>
            <span>Great Zimbabwe University</span>
            <span>Chinhoyi University</span>
            <span>Midlands State University</span>
            <span>NUST</span>
            <span>Bindura University</span>
            <span>Zimbabwe Open University</span>
            <span>Lupane State University</span>
          </div>
        </div>

        {/* Contact & Legal */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 text-sm text-white/80 mb-4 md:mb-0">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>hello@varsitydigs.co.zw</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+263 77 123 4567</span>
            </div>
          </div>
          
          <div className="flex space-x-6 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; 2024 VarsityDigs. All rights reserved. Made with ❤️ for Zimbabwean students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;