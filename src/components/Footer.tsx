import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-card to-muted/30 border-t-2 border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <img
                src="/hfmkenya.png"
                alt="Holistic Family Midwife Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Holistic Family Midwife
                </span>
                <span className="font-sans text-xs text-muted-foreground">
                  Est. 2022
                </span>
              </div>
            </Link>

            <p className="text-sm text-foreground leading-relaxed mb-4">
              Providing compassionate, evidence-based midwifery care for families throughout pregnancy, birth, and beyond.
            </p>

            <div className="flex gap-3 justify-center">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/people/Holistic-Family-Midwife/100067548342728/?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/holisticfamilymidwife/?igsh=bmptOXM0cmZmYml4#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/*Youtube */}
              <a
                href="https://youtube.com/@familymidwife-ke8002?si=fI0_YseQh9nbOK44"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
                aria-label="Facebook"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-foreground hover:text-primary hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-foreground hover:text-primary hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-sm text-foreground hover:text-primary hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/booking" 
                  className="text-sm text-foreground hover:text-primary hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-foreground hover:text-primary hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground group">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="tel:0797735027" 
                  className="hover:text-primary transition-colors duration-300 font-medium"
                >
                  +254797735027
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-foreground group">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="mailto:info@holisticfamilymidwife.com" 
                  className="hover:text-primary transition-colors duration-300 font-medium break-all"
                >
                  info@holisticfamilymidwife.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-foreground group">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">
                  Nairobi, Kenya<br />
                  <span className="text-xs text-muted-foreground">Home-based services available</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Office Hours</h3>
            <div className="text-sm text-foreground space-y-2 font-medium">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-primary">9:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-primary">By Appointment</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-muted-foreground">Closed</span>
              </p>
              <div className="pt-3 mt-3 border-t border-border">
                <p className="text-primary font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  24/7 Emergency Support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground font-medium text-center md:text-left">
              © {currentYear} <span className="font-bold text-primary">Holistic Family Midwife</span>. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/privacy" 
                className="text-xs text-foreground hover:text-primary transition-colors duration-300 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground">•</span>

              <Link 
                to="/terms" 
                className="text-xs text-foreground hover:text-primary transition-colors duration-300 font-medium hover:underline"
              >
                Terms of Service
              </Link>
              <span className="text-muted-foreground">•</span>

              <Link 
                to="/compliance" 
                className="text-xs text-foreground hover:text-primary transition-colors duration-300 font-medium hover:underline"
              >
                Compliance
              </Link>
            </div>
          </div>

          {/* Developer Credits */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>Designed & Developed by</span>

              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp/10 hover:bg-whatsapp text-foreground hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold group"
              >
                <MessageCircle className="h-4 w-4 group-hover:animate-bounce" />
                <span>CodeConjurer Technologies</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
