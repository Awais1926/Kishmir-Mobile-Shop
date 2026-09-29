import React, { useState } from 'react';
import { SlidersHorizontal, ArrowLeftRight, Check, X, ShieldCheck, MessageCircle } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';
import { Product } from '../types';

export const CompareTool: React.FC = () => {
  const [prod1Id, setProd1Id] = useState(PRODUCTS[0].id);
  const [prod2Id, setProd2Id] = useState(PRODUCTS[1].id);

  const prod1 = PRODUCTS.find((p) => p.id === prod1Id) || PRODUCTS[0];
  const prod2 = PRODUCTS.find((p) => p.id === prod2Id) || PRODUCTS[1];

  const handleWhatsAppCompare = (prod: Product) => {
    const msg = `Hi Kashmir Mobile! I compared ${prod1.name} and ${prod2.name} on your site, and I am interested in ${prod.name} (${prod.priceDisplay}). Is it available at your Dhari Sanghi store?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="compare-tool-container">
      <div className="compare-header text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/20">
          <ArrowLeftRight size={14} /> Side-by-Side Comparison
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">Compare Mobile Phones</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm mt-1">
          Select two smartphones to compare specifications, prices, PTA status, and features before making your decision.
        </p>
      </div>

      {/* Selectors Row */}
      <div className="compare-selects-grid">
        <div className="compare-select-card">
          <label>Select Device 1:</label>
          <select value={prod1Id} onChange={(e) => setProd1Id(e.target.value)}>
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.brand} {p.name} ({p.priceDisplay})
              </option>
            ))}
          </select>
        </div>

        <div className="compare-vs-badge">VS</div>

        <div className="compare-select-card">
          <label>Select Device 2:</label>
          <select value={prod2Id} onChange={(e) => setProd2Id(e.target.value)}>
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.brand} {p.name} ({p.priceDisplay})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="compare-table-wrapper">
        <table className="compare-matrix-table">
          <thead>
            <tr>
              <th className="feature-col">Specification</th>
              <th className="device-col">
                <img src={prod1.image} alt={prod1.name} className="compare-thumb" />
                <h3>{prod1.name}</h3>
                <div className="compare-price">{prod1.priceDisplay}</div>
                <button onClick={() => handleWhatsAppCompare(prod1)} className="btn-table-wa">
                  <MessageCircle size={14} /> Ask Price
                </button>
              </th>
              <th className="device-col">
                <img src={prod2.image} alt={prod2.name} className="compare-thumb" />
                <h3>{prod2.name}</h3>
                <div className="compare-price">{prod2.priceDisplay}</div>
                <button onClick={() => handleWhatsAppCompare(prod2)} className="btn-table-wa">
                  <MessageCircle size={14} /> Ask Price
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="feature-title">Brand & Model</td>
              <td>{prod1.brand}</td>
              <td>{prod2.brand}</td>
            </tr>
            <tr>
              <td className="feature-title">Category & Condition</td>
              <td>{prod1.category === 'new' ? 'Brand New Sealed' : prod1.condition}</td>
              <td>{prod2.category === 'new' ? 'Brand New Sealed' : prod2.condition}</td>
            </tr>
            <tr>
              <td className="feature-title">PTA Approval Status</td>
              <td>
                <span className="badge-table pta">{prod1.ptaStatus}</span>
              </td>
              <td>
                <span className="badge-table pta">{prod2.ptaStatus}</span>
              </td>
            </tr>
            <tr>
              <td className="feature-title">Storage / RAM</td>
              <td>{prod1.storage || 'Standard'}</td>
              <td>{prod2.storage || 'Standard'}</td>
            </tr>
            <tr>
              <td className="feature-title">Customer Rating</td>
              <td>⭐ {prod1.rating} / 5 ({prod1.reviewCount})</td>
              <td>⭐ {prod2.rating} / 5 ({prod2.reviewCount})</td>
            </tr>
            {/* Specs loop */}
            {prod1.specs.map((spec, i) => {
              const spec2 = prod2.specs.find((s) => s.label.toLowerCase() === spec.label.toLowerCase());
              return (
                <tr key={i}>
                  <td className="feature-title">{spec.label}</td>
                  <td>{spec.value}</td>
                  <td>{spec2 ? spec2.value : 'Ask shop for specs'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
