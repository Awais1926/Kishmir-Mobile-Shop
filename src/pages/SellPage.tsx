import React from 'react';
import { TradeInCalculator } from '../components/TradeInCalculator';

export const SellPage: React.FC = () => {
  return (
    <div className="wrap section-spacing">
      <div className="page-head text-center mb-8">
        <span className="eyebrow">Instant Phone Valuation</span>
        <h1 className="page-title">Trade-in or Sell Your Mobile Phone</h1>
        <p className="page-subtitle max-w-2xl mx-auto">
          Get top cash or exchange value for your used iPhone, Samsung, or Android phone at Kashmir Mobile Shop in Dhari Sanghi, Rahim Yar Khan.
        </p>
      </div>

      <TradeInCalculator />
    </div>
  );
};
