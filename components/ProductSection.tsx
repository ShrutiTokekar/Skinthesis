'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ThumbImage { src: string; alt: string; }
interface AccordionItem { title: string; body: string; }
type Shade = 'fair-light' | 'light' | 'light-medium' | 'medium' | 'tan' | 'deep';

const THUMBS: ThumbImage[] = [
  // TODO: Replace with new Luxe Serum Fusion Veil Duo product images
  { src: '/images/product_line.png', alt: 'View 1' },
  { src: '/images/Product2.png', alt: 'View 2' },
  { src: '/images/Product1.png', alt: 'View 3' },
  { src: '/images/Process2.png', alt: 'View 4' },
];

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    title: 'How to Use',
    body: '1. Pump once to dispense both formulas simultaneously. 2. Blend on fingertip. 3. Apply to face and neck using upward strokes. 4. Use AM daily for best results. Safe for sensitive and retinol-reactive skin.',
  },
  {
    title: 'Key Ingredients',
    body: 'DynaSyn-26™ (patented collagen activator), Hyaluronic Acid, SPF 30 mineral filters, Optical Blur Skin Tint base with skin-matching peptides, Squalane, Niacinamide.',
  },
  {
    title: 'Why No Irritation?',
    body: 'Unlike retinol which causes peeling and redness in up to 40% of users, DynaSyn-26™ activates collagen production at the dermal level without triggering surface inflammation. Suitable for all skin types including sensitive and retinol-reactive skin.',
  },
];

const SHADES: { id: Shade; label: string; hex: string }[] = [
  { id: 'fair-light', label: 'Fair Light', hex: '#F5DEC8' },
  { id: 'light', label: 'Light', hex: '#EECFAA' },
  { id: 'light-medium', label: 'Light Medium', hex: '#D4A97A' },
  { id: 'medium', label: 'Medium', hex: '#C49A72' },
  { id: 'tan', label: 'Tan', hex: '#B8845A' },
  { id: 'deep', label: 'Deep Rich', hex: '#7D4E2A' },
];

const FEATURES = ['Collagen-Active', 'SPF 30', 'Hyaluronic Acid', 'Non-Irritating', 'Light Stable', 'Retinol-Free'];

