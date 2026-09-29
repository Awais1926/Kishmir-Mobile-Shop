import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Star, 
  MessageCircle, 
  Check, 
  ArrowLeft, 
  Heart, 
  Share2, 
  CheckCircle2, 
  Award, 
  Truck, 
  RotateCcw,
  Smartphone,
  PhoneCall
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, WHATSAPP_NUMBER, WHATSAPP_DISPLAY, SHOP_LOCATION } from '../data/products';
import { Product } from '../types';

interface ProductDetailPageProps {
  productId: string;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  wishlistIds,
  onToggleWishlist,
  onQuickView
}) => {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const [copiedLink, setCopiedLink] = useState(false);

  const isWishlisted = wishlistIds.includes(product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category)
  ).slice(0, 4);

  const handleWhatsAppOrder = () => {
    const productUrl = window.location.href;
    const message = `Hi Kashmir Mobile Shop! I'm interested in buying/inquiring about:
*Device:* ${product.name}
*Storage/Variant:* ${product.storage || 'Default'}
*Selected Color:* ${selectedColor || 'Any'}
*Condition:* ${product.condition}
*PTA Status:* ${product.ptaStatus}
*Estimated Price:* ${product.priceDisplay}

Is this device currently in stock at your Dhari Sanghi shop?
Product link: ${productUrl}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="product-detail-page wrap section-spacing">
      {/* Back Button */}
      <div className="mb-6">
        <a href="#/shop" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft size={16} /> Back to Catalog
        </a>
      </div>

      {/* Main Detail Grid */}
      <div className="detail-main-grid">
        {/* Left Column Image Showcase */}
        <div className="detail-media-column">
          <div className="detail-main-img-box">
            <img src={product.image} alt={product.name} className="detail-img" />
            <span className={`detail-category-badge badge-${product.category}`}>
              {product.category === 'new' ? '✨ Brand New' : product.category === 'used' ? '📱 Certified Used' : '🎧 Accessory'}
            </span>
          </div>

          <div className="detail-trust-badges">
            <div className="trust-card-item">
              <ShieldCheck size={20} className="text-emerald-400" />
              <div>
                <strong>PTA Verification</strong>
                <p>{product.ptaStatus}</p>
              </div>
            </div>
            <div className="trust-card-item">
              <Award size={20} className="text-amber-400" />
              <div>
                <strong>Store Warranty</strong>
                <p>{product.category === 'used' ? '7-Day Shop Checking Warranty' : '1 Year Official Brand Warranty'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Product Infos */}
        <div className="detail-info-column">
          <div className="flex-between items-center mb-2">
            <span className="brand-pill">{product.brand}</span>
            <div className="flex gap-2">
              <button
                onClick={handleShare}
                className="action-circle-btn"
                title="Share product link"
              >
                <Share2 size={16} />
              </button>
              <button
                onClick={() => onToggleWishlist(product)}
                className={`action-circle-btn ${isWishlisted ? 'active' : ''}`}
                title="Add to Wishlist"
              >
                <Heart size={16} fill={isWishlisted ? '#ef4444' : 'none'} className={isWishlisted ? 'text-red-500' : ''} />
              </button>
            </div>
          </div>

          <h1 className="detail-title">{product.name}</h1>

          <div className="detail-rating-row">
            <div className="stars flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="rating-num">{product.rating} ({product.reviewCount} customer reviews)</span>
            <span className="stock-pill flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={14} /> In Stock at Dhari Sanghi
            </span>
          </div>

          <div className="detail-price-box">
            <span className="price-tag">{product.priceDisplay}</span>
            <span className="price-subtitle">Price estimate • Final rate confirmed on WhatsApp</span>
          </div>

          <p className="detail-description">{product.desc}</p>

          {/* Color Selector */}
          {product.colors.length > 0 && (
            <div className="color-selector-group">
              <label>Select Available Color:</label>
              <div className="color-buttons">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && <Check size={14} />}
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Storage Specs Badges */}
          {product.storage && (
            <div className="variant-group">
              <label>Storage / Memory Variant:</label>
              <div className="variant-badge">{product.storage}</div>
            </div>
          )}

          {/* WhatsApp Order Action */}
          <div className="detail-actions-box">
            <button onClick={handleWhatsAppOrder} className="btn-detail-wa-primary">
              <MessageCircle size={20} /> Inquire & Buy on WhatsApp ↗
            </button>

            <a href={`tel:${WHATSAPP_NUMBER}`} className="btn-detail-call">
              <PhoneCall size={18} /> Call Store: {WHATSAPP_DISPLAY}
            </a>
          </div>

          {copiedLink && (
            <div className="alert-toast">Product link copied to clipboard!</div>
          )}

          {/* Specifications Table */}
          <div className="detail-specs-table-container">
            <h3>Technical Specifications</h3>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td>PTA Status</td>
                  <td>{product.ptaStatus}</td>
                </tr>
                <tr>
                  <td>Condition</td>
                  <td>{product.condition}</td>
                </tr>
                {product.specs.map((spec, idx) => (
                  <tr key={idx}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section section-spacing">
          <h2 className="section-title mb-6">Similar Mobile Devices You Might Like</h2>
          <div className="products-grid-4">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                isWishlisted={wishlistIds.includes(p.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
