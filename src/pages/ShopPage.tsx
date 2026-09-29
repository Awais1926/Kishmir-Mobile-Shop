import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  SlidersHorizontal, 
  Grid, 
  List, 
  X, 
  RotateCcw, 
  ShieldCheck, 
  MessageCircle,
  Smartphone
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';
import { Product, ProductCategory, Brand, FilterState } from '../types';

interface ShopPageProps {
  initialCategory?: ProductCategory | 'all';
  initialBrand?: string;
  initialQuery?: string;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  initialCategory = 'all',
  initialBrand = 'all',
  initialQuery = '',
  wishlistIds,
  onToggleWishlist,
  onQuickView
}) => {
  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    brand: initialBrand as Brand | 'all',
    ptaStatus: 'all',
    condition: 'all',
    minPrice: 0,
    maxPrice: 600000,
    searchQuery: initialQuery,
    sortBy: 'featured'
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Update filters when props change
  React.useEffect(() => {
    if (initialCategory) setFilters((f) => ({ ...f, category: initialCategory }));
    if (initialBrand) setFilters((f) => ({ ...f, brand: initialBrand as Brand | 'all' }));
    if (initialQuery) setFilters((f) => ({ ...f, searchQuery: initialQuery }));
  }, [initialCategory, initialBrand, initialQuery]);

  const resetFilters = () => {
    setFilters({
      category: 'all',
      brand: 'all',
      ptaStatus: 'all',
      condition: 'all',
      minPrice: 0,
      maxPrice: 600000,
      searchQuery: '',
      sortBy: 'featured'
    });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category Filter
      if (filters.category !== 'all' && item.category !== filters.category) return false;
      // Brand Filter
      if (filters.brand !== 'all' && item.brand !== filters.brand) return false;
      // PTA Status Filter
      if (filters.ptaStatus !== 'all' && item.ptaStatus !== filters.ptaStatus) return false;
      // Condition Filter
      if (filters.condition !== 'all' && item.condition !== filters.condition) return false;
      // Price Range Filter
      if (item.priceEst < filters.minPrice || item.priceEst > filters.maxPrice) return false;
      // Search Query Filter
      if (
        filters.searchQuery.trim() &&
        !item.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !item.brand.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !item.desc.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.priceEst - b.priceEst;
      if (filters.sortBy === 'price-desc') return b.priceEst - a.priceEst;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [filters]);

  const brandsList: Brand[] = ['Apple', 'Samsung', 'Xiaomi', 'Infinix', 'Tecno', 'Vivo', 'OPPO', 'Realme', 'Google', 'Accessories'];

  return (
    <div className="shop-page-wrapper wrap section-spacing">
      {/* Page Header */}
      <div className="shop-page-header">
        <div className="eyebrow">Kashmir Inventory Catalog</div>
        <h1 className="page-title">
          {filters.category === 'all'
            ? 'All Products & Phones'
            : filters.category === 'new'
            ? 'Brand New Smartphones'
            : filters.category === 'used'
            ? 'Certified Pre-Owned Devices'
            : 'Mobile Accessories'}
        </h1>
        <p className="page-subtitle">
          Showing {filteredProducts.length} verified listings at Dhari Sanghi, Rahim Yar Khan. Contact us for today’s final prices.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="shop-layout-grid">
        {/* Left Sidebar Filter Panel */}
        <aside className={`shop-filter-sidebar ${mobileFilterOpen ? 'open-mobile' : ''}`}>
          <div className="filter-sidebar-head">
            <h3><SlidersHorizontal size={18} /> Filter Products</h3>
            <button onClick={resetFilters} className="reset-btn" title="Reset All Filters">
              <RotateCcw size={14} /> Reset
            </button>
            <button onClick={() => setMobileFilterOpen(false)} className="close-mobile-filter">
              <X size={18} />
            </button>
          </div>

          {/* Search Input */}
          <div className="filter-group">
            <label>Search Keyword</label>
            <div className="filter-search-input">
              <Search size={16} />
              <input
                type="text"
                placeholder="Model, storage, brand..."
                value={filters.searchQuery}
                onChange={(e) => setFilters((f) => ({ ...f, searchQuery: e.target.value }))}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <label>Category</label>
            <div className="filter-chips flex-col">
              {(['all', 'new', 'used', 'accessories'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-chip-btn ${filters.category === cat ? 'active' : ''}`}
                  onClick={() => setFilters((f) => ({ ...f, category: cat }))}
                >
                  {cat === 'all' ? 'All Products' : cat === 'new' ? '✨ Brand New' : cat === 'used' ? '📱 Certified Used' : '🎧 Accessories'}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="filter-group">
            <label>Brand</label>
            <select
              value={filters.brand}
              onChange={(e) => setFilters((f) => ({ ...f, brand: e.target.value as Brand | 'all' }))}
              className="filter-select"
            >
              <option value="all">All Brands</option>
              {brandsList.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* PTA Status Filter */}
          <div className="filter-group">
            <label>PTA Approval Status</label>
            <select
              value={filters.ptaStatus}
              onChange={(e) => setFilters((f) => ({ ...f, ptaStatus: e.target.value }))}
              className="filter-select"
            >
              <option value="all">All PTA Statuses</option>
              <option value="Official PTA Approved">Official PTA Approved</option>
              <option value="1 Year Official Warranty">1 Year Official Warranty</option>
              <option value="CPID Approved">CPID Approved</option>
              <option value="Non-PTA / JV">Non-PTA / JV</option>
            </select>
          </div>

          {/* Max Price Filter */}
          <div className="filter-group">
            <label>Max Price (PKR): Rs. {filters.maxPrice.toLocaleString()}</label>
            <input
              type="range"
              min="5000"
              max="600000"
              step="10000"
              value={filters.maxPrice}
              onChange={(e) => setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))}
              className="price-range-slider"
            />
          </div>
        </aside>

        {/* Right Product Grid Column */}
        <main className="shop-products-column">
          {/* Top Control Toolbar */}
          <div className="shop-controls-bar">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="btn-toggle-mobile-filter"
            >
              <Filter size={16} /> Filters
            </button>

            <div className="results-count">
              Showing <strong>{filteredProducts.length}</strong> devices
            </div>

            <div className="controls-right flex items-center gap-3">
              {/* Sort Selector */}
              <div className="sort-selector flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Sort By:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters((f) => ({ ...f, sortBy: e.target.value as any }))}
                  className="sort-dropdown"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="view-mode-buttons flex gap-1">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <Grid size={16} />
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid / Empty State */}
          {filteredProducts.length > 0 ? (
            <div className={viewMode === 'grid' ? 'products-grid-3' : 'products-list-view'}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlistIds.includes(product.id)}
                  onToggleWishlist={onToggleWishlist}
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          ) : (
            <div className="empty-shop-state">
              <Smartphone size={48} className="text-slate-600 mb-3" />
              <h3>No Mobile Products Found</h3>
              <p>No listings match your selected filters or search terms.</p>
              <button onClick={resetFilters} className="btn-reset-filters">
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
