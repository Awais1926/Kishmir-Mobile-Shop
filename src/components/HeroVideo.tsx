import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  MessageCircle, 
  Smartphone,
  Star,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/products';

interface HeroVideoProps {
  onSearchSubmit: (query: string) => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onSearchSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleWhatsApp = (text?: string) => {
    const msg = text || "Hi Kashmir Mobile, I saw your website video hero and want to ask about your available mobile phone deals!";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchSubmit(searchInput.trim());
    } else {
      window.location.hash = '#/shop';
    }
  };

  return (
    <section className="hero-video-section">
      {/* Background Video Layer */}
      <div className="video-background-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80"
          className="hero-bg-video"
        >
          {/* High-quality technology and mobile interaction background video sources */}
          <source src="https://cdn.coverr.co/videos/coverr-smartphone-interface-technology-5444/1080p.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-in-darkness-41562-large.mp4" type="video/mp4" />
        </video>
        
        {/* Ambient Overlay Gradients & Grid Pattern */}
        <div className="hero-overlay-dark"></div>
        <div className="hero-ambient-glow glow-cyan"></div>
        <div className="hero-ambient-glow glow-emerald"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      {/* Hero Content Wrapper */}
      <div className="wrap hero-content-grid">
        {/* Left Text & CTA Column */}
        <div className="hero-text-box">
          {/* Tagline Badge */}
          <div className="hero-pill-badge">
            <Sparkles size={14} className="icon-gold text-amber-400" />
            <span>Dhari Sanghi’s Premier Mobile Store • Rahim Yar Khan</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Find Your <span className="gradient-text-gold">Dream Phone</span> With Genuine Guarantee.
          </h1>

          {/* Description */}
          <p className="hero-subtitle">
            Discover brand new sealed smartphones, certified pre-owned iPhones & Samsungs with PTA verification, and original accessories at unbeatable Rahim Yar Khan prices.
          </p>

          {/* Search Box in Hero */}
          <form onSubmit={handleSearch} className="hero-search-form">
            <div className="hero-search-input-group">
              <Search className="hero-search-icon" size={20} />
              <input
                type="text"
                placeholder="Search iPhone 15 Pro, S24 Ultra, A55, AirPods..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="hero-search-input"
              />
              <button type="submit" className="hero-search-btn">
                Search Shop <ArrowRight size={16} />
              </button>
            </div>
            <div className="popular-tags">
              <span>Popular:</span>
              <button type="button" onClick={() => onSearchSubmit('iPhone')}>iPhone 15</button>
              <button type="button" onClick={() => onSearchSubmit('Samsung')}>Samsung S24</button>
              <button type="button" onClick={() => onSearchSubmit('Redmi')}>Redmi Note 13</button>
              <button type="button" onClick={() => onSearchSubmit('Used')}>Pre-owned 10/10</button>
            </div>
          </form>

          {/* Primary CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#/shop" className="btn-hero-primary">
              <Smartphone size={18} /> Explore Phone Catalog
            </a>
            <button onClick={() => handleWhatsApp()} className="btn-hero-whatsapp">
              <MessageCircle size={18} /> WhatsApp Inquiry ({WHATSAPP_DISPLAY})
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>Official PTA Approved</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>7-Day Checking Warranty</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>Best Trade-in Exchange Rate</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Overlapping Floating Visual Cards */}
        <div className="hero-visual-card-stack">
          {/* Main Showcase Glass Card */}
          <div className="glass-showcase-card">
            <div className="showcase-card-header">
              <span className="live-pulse-badge">
                <span className="dot"></span> LIVE STOCK AT DHARI SANGHI
              </span>
              <span className="rating-tag">
                <Star size={14} className="fill-amber-400 text-amber-400" /> 4.9 (500+ Reviews)
              </span>
            </div>

            <div className="showcase-img-container">
              <img
                src="/assets/phones-studio.png"
                alt="Kashmir Mobile Shop Latest Phone Showcase"
                className="showcase-phone-img"
              />
            </div>

            <div className="showcase-card-body">
              <h3>Featured iPhone & Samsung Collections</h3>
              <p>Special deal discounts available for walk-in & WhatsApp buyers today!</p>
              <div className="showcase-footer-action">
                <span className="price-hint">Starting from Rs. 45,000</span>
                <button onClick={() => handleWhatsApp("Hi! What are today's special deals at Kashmir Mobile?")} className="btn-showcase-ask">
                  Ask Today’s Price ↗
                </button>
              </div>
            </div>
          </div>

          {/* Floating Glass Badge 1 - PTA Approved */}
          <div className="floating-glass-badge badge-top-right">
            <div className="badge-icon-bg icon-emerald">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="badge-title">PTA Verified Stock</div>
              <div className="badge-sub">100% Tax Paid & Official</div>
            </div>
          </div>

          {/* Floating Glass Badge 2 - Trade-in Calculator */}
          <div className="floating-glass-badge badge-bottom-left" onClick={() => window.location.hash = '#/sell-phone'}>
            <div className="badge-icon-bg icon-amber">
              <Zap size={20} />
            </div>
            <div>
              <div className="badge-title">Exchange / Trade-in Old Phone</div>
              <div className="badge-sub">Click for Instant Valuation →</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Strip */}
      <div className="hero-stats-strip">
        <div className="wrap stats-grid">
          <div className="stat-card">
            <span className="stat-number">5,000+</span>
            <span className="stat-label">Happy Mobile Customers</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Original & Verified Guarantee</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">#1 Store</span>
            <span className="stat-label">In Dhari Sanghi, Rahim Yar Khan</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0309 2585126</span>
            <span className="stat-label">Instant WhatsApp Helpline</span>
          </div>
        </div>
      </div>
    </section>
  );
};
