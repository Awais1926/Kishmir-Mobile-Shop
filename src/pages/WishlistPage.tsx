import React from 'react';
import { Heart, ArrowLeft, Smartphone, ShoppingBag } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface WishlistPageProps {
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({
  wishlistIds,
  onToggleWishlist,
  onQuickView
}) => {
  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="wrap section-spacing">
      <div className="mb-6">
        <a href="#/shop" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400">
          <ArrowLeft size={16} /> Back to Catalog
        </a>
      </div>

      <div className="page-head text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-3 border border-red-500/20">
          <Heart size={14} fill="#ef4444" /> Saved Devices
        </div>
        <h1 className="page-title">Your Wishlist ({wishlistedProducts.length})</h1>
        <p className="page-subtitle max-w-lg mx-auto">
          Here are your saved mobile phones and accessories for quick comparison and WhatsApp inquiry.
        </p>
      </div>

      {wishlistedProducts.length > 0 ? (
        <div className="products-grid-4">
          {wishlistedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={true}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        <div className="empty-shop-state text-center py-16">
          <Heart size={48} className="text-slate-600 mb-3 mx-auto" />
          <h3 className="text-xl font-bold text-white mb-2">Your Wishlist is Empty</h3>
          <p className="text-slate-400 mb-6 text-sm">
            You haven't saved any mobile phones yet. Browse our catalog and click the heart icon on any device to save it.
          </p>
          <a href="#/shop" className="btn-hero-primary inline-flex items-center gap-2">
            <ShoppingBag size={18} /> Browse Mobile Inventory
          </a>
        </div>
      )}
    </div>
  );
};
