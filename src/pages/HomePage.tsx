import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  ShieldCheck, 
  Award, 
  Clock, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  ArrowRight,
  TrendingUp,
  Zap,
  CheckCircle2,
  MapPin,
  Flame
} from 'lucide-react';
import { HeroVideo } from '../components/HeroVideo';
import { ProductCard } from '../components/ProductCard';
import { TradeInCalculator } from '../components/TradeInCalculator';
import { PRODUCTS, REVIEWS, FAQS, WHATSAPP_NUMBER, WHATSAPP_DISPLAY, SHOP_LOCATION } from '../data/products';
import { Product, ProductCategory } from '../types';

interface HomePageProps {
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onSearchSubmit: (query: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onSearchSubmit
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const featuredList = filteredProducts.slice(0, 8);
  const hotDealsList = PRODUCTS.filter((p) => p.hotDeal).slice(0, 4);

  const handleWhatsApp = (text?: string) => {
    const msg = text || "Hi Kashmir Mobile Shop! I'm interested in buying a phone. Please send today's special deals.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  const brandsList = [
    { name: 'Apple', logo: ' Apple iPhone', color: 'from-slate-700 to-slate-900' },
    { name: 'Samsung', logo: 'Samsung Galaxy', color: 'from-blue-900 to-indigo-950' },
    { name: 'Xiaomi', logo: 'Xiaomi / Redmi', color: 'from-orange-800 to-amber-950' },
    { name: 'Infinix', logo: 'Infinix Note', color: 'from-emerald-900 to-teal-950' },
    { name: 'Tecno', logo: 'Tecno Camon', color: 'from-cyan-900 to-blue-950' },
    { name: 'Vivo', logo: 'Vivo Series', color: 'from-purple-900 to-indigo-950' },
  ];

  return (
    <div className="home-page-wrapper">
      {/* Hero Section with Video Overlay */}
      <HeroVideo onSearchSubmit={onSearchSubmit} />

      {/* Flash Deals / Hot Stock Bar */}
      {hotDealsList.length > 0 && (
        <section className="hot-deals-section wrap section-spacing">
          <div className="section-head flex-between">
            <div>
              <div className="eyebrow flex items-center gap-1 text-amber-400">
                <Flame size={16} /> Limited Time Offers
              </div>
              <h2 className="section-title">Today’s Special Hot Deals</h2>
            </div>
            <a href="#/shop" className="link-arrow">
              View All Deals <ArrowRight size={16} />
            </a>
          </div>

          <div className="products-grid-4">
            {hotDealsList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        </section>
      )}

      {/* Brand Grid Showcase */}
      <section className="brands-showcase-section">
        <div className="wrap">
          <div className="text-center mb-8">
            <span className="eyebrow">Top Smartphone Brands</span>
            <h2 className="section-title">Browse By Official Brand</h2>
          </div>

          <div className="brands-cards-grid">
            {brandsList.map((brand) => (
              <a
                key={brand.name}
                href={`#/shop?brand=${brand.name}`}
                className="brand-tile"
              >
                <div className="brand-tile-content">
                  <span className="brand-tile-name">{brand.logo}</span>
                  <span className="brand-tile-sub">Browse catalog →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards Showcase */}
      <section className="categories-section wrap section-spacing">
        <div className="section-head text-center">
          <span className="eyebrow">Shop By Category</span>
          <h2 className="section-title">Find Your Perfect Smartphone</h2>
        </div>

        <div className="category-cards-grid">
          <a href="#/shop/new" className="category-big-card card-new">
            <div className="cat-card-overlay"></div>
            <div className="cat-card-content">
              <span className="cat-badge">100% Sealed</span>
              <h3>Brand New Smartphones</h3>
              <p>Official 1-Year PTA Warranty devices from Apple, Samsung, Xiaomi, Infinix & Tecno.</p>
              <span className="cat-btn">Explore New Phones →</span>
            </div>
          </a>

          <a href="#/shop/used" className="category-big-card card-used">
            <div className="cat-card-overlay"></div>
            <div className="cat-card-content">
              <span className="cat-badge badge-amber">Certified Clean</span>
              <h3>Pre-Owned & Used Phones</h3>
              <p>10/10 & 9.5/10 mint condition iPhones & Samsungs with 7-Day Shop Checking Warranty.</p>
              <span className="cat-btn">Browse Used Inventory →</span>
            </div>
          </a>

          <a href="#/accessories" className="category-big-card card-acc">
            <div className="cat-card-overlay"></div>
            <div className="cat-card-content">
              <span className="cat-badge badge-emerald">Original Accessories</span>
              <h3>AirPods, Chargers & PowerBanks</h3>
              <p>Apple AirPods, 45W Samsung Chargers, Anker PowerBanks, & Heavy-duty Armor cases.</p>
              <span className="cat-btn">Shop Accessories →</span>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Products Showcase with Category Tabs */}
      <section className="featured-catalog-section wrap section-spacing">
        <div className="section-head flex-between">
          <div>
            <span className="eyebrow">Dhari Sanghi Shop Catalog</span>
            <h2 className="section-title">Featured Inventory</h2>
          </div>

          {/* Filter Pills */}
          <div className="category-filter-tabs">
            {(['all', 'new', 'used', 'accessories'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tab-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? 'All Products' : cat === 'new' ? 'New Phones' : cat === 'used' ? 'Used Phones' : 'Accessories'}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid-4">
          {featuredList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#/shop" className="btn-explore-full">
            Explore All Products Catalog ({PRODUCTS.length}+ Items) <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Interactive Trade-in / Sell Section */}
      <section className="trade-in-section wrap section-spacing">
        <TradeInCalculator />
      </section>

      {/* Why Choose Kashmir Mobile Shop */}
      <section className="why-choose-section">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Store Guarantees</span>
            <h2 className="section-title">Why Buy From Kashmir Mobile Shop?</h2>
          </div>

          <div className="guarantees-grid">
            <div className="guarantee-card">
              <div className="guarantee-icon"><ShieldCheck size={28} /></div>
              <h3>Official PTA Approved</h3>
              <p>We guarantee 100% valid PTA status certificates on all official phones sold at our shop.</p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon"><Award size={28} /></div>
              <h3>7-Day Checking Warranty</h3>
              <p>Every pre-owned phone undergoes 30-point hardware testing and comes with a 7-day store warranty.</p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon"><Zap size={28} /></div>
              <h3>Best Trade-in Values</h3>
              <p>Get the highest exchange quote for your old smartphone in Dhari Sanghi & Rahim Yar Khan.</p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon"><MessageCircle size={28} /></div>
              <h3>Direct WhatsApp Helpline</h3>
              <p>Connect with our owner directly at 0309 2585126 for instant price quotes and stock verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Testimonials */}
      <section className="reviews-section wrap section-spacing">
        <div className="section-head text-center">
          <span className="eyebrow">Customer Feedback</span>
          <h2 className="section-title">Trusted By Rahim Yar Khan Buyers</h2>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <strong>{review.name}</strong>
                <span>{review.location} • <CheckCircle2 size={12} className="inline text-emerald-400" /> Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section wrap section-spacing">
        <div className="section-head text-center">
          <span className="eyebrow">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-accordion-container">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="cta-banner-section wrap section-spacing">
        <div className="cta-banner-card">
          <div className="cta-content">
            <h2>Ready to Upgrade Your Phone?</h2>
            <p>Visit our shop in Dhari Sanghi, Rahim Yar Khan or text us on WhatsApp for instant deals.</p>
            <div className="cta-buttons">
              <button onClick={() => handleWhatsApp()} className="btn-cta-wa">
                <MessageCircle size={18} /> Chat on WhatsApp ({WHATSAPP_DISPLAY})
              </button>
              <a href="#/contact" className="btn-cta-contact">
                <MapPin size={18} /> View Shop Location
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
