import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Star, 
  MessageCircle, 
  Check, 
  ArrowRight, 
  Smartphone,
  Info
} from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data/products';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');

  const handleWhatsApp = () => {
    const productUrl = `${window.location.origin}/#/product/${product.id}`;
    const message = `Hi Kashmir Mobile Shop! I am interested in *${product.name}* (${product.storage || ''}, Color: ${selectedColor || 'Any'}).
Condition: ${product.condition} | PTA Status: ${product.ptaStatus}
Listed Price: ${product.priceDisplay}
Is this in stock at your Dhari Sanghi shop right now?
Link: ${productUrl}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-content-grid">
          {/* Left Column Image */}
          <div className="modal-media-col">
            <div className="modal-img-box">
              <img src={product.image} alt={product.name} />
              <span className="modal-badge">{product.category.toUpperCase()}</span>
            </div>
            <div className="modal-trust-note">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Verified inventory by Kashmir Mobile Shop</span>
            </div>
          </div>

          {/* Right Column Details */}
          <div className="modal-details-col">
            <div className="modal-brand-tag">{product.brand}</div>
            <h2 className="modal-product-title">{product.name}</h2>
            
            <div className="modal-price-rating">
              <span className="modal-price">{product.priceDisplay}</span>
              <div className="modal-rating">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <span>{product.rating} ({product.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="modal-specs-badges">
              <span className="spec-badge-item">PTA: {product.ptaStatus}</span>
              <span className="spec-badge-item">Condition: {product.condition}</span>
              {product.storage && <span className="spec-badge-item">Storage: {product.storage}</span>}
            </div>

            <p className="modal-desc">{product.desc}</p>

            {/* Colors Selection */}
            {product.colors.length > 0 && (
              <div className="modal-color-selector">
                <label className="selector-label">Available Colors:</label>
                <div className="color-options-flex">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`color-chip-btn ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor === color && <Check size={12} />}
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Key Specifications List */}
            <div className="modal-specs-list">
              <h4>Key Specifications:</h4>
              <ul>
                {product.specs.slice(0, 4).map((spec, index) => (
                  <li key={index}>
                    <strong>{spec.label}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="modal-actions-row">
              <button onClick={handleWhatsApp} className="btn-modal-wa">
                <MessageCircle size={18} /> Inquire on WhatsApp ↗
              </button>
              <a href={`#/product/${product.id}`} onClick={onClose} className="btn-modal-full">
                Full Page <ArrowRight size={16} />
              </a>
            </div>

            <div className="modal-disclaimer">
              <Info size={13} /> Prices and exact stock availability are subject to store confirmation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
