import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { SearchModal } from './components/SearchModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SellPage } from './pages/SellPage';
import { ComparePage } from './pages/ComparePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WishlistPage } from './pages/WishlistPage';

import { Product, ProductCategory } from './types';
import { PRODUCTS } from './data/products';

function useHashPath() {
  const [path, setPath] = useState(() => window.location.hash.slice(1) || '/');

  useEffect(() => {
    const onChange = () => {
      setPath(window.location.hash.slice(1) || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return path;
}

export function App() {
  const path = useHashPath();

  // Wishlist state persisted in localStorage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('Kashmir_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('Kashmir_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // ignore storage error
    }
  }, [wishlistIds]);

  const toggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  // Modal states
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Handle hero / global search submit
  const handleSearchSubmit = (query: string) => {
    setGlobalSearchQuery(query);
    window.location.hash = `#/shop?q=${encodeURIComponent(query)}`;
  };

  // Route Resolver
  const renderRoute = () => {
    if (path.startsWith('/product/')) {
      const id = path.split('/')[2];
      return (
        <ProductDetailPage
          productId={id}
          wishlistIds={wishlistIds}
          onToggleWishlist={toggleWishlist}
          onQuickView={setQuickViewProduct}
        />
      );
    }

    if (path.startsWith('/shop')) {
      const parts = path.split('/');
      let category: ProductCategory | 'all' = 'all';
      if (parts[2] === 'new') category = 'new';
      if (parts[2] === 'used') category = 'used';
      if (parts[2] === 'accessories') category = 'accessories';

      // Parse brand or query params from URL hash if any
      const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
      const brandParam = urlParams.get('brand') || 'all';
      const qParam = urlParams.get('q') || globalSearchQuery;

      return (
        <ShopPage
          initialCategory={category}
          initialBrand={brandParam}
          initialQuery={qParam}
          wishlistIds={wishlistIds}
          onToggleWishlist={toggleWishlist}
          onQuickView={setQuickViewProduct}
        />
      );
    }

    if (path === '/accessories') {
      return (
        <ShopPage
          initialCategory="accessories"
          wishlistIds={wishlistIds}
          onToggleWishlist={toggleWishlist}
          onQuickView={setQuickViewProduct}
        />
      );
    }

    if (path === '/sell-phone') {
      return <SellPage />;
    }

    if (path === '/compare') {
      return <ComparePage />;
    }

    if (path === '/about') {
      return <AboutPage />;
    }

    if (path === '/contact') {
      return <ContactPage />;
    }

    if (path === '/wishlist') {
      return (
        <WishlistPage
          wishlistIds={wishlistIds}
          onToggleWishlist={toggleWishlist}
          onQuickView={setQuickViewProduct}
        />
      );
    }

    // Default Home
    return (
      <HomePage
        wishlistIds={wishlistIds}
        onToggleWishlist={toggleWishlist}
        onQuickView={setQuickViewProduct}
        onSearchSubmit={handleSearchSubmit}
      />
    );
  };

  return (
    <div className="app-layout">
      {/* Top Navbar */}
      <Navbar
        currentPath={path}
        wishlistCount={wishlistIds.length}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Route View */}
      <main className="main-content-view">{renderRoute()}</main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Quick View Product Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => {
          window.location.hash = `#/product/${product.id}`;
        }}
      />
    </div>
  );
}

export default App;
