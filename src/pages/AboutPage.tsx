import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, SHOP_LOCATION, SHOP_HOURS } from '../data/products';

export const AboutPage: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Kashmir Mobile! I read your about page and want to inquire about available phones.")}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="about-page-wrapper wrap section-spacing">
      {/* Page Header */}
      <div className="about-hero text-center mb-12">
        <span className="eyebrow">Established Mobile Store</span>
        <h1 className="page-title">About Kashmir Mobile Shop</h1>
        <p className="page-subtitle max-w-2xl mx-auto">
          Providing Dhari Sanghi & Rahim Yar Khan with authentic smartphones, certified pre-owned iPhones, and genuine mobile accessories.
        </p>
      </div>

      {/* Grid Content */}
      <div className="about-grid">
        <div className="about-text-content">
          <h2>Your Trusted Partner for Mobile Devices in Rahim Yar Khan</h2>
          <p>
            At <strong>Kashmir Mobile Shop</strong>, we believe every customer deserves complete transparency, fair pricing, and 100% genuine products. Whether you are looking for the latest flagship iPhone 15 Pro Max, a budget-friendly Samsung Galaxy A-series device, or a 10/10 condition pre-owned phone, we have you covered.
          </p>
          <p>
            Located conveniently in <strong>Dhari Sanghi, Rahim Yar Khan</strong>, our physical store is equipped with a wide selection of brand-new sealed units with official brand warranties, as well as thoroughly inspected pre-owned smartphones backed by our 7-day checking warranty.
          </p>

          <div className="about-stats-row">
            <div className="stat-box">
              <span className="num">5,000+</span>
              <span className="lbl">Satisfied Customers</span>
            </div>
            <div className="stat-box">
              <span className="num">100%</span>
              <span className="lbl">PTA Tax Paid Stock</span>
            </div>
            <div className="stat-box">
              <span className="num">7 Days</span>
              <span className="lbl">Checking Warranty</span>
            </div>
          </div>

          <div className="about-actions mt-6">
            <button onClick={handleWhatsApp} className="btn-hero-whatsapp">
              <MessageCircle size={18} /> Chat on WhatsApp ({WHATSAPP_DISPLAY})
            </button>
          </div>
        </div>

        <div className="about-visual-card">
          <div className="store-img-box">
            <img src="/assets/phones-studio.png" alt="Kashmir Mobile Shop Inventory" />
            <div className="store-badge">📍 Dhari Sanghi, RYK</div>
          </div>

          <div className="store-info-list">
            <div className="info-item">
              <MapPin size={18} className="text-emerald-400" />
              <div>
                <strong>Location Address:</strong>
                <p>{SHOP_LOCATION}</p>
              </div>
            </div>
            <div className="info-item">
              <PhoneCall size={18} className="text-cyan-400" />
              <div>
                <strong>Direct Contact / WhatsApp:</strong>
                <p>{WHATSAPP_DISPLAY}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
