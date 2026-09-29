import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Search, 
  Heart, 
  Menu, 
  X, 
  MapPin, 
  PhoneCall, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  ShoppingBag,
  Sparkle,
  Zap,
  Headphones,
  ArrowLeftRight
} from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, SHOP_LOCATION } from '../data/products';

interface NavbarProps {
  currentPath: string;
  wishlistCount: number;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, wishlistCount, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = (text?: string) => {
    const msg = text || "Hi Kashmir Mobile Shop, I'm reaching out from your website for details & prices.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  const isShopActive = currentPath.startsWith('/shop') || currentPath === '/accessories' || currentPath === '/compare';

  const shopSubMenu = [
    { href: '#/shop', label: 'All Catalog', sub: 'Browse complete inventory', icon: ShoppingBag, color: 'text-emerald-400' },
    { href: '#/shop/new', label: 'Brand New Phones', sub: 'Official 1-Year Warranty', icon: Sparkle, color: 'text-emerald-400' },
    { href: '#/shop/used', label: 'Pre-Owned / Used', sub: 'Certified 10/10 condition', icon: Zap, color: 'text-amber-400' },
    { href: '#/accessories', label: 'Accessories', sub: 'Chargers, AirPods & PowerBanks', icon: Headphones, color: 'text-cyan-400' },
    { href: '#/compare', label: 'Compare Devices', sub: 'Side-by-side spec comparator', icon: ArrowLeftRight, color: 'text-blue-400' },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setShopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-announcement-bar">
        <div className="wrap flex-between">
          <div className="top-info">
            <span className="location-tag">
              <MapPin size={13} className="text-emerald-400" />
              {SHOP_LOCATION}
            </span>
            <span className="divider-line">|</span>
            <span className="trust-badge-small">
              <Sparkles size={12} className="text-amber-400" />
              100% Genuine & Official PTA Verified Stock
            </span>
          </div>
          <div className="top-right-links">
            <a href="tel:03092585126" className="top-phone">
              <PhoneCall size={12} /> Call: {WHATSAPP_DISPLAY}
            </a>
            <button 
              onClick={() => handleWhatsApp()} 
              className="top-wa-btn"
            >
              Quick WhatsApp Chat
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="wrap header-content">
          {/* Brand Logo */}
          <a href="#/" className="brand-logo" aria-label="Kashmir Mobile Shop Home">
            <div className="logo-icon-box">
              <Smartphone size={24} className="logo-phone-icon" />
              <div className="logo-sparkle" />
            </div>
            <div className="brand-text-container">
              <span className="brand-title">
                Kashmir <span className="brand-gold">MOBILE</span>
              </span>
              <span className="brand-subtitle">DHARI SANGHI • RAHIM YAR KHAN</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            {/* Home Link */}
            <a
              href="#/"
              className={`nav-item ${currentPath === '/' ? 'active' : ''}`}
            >
              Home
            </a>

            {/* Shop Dropdown Wrapper */}
            <div 
              className="shop-dropdown-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#/shop"
                className={`nav-item dropdown-trigger-btn ${isShopActive ? 'active' : ''}`}
                onClick={(e) => {
                  // Toggle dropdown on click if needed
                }}
              >
                <span>Shop Catalog</span>
                <ChevronDown size={14} className={`dropdown-chevron ${shopDropdownOpen ? 'rotated' : ''}`} />
              </a>

              {/* Dropdown Menu Panel */}
              {shopDropdownOpen && (
                <div className="shop-dropdown-menu">
                  <div className="dropdown-menu-header">
                    <span>SHOP CATEGORIES & TOOLS</span>
                  </div>
                  <div className="dropdown-items-grid">
                    {shopSubMenu.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="dropdown-menu-item"
                          onClick={() => setShopDropdownOpen(false)}
                        >
                          <div className={`dropdown-item-icon ${item.color}`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <span className="dropdown-item-title">{item.label}</span>
                            <span className="dropdown-item-sub">{item.sub}</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Trade-in / Sell Link */}
            <a
              href="#/sell-phone"
              className={`nav-item ${currentPath === '/sell-phone' ? 'active' : ''}`}
            >
              Trade-in / Sell
            </a>

            {/* About Us Link */}
            <a
              href="#/about"
              className={`nav-item ${currentPath === '/about' ? 'active' : ''}`}
            >
              About Us
            </a>

            {/* Contact Link */}
            <a
              href="#/contact"
              className={`nav-item ${currentPath === '/contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <button 
              className="action-icon-btn search-trigger"
              onClick={onOpenSearch}
              aria-label="Search Products"
              title="Search Products (Ctrl+K)"
            >
              <Search size={18} />
              <span className="search-pill-text">Search...</span>
            </button>

            <a 
              href="#/wishlist" 
              className="action-icon-btn wishlist-btn" 
              aria-label="View Saved Favorites"
              title="Wishlist"
            >
              <Heart size={18} />
              {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
            </a>

            <button 
              className="btn-primary-wa"
              onClick={() => handleWhatsApp()}
            >
              <span className="wa-pulse-dot" />
              WhatsApp {WHATSAPP_DISPLAY}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-overlay">
            <div className="mobile-nav-panel">
              <div className="mobile-nav-head">
                <span className="mobile-nav-title">Menu Navigation</span>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>

              <div className="mobile-search-bar" onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}>
                <Search size={16} />
                <span>Search catalog...</span>
              </div>

              <div className="mobile-links-list">
                <a
                  href="#/"
                  className={`mobile-link-item ${currentPath === '/' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Home</span>
                  <ArrowRight size={16} />
                </a>

                {/* Mobile Shop Subgroup */}
                <div className="mobile-subgroup">
                  <div className="mobile-subgroup-title">Shop Section</div>
                  {shopSubMenu.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      className={`mobile-link-item sub-item ${currentPath === sub.href.replace('#', '') ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{sub.label}</span>
                      <ArrowRight size={14} />
                    </a>
                  ))}
                </div>

                <a
                  href="#/sell-phone"
                  className={`mobile-link-item ${currentPath === '/sell-phone' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Trade-in / Sell</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#/about"
                  className={`mobile-link-item ${currentPath === '/about' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>About Us</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#/contact"
                  className={`mobile-link-item ${currentPath === '/contact' ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="mobile-nav-footer">
                <button 
                  className="btn-wa-full"
                  onClick={() => { setMobileMenuOpen(false); handleWhatsApp(); }}
                >
                  Message on WhatsApp ({WHATSAPP_DISPLAY})
                </button>
                <div className="mobile-shop-info">
                  <p>📍 Dhari Sanghi, Rahim Yar Khan</p>
                  <p>⏰ 10:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
