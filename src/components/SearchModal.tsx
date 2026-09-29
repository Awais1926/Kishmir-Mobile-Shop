import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Smartphone, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.brand.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS.slice(0, 5); // Default suggested items

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="search-modal-header">
          <Search size={20} className="text-emerald-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search phones, brands (iPhone, Samsung, Redmi, AirPods...)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-modal-input"
          />
          {query && (
            <button onClick={() => setQuery('')} className="clear-search-btn">
              <X size={16} />
            </button>
          )}
          <button onClick={onClose} className="close-search-modal-btn">
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="search-modal-results">
          <div className="results-label">
            {query.trim() ? `Search Results (${results.length})` : 'Popular & Trending Inventory'}
          </div>

          {results.length > 0 ? (
            <div className="search-results-list">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="search-result-item"
                  onClick={() => {
                    onClose();
                    onSelectProduct(product);
                  }}
                >
                  <img src={product.image} alt={product.name} className="search-item-thumb" />
                  <div className="search-item-info">
                    <h4>{product.name}</h4>
                    <p>{product.brand} • {product.ptaStatus} • {product.condition}</p>
                  </div>
                  <div className="search-item-price">
                    <span>{product.priceDisplay}</span>
                    <ArrowRight size={16} className="arrow-icon" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-search-results">
              <Smartphone size={32} className="text-slate-500 mb-2" />
              <p>No products found matching "{query}".</p>
              <small>Try searching for "iPhone", "Samsung", "Redmi" or "Used".</small>
            </div>
          )}
        </div>

        <div className="search-modal-footer">
          <span>Tip: Press ESC to close</span>
          <a
            href="#/shop"
            onClick={onClose}
            className="text-emerald-400 hover:underline text-xs flex items-center gap-1"
          >
            View all products catalog →
          </a>
        </div>
      </div>
    </div>
  );
};
