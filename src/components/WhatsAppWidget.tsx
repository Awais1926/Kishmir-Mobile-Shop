import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, MapPin, CheckCheck } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, SHOP_NAME } from '../data/products';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (text?: string) => {
    const message = text || customMsg || `Hi ${SHOP_NAME}, I'd like to ask about available mobile phones & current prices.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  const quickQuestions = [
    "👋 Is iPhone 15 Pro Max available in stock?",
    "💰 What is the trade-in rate for my old phone?",
    "📍 Where exactly is your shop in Dhari Sanghi?",
    "✨ Do you have official PTA approved Samsung phones?"
  ];

  return (
    <div className="whatsapp-floating-widget">
      {/* Popover Box */}
      {isOpen && (
        <div className="wa-popover-box">
          {/* Header */}
          <div className="wa-popover-header">
            <div className="wa-avatar-box">
              <div className="wa-avatar-icon">K</div>
              <span className="wa-online-dot"></span>
            </div>
            <div className="wa-header-text">
              <h4>{SHOP_NAME}</h4>
              <p>Typically replies in under 5 minutes</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="wa-close-btn" aria-label="Close widget">
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="wa-popover-body">
            <div className="wa-chat-bubble wa-bubble-incoming">
              <p>Assalam-o-Alaikum! Welcome to Kashmir Mobile Shop Dhari Sanghi. How can we help you find your phone today?</p>
              <span className="bubble-time">Just now <CheckCheck size={12} className="inline text-emerald-400" /></span>
            </div>

            <div className="quick-chips-container">
              <span className="chips-title">Tap to send quick inquiry:</span>
              {quickQuestions.map((q, idx) => (
                <button key={idx} onClick={() => handleSend(q)} className="wa-quick-chip">
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="wa-popover-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="wa-footer-input"
            />
            <button onClick={() => handleSend()} className="wa-send-btn">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="wa-floating-toggle-btn"
        aria-label="Chat on WhatsApp"
        title={`Chat on WhatsApp (${WHATSAPP_DISPLAY})`}
      >
        <span className="wa-pulse-ring"></span>
        <MessageCircle size={28} />
        <span className="wa-btn-tooltip">Chat with store</span>
      </button>
    </div>
  );
};