export default function ProductSection() {
  // TODO: Replace main product image with new Luxe Serum Fusion Veil Duo gold bottle image
  const [mainImg, setMainImg] = useState<string>('/images/Product.png');
  const [activeThumb, setActiveThumb] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);
  const [activeShade, setActiveShade] = useState<Shade>('light-medium');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const switchImg = (src: string, idx: number) => { setMainImg(src); setActiveThumb(idx); };
  const changeQty = (delta: number) => setQty((prev) => Math.max(1, prev + delta));
  const toggleAccordion = (idx: number) => setOpenAccordion(openAccordion === idx ? null : idx);

  return (
    <section id="product" className="py-32 px-[5%] bg-[#f7f3ef]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[0.72rem] tracking-[0.25em] uppercase text-[#6b8cae] font-medium mb-4">Product Showcase</div>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#1a1a2e] mb-2">
          Serum Fusion Veil™
        </h2>
        <p className="text-[#888] text-[0.95rem] tracking-[0.1em] uppercase mb-12">
          Luxe Complexion Treatment SPF 30
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Gallery */}
          <div className="md:sticky md:top-[90px]">
            {/* TODO: Replace main image src with new gold bottle Luxe Serum Fusion Veil Duo image */}
            <Image
              src={mainImg}
              alt="Skinthesis Luxe Serum Fusion Veil Duo"
              width={600}
              height={600}
              className="w-full rounded-3xl shadow-[0_20px_60px_rgba(44,95,138,0.15)] mb-4 transition-opacity duration-300"
              style={{ height: 'auto' }}
            />
            <div className="flex gap-3">
              {THUMBS.map((t, idx) => (
                // TODO: Replace each thumb src with new product images
                <Image
                  key={idx}
                  src={t.src}
                  alt={t.alt}
                  width={70}
                  height={70}
                  onClick={() => switchImg(t.src, idx)}
                  className={`thumb w-[70px] h-[70px] object-cover rounded-xl cursor-pointer transition-all duration-300 border-2 border-transparent ${activeThumb === idx ? 'active opacity-100' : 'opacity-55 hover:opacity-100'}`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            {/* Price */}
            <div className="font-playfair text-[2.2rem] font-bold text-[#1a1a2e] mb-1">$140</div>
            <p className="text-[#999] text-[0.82rem] tracking-[0.06em] mb-5">Free shipping on orders over $100</p>

            <p className="text-[#666] leading-[1.7] text-[0.96rem] mb-7">
              A dual-chamber complexion treatment that simultaneously dispenses a collagen-boosting serum
              and an optical blur skin tint in a single pump. Where science meets coverage — without
              a single drop of retinol.
            </p>

            {/* Shade Selector */}
            <p className="text-[0.75rem] tracking-[0.12em] uppercase text-[#999] mb-2">
              Select Shade — <span className="text-[#1a1a2e] font-medium">{SHADES.find(s => s.id === activeShade)?.label}</span>
            </p>
            <div className="flex gap-3 mb-7 flex-wrap">
              {SHADES.map((shade) => (
                <button
                  key={shade.id}
                  aria-label={shade.label}
                  title={shade.label}
                  onClick={() => setActiveShade(shade.id)}
                  className={`shade w-9 h-9 rounded-full cursor-pointer transition-all duration-200 border-[3px] ${activeShade === shade.id ? 'border-[#2c5f8a] scale-110 shadow-[0_0_0_2px_#2c5f8a]' : 'border-transparent hover:scale-110'}`}
                  style={{ backgroundColor: shade.hex }}
                />
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-7">
              {FEATURES.map((f) => (
                <span key={f} className="text-[0.75rem] tracking-[0.08em] uppercase bg-[rgba(44,95,138,0.08)] text-[#2c5f8a] px-4 py-1.5 rounded-full border border-[rgba(44,95,138,0.15)]">{f}</span>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <button onClick={() => changeQty(-1)} className="w-9 h-9 rounded-full border border-[#ccc] bg-white text-xl cursor-pointer transition-all duration-200 hover:bg-[#2c5f8a] hover:border-[#2c5f8a] hover:text-white">−</button>
              <span className="text-lg font-semibold min-w-[24px] text-center">{qty}</span>
              <button onClick={() => changeQty(1)} className="w-9 h-9 rounded-full border border-[#ccc] bg-white text-xl cursor-pointer transition-all duration-200 hover:bg-[#2c5f8a] hover:border-[#2c5f8a] hover:text-white">+</button>
            </div>

            {/* Releasing Soon Button */}
            <div className="w-full py-4 rounded-lg border-2 border-[#2c5f8a] text-center mb-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c5f8a]/10 to-[#5ba4cf]/10" />
              <div className="relative flex flex-col items-center gap-1">
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#5ba4cf] font-medium">Coming Soon</span>
                <span className="font-playfair text-[1.1rem] font-bold text-[#1a2d4a] italic">Releasing Soon</span>
              </div>
            </div>
            <p className="text-center text-[0.75rem] text-[#999] mb-6">Join the waitlist via our newsletter below</p>

            {/* Accordion */}
            <div>
              {ACCORDION_ITEMS.map((item, idx) => (
                <div key={idx} className="border-b border-black/[0.08]">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex justify-between items-center py-4 font-medium text-[0.95rem] cursor-pointer text-[#1a1a2e] bg-transparent border-none text-left transition-colors duration-200 hover:text-[#2c5f8a]"
                  >
                    {item.title}
                    <span className="text-xl text-[#2c5f8a]">{openAccordion === idx ? '−' : '+'}</span>
                  </button>
                  <div className="accordion-body" style={{ maxHeight: openAccordion === idx ? '300px' : '0px' }}>
                    <p className="pb-4 text-[#666] text-[0.9rem] leading-[1.65]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
