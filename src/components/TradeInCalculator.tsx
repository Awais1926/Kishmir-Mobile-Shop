import React, { useState } from 'react';
import { RefreshCw, Calculator, Sparkles, MessageCircle, ShieldCheck, Check } from 'lucide-react';
import { TRADE_IN_OPTIONS, WHATSAPP_NUMBER } from '../data/products';

export const TradeInCalculator: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState(TRADE_IN_OPTIONS[0].brand);
  const [selectedModel, setSelectedModel] = useState(TRADE_IN_OPTIONS[0].models[0].name);
  const [condition, setCondition] = useState('mint'); // 'mint' | 'clean' | 'fair'
  const [hasBox, setHasBox] = useState(true);
  const [batteryHealth, setBatteryHealth] = useState('above85'); // 'above85' | 'below85'

  const currentBrandData = TRADE_IN_OPTIONS.find((b) => b.brand === selectedBrand) || TRADE_IN_OPTIONS[0];
  const currentModelData = currentBrandData.models.find((m) => m.name === selectedModel) || currentBrandData.models[0];

  const calculateEstimate = () => {
    let val = currentModelData.baseValue;
    if (condition === 'clean') val *= 0.88;
    if (condition === 'fair') val *= 0.75;
    if (!hasBox) val -= 4000;
    if (batteryHealth === 'below85' && selectedBrand === 'Apple') val -= 8000;
    return Math.max(val, 10000);
  };

  const estimatedValue = calculateEstimate();

  const handleWhatsAppTradeIn = () => {
    const msg = `Hi Kashmir Mobile Shop! I want to trade-in / sell my old phone.
Model: ${selectedBrand} ${selectedModel}
Condition: ${condition === 'mint' ? '10/10 Mint' : condition === 'clean' ? '9/10 Clean' : '8/10 Fair'}
Original Box: ${hasBox ? 'Yes Included' : 'No Box'}
Estimated Website Offer: Rs. ${estimatedValue.toLocaleString()}

I want to check your final exchange deal for a new phone at your Dhari Sanghi shop!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="trade-in-card">
      <div className="trade-in-header">
        <div className="trade-in-badge">
          <Calculator size={16} className="text-amber-400" /> Instant Exchange Valuation
        </div>
        <h2>Sell or Trade-In Your Old Mobile Phone</h2>
        <p>Get the highest trade-in value in Rahim Yar Khan. Upgrade to your new phone with ease!</p>
      </div>

      <div className="trade-in-grid">
        {/* Left Inputs Form */}
        <div className="trade-in-inputs">
          {/* Brand Selection */}
          <div className="input-group">
            <label>1. Select Phone Brand</label>
            <div className="brand-chips-grid">
              {TRADE_IN_OPTIONS.map((opt) => (
                <button
                  key={opt.brand}
                  type="button"
                  className={`brand-chip ${selectedBrand === opt.brand ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedBrand(opt.brand);
                    setSelectedModel(opt.models[0].name);
                  }}
                >
                  {opt.brand}
                </button>
              ))}
            </div>
          </div>

          {/* Model Selection */}
          <div className="input-group">
            <label>2. Select Model</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="trade-in-select"
            >
              {currentBrandData.models.map((m) => (
                <option key={m.name} value={m.name}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Physical Condition */}
          <div className="input-group">
            <label>3. Physical Body & Screen Condition</label>
            <div className="condition-radios">
              <button
                type="button"
                className={`cond-radio ${condition === 'mint' ? 'selected' : ''}`}
                onClick={() => setCondition('mint')}
              >
                <strong>10/10 Scratchless</strong>
                <small>Like new, no dents or scratches</small>
              </button>

              <button
                type="button"
                className={`cond-radio ${condition === 'clean' ? 'selected' : ''}`}
                onClick={() => setCondition('clean')}
              >
                <strong>9/10 Clean Used</strong>
                <small>Minor frame wear, clean screen</small>
              </button>

              <button
                type="button"
                className={`cond-radio ${condition === 'fair' ? 'selected' : ''}`}
                onClick={() => setCondition('fair')}
              >
                <strong>8/10 Fair Used</strong>
                <small>Visible signs of usage</small>
              </button>
            </div>
          </div>

          {/* Accessories Checkboxes */}
          <div className="input-group checkbox-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={hasBox}
                onChange={(e) => setHasBox(e.target.checked)}
              />
              <span>Original Box Available (+Rs. 4,000 value)</span>
            </label>

            {selectedBrand === 'Apple' && (
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={batteryHealth === 'above85'}
                  onChange={(e) => setBatteryHealth(e.target.checked ? 'above85' : 'below85')}
                />
                <span>Battery Health Above 85%</span>
              </label>
            )}
          </div>
        </div>

        {/* Right Estimate Output Box */}
        <div className="trade-in-output-box">
          <div className="output-inner">
            <span className="estimate-label">Estimated Trade-in Offer</span>
            <div className="estimate-price-big">
              Rs. {estimatedValue.toLocaleString()}
            </div>
            <p className="estimate-note">
              Calculated for <strong>{selectedBrand} {selectedModel}</strong> based on current Dhari Sanghi mobile market rates.
            </p>

            <ul className="trade-benefits">
              <li><Check size={14} className="text-emerald-400" /> Instant spot cash or direct exchange discount</li>
              <li><Check size={14} className="text-emerald-400" /> Free data transfer from your old phone</li>
              <li><Check size={14} className="text-emerald-400" /> Transparent 30-point store inspection</li>
            </ul>

            <button onClick={handleWhatsAppTradeIn} className="btn-trade-wa">
              <MessageCircle size={18} /> Lock Deal on WhatsApp ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
