import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Heart } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({
    isOpen: false,
    type: 'login'
  });

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Home className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold text-foreground">VarsityDigs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Find Accommodation
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              List Your Property
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button 
              size="sm"
              onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
            >
              <Home className="h-4 w-4 mr-2" />
              List Property
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Find Accommodation
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                List Your Property
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
                >
                  Sign In
                </Button>
                <Button 
                  size="sm"
                  onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
                >
                  List Property
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        defaultTab={authModal.type}
      />
    </header>
  );
};

export default Header;