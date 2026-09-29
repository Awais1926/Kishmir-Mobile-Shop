import React from 'react';
import { 
  Smartphone, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Award, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, SHOP_LOCATION, SHOP_HOURS } from '../data/products';

export const Footer: React.FC = () => {
  const handleWhatsApp = (topic?: string) => {
    const msg = topic ? `Hi Kashmir Mobile, I have a query regarding ${topic}.` : "Hi Kashmir Mobile Shop, please share location and current inventory list.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="site-footer">
      {/* Top Footer Banner */}
      <div className="footer-top-strip">
        <div className="wrap grid-features">
          <div className="feature-box">
            <div className="feature-icon"><ShieldCheck size={24} /></div>
            <div>
              <h4>100% Genuine Devices</h4>
              <p>Official PTA & verified authentic inventory</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon"><Award size={24} /></div>
            <div>
              <h4>Best Exchange Rates</h4>
              <p>Top value guaranteed on phone trade-ins in RYK</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon"><MessageSquare size={24} /></div>
            <div>
              <h4>Instant WhatsApp Support</h4>
              <p>Quick responses directly from shop team</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap footer-main-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <a href="#/" className="brand-logo footer-logo">
            <div className="logo-icon-box">
              <Smartphone size={22} className="logo-phone-icon" />
            </div>
            <div className="brand-text-container">
              <span className="brand-title">Kashmir <span className="brand-gold">MOBILE</span></span>
              <span className="brand-subtitle">DHARI SANGHI • RAHIM YAR KHAN</span>
            </div>
          </a>
          <p className="footer-desc">
            Your trusted destination for brand new sealed smartphones, certified pre-owned iPhones & Samsungs, and original mobile accessories in Dhari Sanghi, Rahim Yar Khan.
          </p>
          <div className="footer-wa-card">
            <div className="wa-card-info">
              <span className="wa-label">WhatsApp Helpline</span>
              <span className="wa-number">{WHATSAPP_DISPLAY}</span>
            </div>
            <button onClick={() => handleWhatsApp()} className="btn-wa-small">
              Chat Now ↗
            </button>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Navigation</h3>
          <ul className="footer-links">
            <li><a href="#/"><ChevronRight size={14} /> Home Page</a></li>
            <li><a href="#/shop"><ChevronRight size={14} /> Shop All Inventory</a></li>
            <li><a href="#/shop/new"><ChevronRight size={14} /> Brand New Smartphones</a></li>
            <li><a href="#/shop/used"><ChevronRight size={14} /> Pre-Owned & Certified Used</a></li>
            <li><a href="#/accessories"><ChevronRight size={14} /> Chargers & AirPods</a></li>
            <li><a href="#/sell-phone"><ChevronRight size={14} /> Trade-in / Sell Old Phone</a></li>
            <li><a href="#/compare"><ChevronRight size={14} /> Phone Specs Comparator</a></li>
          </ul>
        </div>

        {/* Categories Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Popular Brands</h3>
          <ul className="footer-links">
            <li><a href="#/shop?brand=Apple"><ChevronRight size={14} /> Apple iPhone Series</a></li>
            <li><a href="#/shop?brand=Samsung"><ChevronRight size={14} /> Samsung Galaxy Series</a></li>
            <li><a href="#/shop?brand=Xiaomi"><ChevronRight size={14} /> Xiaomi & Redmi Phones</a></li>
            <li><a href="#/shop?brand=Infinix"><ChevronRight size={14} /> Infinix Note & Hot Series</a></li>
            <li><a href="#/shop?brand=Tecno"><ChevronRight size={14} /> Tecno Camon & Spark</a></li>
            <li><a href="#/shop?brand=Vivo"><ChevronRight size={14} /> Vivo V & Y Series</a></li>
          </ul>
        </div>

        {/* Store Location & Contact */}
        <div className="footer-col contact-col">
          <h3 className="footer-heading">Visit Store</h3>
          <ul className="contact-info-list">
            <li>
              <MapPin size={18} className="contact-icon text-emerald-400" />
              <div>
                <strong>Location:</strong>
                <p>Dhari Sanghi, Rahim Yar Khan, Punjab, Pakistan</p>
              </div>
            </li>
            <li>
              <Phone size={18} className="contact-icon text-cyan-400" />
              <div>
                <strong>Phone / WhatsApp:</strong>
                <p><a href={`tel:${WHATSAPP_NUMBER}`}>{WHATSAPP_DISPLAY}</a></p>
              </div>
            </li>
            <li>
              <Clock size={18} className="contact-icon text-amber-400" />
              <div>
                <strong>Opening Hours:</strong>
                <p>{SHOP_HOURS}</p>
              </div>
            </li>
          </ul>

          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent('Dhari Sanghi, Rahim Yar Khan')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline-map"
          >
            <ExternalLink size={14} /> Get Directions on Google Maps
          </a>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="wrap flex-between">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>Kashmir Mobile Shop</strong>. All rights reserved.
          </p>
          <div className="footer-extra-notes">
            <span>Dhari Sanghi, Rahim Yar Khan</span>
            <span className="dot">•</span>
            <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
