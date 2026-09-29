import React from 'react';
import { 
  Heart, 
  Eye, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Smartphone, 
  CheckCircle,
  Tag
} from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data/products';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView
}) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const productUrl = `${window.location.origin}/#/product/${product.id}`;
    const message = `Hi Kashmir Mobile Shop! I'm interested in buying/inquiring about *${product.name}* (${product.storage || 'Variant'}, ${product.ptaStatus}). 
Price: ${product.priceDisplay}. 
Is it currently available at your Dhari Sanghi shop? 
Product link: ${productUrl}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'new': return 'badge-new';
      case 'used': return 'badge-used';
      default: return 'badge-accessory';
    }
  };

  return (
    <article className="product-card-container">
      {/* Top Media & Badges Box */}
      <div className="card-media-box" onClick={() => window.location.hash = `#/product/${product.id}`}>
        {/* Badges */}
        <div className="card-top-badges">
          <span className={`card-badge ${getCategoryBadgeClass(product.category)}`}>
            {product.category === 'new' ? '✨ Brand New' : product.category === 'used' ? '📱 Certified Used' : '🎧 Accessory'}
          </span>
          {product.hotDeal && (
            <span className="card-badge badge-hot">
              🔥 Hot Deal
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`card-wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          title="Save to Wishlist"
        >
          <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} className={isWishlisted ? 'text-red-500' : 'text-slate-300'} />
        </button>

        {/* Image Preview */}
        <div className="card-img-wrapper">
          <img
            src={product.image}
            alt={`${product.name} at Kashmir Mobile Shop`}
            loading="lazy"
            onError={(e) => {
              // Fallback image if remote url fails
              (e.target as HTMLImageElement).src = '/assets/phones-studio.png';
            }}
            className="card-main-img"
          />
        </div>

        {/* Hover Quick Actions */}
        <div className="card-hover-actions">
          <button 
            type="button" 
            className="btn-card-quickview"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
          >
            <Eye size={14} /> Quick View
          </button>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="card-content-body">
        {/* Brand & PTA Tag */}
        <div className="card-meta-row">
          <span className="brand-pill">{product.brand}</span>
          <span className="pta-status-text">
            <ShieldCheck size={13} className="text-emerald-400 inline-icon" />
            {product.ptaStatus}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="card-product-title">
          <a href={`#/product/${product.id}`}>{product.name}</a>
        </h3>

        {/* Condition & Storage */}
        <div className="card-specs-row">
          {product.storage && <span className="spec-chip">{product.storage}</span>}
          <span className="spec-chip condition-chip">{product.condition}</span>
        </div>

        {/* Short Description */}
        <p className="card-short-desc">{product.desc}</p>

        {/* Price & Rating Row */}
        <div className="card-price-row">
          <div>
            <span className="price-label">Estimated Price</span>
            <div className="card-price-value">{product.priceDisplay}</div>
          </div>
          <div className="card-rating-box">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <small>({product.reviewCount})</small>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-footer-buttons">
          <a href={`#/product/${product.id}`} className="btn-details-ghost">
            Details
          </a>
          <button 
            type="button"
            onClick={handleWhatsApp}
            className="btn-card-wa"
          >
            <MessageCircle size={15} /> WhatsApp Inquire
          </button>
        </div>
      </div>
    </article>
  );
};
