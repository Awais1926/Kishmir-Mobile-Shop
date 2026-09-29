import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, ExternalLink, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, SHOP_LOCATION, SHOP_HOURS } from '../data/products';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('buy');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = inquiryType === 'buy' ? 'Buying a Phone' : inquiryType === 'sell' ? 'Trading-in / Selling Old Phone' : 'Accessory / General Query';
    const text = `Hi Kashmir Mobile Shop!
*Name:* ${name || 'Customer'}
*Phone:* ${phone || 'Not provided'}
*Inquiry Type:* ${typeLabel}
*Message:* ${message || 'I would like to ask about your available stock and prices.'}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page-wrapper wrap section-spacing">
      <div className="page-head text-center mb-10">
        <span className="eyebrow">Get In Touch</span>
        <h1 className="page-title">Contact Kashmir Mobile Shop</h1>
        <p className="page-subtitle max-w-xl mx-auto">
          Visit our shop in Dhari Sanghi or send us a message directly via WhatsApp for fast responses on inventory and prices.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-info-card">
          <h2>Store Details</h2>
          <p className="mb-6 text-slate-300 text-sm">
            We are always happy to welcome you to our shop. Feel free to reach out via phone or WhatsApp anytime during working hours.
          </p>

          <div className="contact-details-list">
            <div className="contact-row">
              <div className="row-icon icon-emerald"><MapPin size={20} /></div>
              <div>
                <strong>Store Location</strong>
                <p>{SHOP_LOCATION}</p>
              </div>
            </div>

            <div className="contact-row">
              <div className="row-icon icon-cyan"><Phone size={20} /></div>
              <div>
                <strong>WhatsApp / Call Helpline</strong>
                <p className="text-emerald-400 font-bold text-lg">{WHATSAPP_DISPLAY}</p>
                <small className="text-slate-400">Available Monday to Sunday</small>
              </div>
            </div>

            <div className="contact-row">
              <div className="row-icon icon-amber"><Clock size={20} /></div>
              <div>
                <strong>Opening Hours</strong>
                <p>{SHOP_HOURS}</p>
              </div>
            </div>
          </div>

          <div className="map-button-box mt-8">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('Dhari Sanghi, Rahim Yar Khan')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map-full"
            >
              <ExternalLink size={16} /> Open Location on Google Maps
            </a>
          </div>
        </div>

        {/* WhatsApp Direct Form */}
        <div className="contact-form-card">
          <h2>Send Instant WhatsApp Message</h2>
          <p className="form-sub">Fill out your inquiry and click to open WhatsApp directly with our team.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="e.g. Ali Raza"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Your Contact / WhatsApp Number</label>
              <input
                type="tel"
                placeholder="e.g. 0300 1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Inquiry Reason</label>
              <select value={inquiryType} onChange={(e) => setInquiryType(e.target.value)}>
                <option value="buy">I want to buy a new/used phone</option>
                <option value="sell">I want to sell/trade-in my old phone</option>
                <option value="accessories">Inquiry about accessories / chargers</option>
                <option value="location">Store location & directions</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message / Phone Model You Need</label>
              <textarea
                rows={4}
                placeholder="e.g. Looking for iPhone 15 Pro 256GB Natural Titanium PTA approved in Dhari Sanghi..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit-wa">
              <Send size={18} /> Send Message on WhatsApp ({WHATSAPP_DISPLAY})
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
