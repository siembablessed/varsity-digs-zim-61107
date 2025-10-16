import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const smoothScrollTo = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg mr-3">
                <Home className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">VarsityDigs</span>
            </div>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed">
              Connecting Zimbabwean students with verified, affordable accommodation 
              near their universities. No agents, no hidden fees, just honest housing.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-all duration-200 hover:scale-110">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <div className="p-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-all duration-200 hover:scale-110">
                <Twitter className="h-5 w-5 text-white" />
              </div>
              <div className="p-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-all duration-200 hover:scale-110">
                <Instagram className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-white">For Students</h3>
            <ul className="space-y-3 text-white/90">
              <li><a href="#property-results" onClick={(e) => { e.preventDefault(); smoothScrollTo('#property-results'); }} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Find Accommodation</a></li>
              <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('#how-it-works'); }} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">How It Works</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); smoothScrollTo('#faq'); }} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Safety Tips</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); smoothScrollTo('#features'); }} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Student Guide</a></li>
            </ul>
          </div>

          {/* For Owners */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-white">For Property Owners</h3>
            <ul className="space-y-3 text-white/90">
              <li><a href="#pricing" onClick={(e) => { e.preventDefault(); smoothScrollTo('#pricing'); }} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">List Your Property</a></li>
              <li><a href="#pricing" onClick={(e) => { e.preventDefault(); smoothScrollTo('#pricing'); }} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Pricing</a></li>
              <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('#how-it-works'); }} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Owner Resources</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); smoothScrollTo('#testimonials'); }} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Success Stories</a></li>
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
            <a href="#faq" onClick={(e) => { e.preventDefault(); smoothScrollTo('#faq'); }} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); smoothScrollTo('#faq'); }} className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact'); }} className="hover:text-white transition-colors">Support</a>
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