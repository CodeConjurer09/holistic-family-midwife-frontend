import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/#testimonials", hash: true },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string, hash: boolean = false) => {
    if (hash) {
      // For hash links, only mark active if on home page and hash matches
      return location.pathname === "/" && location.hash === path.split("#")[1];
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-white/80 backdrop-blur-sm border-b border-border/30"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src="/hfmkenya.png"
                alt="Holistic Family Midwife Logo"
                className="h-14 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-foreground hidden sm:block transition-colors duration-300 group-hover:text-primary">
                Holistic Family Midwife
              </span>
              <span className="font-sans text-xs text-muted-foreground hidden lg:block">
                Compassionate Maternal Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) =>
              item.hash ? (
                <HashLink
                  key={item.path}
                  smooth
                  to={item.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300",
                    "hover:bg-primary/5 hover:text-primary",
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                    "hover:after:w-3/4",
                    isActive(item.path, true)
                      ? "text-primary bg-primary/10 after:w-3/4"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </HashLink>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300",
                    "hover:bg-primary/5 hover:text-primary",
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                    "hover:after:w-3/4",
                    isActive(item.path)
                      ? "text-primary bg-primary/10 after:w-3/4"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            
            <div className="ml-4 pl-4 border-l border-border/50">
              <Button 
                variant="default" 
                size="default" 
                asChild 
                className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Link to="/booking" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.map((item) =>
              item.hash ? (
                <HashLink
                  key={item.path}
                  smooth
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-300",
                    "hover:bg-primary/5 hover:text-primary",
                    isActive(item.path, true)
                      ? "text-primary bg-primary/10"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </HashLink>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-300",
                    "hover:bg-primary/5 hover:text-primary",
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <Button 
              variant="default" 
              size="sm" 
              asChild 
              className="ml-2 shadow-md"
            >
              <Link to="/booking" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Book</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-2 pt-4">
            {navItems.map((item) =>
              item.hash ? (
                <HashLink
                  key={item.path}
                  smooth
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-300",
                    "hover:pl-6 hover:shadow-md",
                    isActive(item.path, true)
                      ? "bg-primary text-white shadow-md pl-6"
                      : "bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <span className="flex-1">{item.name}</span>
                  {isActive(item.path, true) && (
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  )}
                </HashLink>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-300",
                    "hover:pl-6 hover:shadow-md",
                    isActive(item.path)
                      ? "bg-primary text-white shadow-md pl-6"
                      : "bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <span className="flex-1">{item.name}</span>
                  {isActive(item.path) && (
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  )}
                </Link>
              )
            )}
            
            <div className="pt-4 border-t border-border/50 mt-4">
              <Button
                variant="default"
                size="lg"
                className="w-full shadow-lg font-bold"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link to="/booking" className="flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;