import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Home, User, Heart, Search, MapPin, Building, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import AuthModal from './AuthModal';

const smoothScrollTo = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({
    isOpen: false,
    type: 'login'
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'Find Accommodation',
      href: '#property-results',
      description: 'Browse available student housing',
      items: [
        { title: 'Near UZ', href: '#property-results', icon: MapPin },
        { title: 'Near NUST', href: '#property-results', icon: MapPin },
        { title: 'Near MSU', href: '#property-results', icon: MapPin },
        { title: 'All Universities', href: '#property-results', icon: Building }
      ]
    },
    {
      title: 'List Your Property',
      href: '#pricing',
      description: 'Become a host and earn money',
      items: [
        { title: 'Start Listing', href: '#pricing', icon: Building },
        { title: 'Owner Resources', href: '#how-it-works', icon: User },
        { title: 'Pricing Guide', href: '#pricing', icon: Search }
      ]
    },
    {
      title: 'Support',
      href: '#faq',
      description: 'Get help when you need it',
      items: [
        { title: 'Help Center', href: '#faq', icon: Search },
        { title: 'Contact Us', href: '#contact', icon: Phone },
        { title: 'Report Issue', href: '#contact', icon: Heart }
      ]
    }
  ];

  return (
    <header className={`
      bg-background/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 transition-all duration-300
      ${isScrolled ? 'shadow-[var(--shadow-md)] bg-background/95' : 'shadow-[var(--shadow-sm)]'}
    `}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center group cursor-pointer">
              <span className="text-xl sm:text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">VarsityDigs</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50 text-sm font-medium">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[300px]">
                      <div className="p-4">
                        <div className="mb-3">
                          <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                        </div>
                        <div className="grid gap-2">
                           {item.items.map((subItem) => (
                            <NavigationMenuLink key={subItem.title} asChild>
                              <a 
                                href={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  smoothScrollTo(subItem.href);
                                }}
                                className="flex items-center space-x-2 rounded-md p-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                              >
                                <subItem.icon className="h-4 w-4" />
                                <span>{subItem.title}</span>
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {/* Medium Screen Simple Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4">
            <a 
              href="#property-results" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#property-results'); }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Find Housing
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#pricing'); }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              List Property
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact'); }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Support
            </a>
          </nav>

          {/* User Actions */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
              className="text-sm font-medium hover:bg-accent/50"
            >
              <User className="h-4 w-4 mr-1.5" />
              Sign In
            </Button>
            <Button 
              size="sm"
              onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
              className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-200 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
            >
              <Building className="h-4 w-4 mr-1.5" />
              <span className="hidden lg:inline">List Property</span>
              <span className="lg:hidden">List</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="sm:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center text-left">
                  <Home className="h-6 w-6 text-primary mr-2" />
                  VarsityDigs
                </SheetTitle>
                <SheetDescription className="text-left">
                  Find your perfect student accommodation
                </SheetDescription>
              </SheetHeader>
              
              <div className="mt-6 space-y-6">
                {/* Mobile Auth Buttons */}
                <div className="flex flex-col space-y-3 pb-6 border-b border-border">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setAuthModal({ isOpen: true, type: 'login' });
                      setIsMenuOpen(false);
                    }}
                    className="justify-start"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  <Button 
                    onClick={() => {
                      setAuthModal({ isOpen: true, type: 'signup' });
                      setIsMenuOpen(false);
                    }}
                    className="justify-start"
                  >
                    <Building className="h-4 w-4 mr-2" />
                    List Your Property
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-3">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <div className="space-y-2 ml-4">
                        {item.items.map((subItem) => (
                          <a 
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMenuOpen(false);
                              smoothScrollTo(subItem.href);
                            }}
                          >
                            <subItem.icon className="h-4 w-4" />
                            <span>{subItem.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
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