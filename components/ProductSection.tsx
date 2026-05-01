'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { ThumbImage, AccordionItem } from '@/types';

const THUMBS: ThumbImage[] = [
  { src: '/images/Product2.png', alt: 'View 1' },
  { src: '/images/Process2.png', alt: 'View 2' },
  { src: '/images/Product1.png', alt: 'View 3' },
  { src: '/images/Product3.png', alt: 'View 4' },
];

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    title: 'How to Use',
    body: '1. Pump once to dispense both formulas. 2. Blend on fingertip. 3. Apply to face and neck using upward strokes. 4. Use AM daily for best results.',
  },
  {
    title: 'Key Ingredients',
    body: 'DynaSyn-26™ (patented collagen activator), Hyaluronic Acid, SPF 30 mineral filters, Tinted emulsion base with skin-matching pigments, Squalane, Niacinamide.',
  },
];

type Shade = 'tan' | 'light' | 'medium';

const SHADE_COLORS: Record<Shade, string> = {
  tan: '#b8845a',
  light: '#e8ddd0',
  medium: '#c49a72',
};

const FEATURES = ['Collagen-Active', 'SPF 30', 'Hyaluronic Acid', 'Non-Irritating', 'Light Stable'];

export default function ProductSection() {
  const [mainImg, setMainImg] = useState<string>('/images/Product.png');
  const [activeThumb, setActiveThumb] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);
  const [activeShade, setActiveShade] = useState<Shade>('tan');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const switchImg = (src: string, idx: number) => {
    setMainImg(src);
    setActiveThumb(idx);
  };

  const changeQty = (delta: number) => {
    setQty((prev) => Math.max(1, prev + delta));
  };

  const toggleAccordion = (idx: number) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <section id="product" className="py-32 px-[5%] bg-cream">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[0.72rem] tracking-[0.25em] uppercase text-[#6b8cae] font-medium mb-4">
          Product Showcase
        </div>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#1a1a2e] mb-4">
          Serum Fusion Veil™
        </h2>
        <p className="text-[#888] text-[0.95rem] tracking-[0.1em] uppercase mb-12">
          Complexion Treatment SPF 30
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Gallery */}
          <div className="md:sticky md:top-[90px]">
            <Image
              src={mainImg}
              alt="Serum Fusion Veil main"
              width={600}
              height={600}
              className="w-full rounded-3xl shadow-[0_20px_60px_rgba(44,95,138,0.15)] mb-4 transition-opacity duration-300"
              style={{ height: 'auto' }}
            />
            <div className="flex gap-3">
              {THUMBS.map((t, idx) => (
                <Image
                  key={idx}
                  src={t.src}
                  alt={t.alt}
                  width={70}
                  height={70}
                  onClick={() => switchImg(t.src, idx)}
                  className={`thumb w-[70px] h-[70px] object-cover rounded-xl cursor-pointer transition-all duration-300 border-2 border-transparent ${
                    activeThumb === idx ? 'active opacity-100' : 'opacity-55 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="font-playfair text-[2.2rem] font-bold text-[#1a1a2e] mb-4">$60</div>

            <p className="text-[#666] leading-[1.7] text-[0.96rem] mb-7">
              A dual-chamber complexion treatment that dispenses a skin tint and collagen-activating
              serum simultaneously. Coverage meets science.
            </p>

            {/* Shades */}
            <p className="text-[0.75rem] tracking-[0.12em] uppercase text-[#999] mb-3">
              Select Shade
            </p>
            <div className="flex gap-3 mb-7">
              {(Object.keys(SHADE_COLORS) as Shade[]).map((shade) => (
                <button
                  key={shade}
                  aria-label={shade}
                  onClick={() => setActiveShade(shade)}
                  className={`shade w-9 h-9 rounded-full cursor-pointer transition-all duration-200 border-[3px] border-transparent ${
                    activeShade === shade ? 'active' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: SHADE_COLORS[shade] }}
                />
              ))}
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              {FEATURES.map((f) => (
                <span
                  key={f}
                  className="text-[0.75rem] tracking-[0.08em] uppercase bg-[rgba(44,95,138,0.08)] text-[#2c5f8a] px-4 py-1.5 rounded-full border border-[rgba(44,95,138,0.15)]"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => changeQty(-1)}
                className="w-9 h-9 rounded-full border border-[#ccc] bg-white text-xl cursor-pointer transition-all duration-200 hover:bg-[#2c5f8a] hover:border-[#2c5f8a] hover:text-white"
              >
                −
              </button>
              <span className="text-lg font-semibold min-w-[24px] text-center">{qty}</span>
              <button
                onClick={() => changeQty(1)}
                className="w-9 h-9 rounded-full border border-[#ccc] bg-white text-xl cursor-pointer transition-all duration-200 hover:bg-[#2c5f8a] hover:border-[#2c5f8a] hover:text-white"
              >
                +
              </button>
            </div>

            {/* Add to bag */}
            <button className="w-full py-4 rounded-lg bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white font-medium tracking-wide cursor-pointer transition-all duration-300 shadow-[0_6px_24px_rgba(44,95,138,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(44,95,138,0.45)] mb-6 font-dm">
              Add to Bag
            </button>

            {/* Accordion */}
            <div>
              {ACCORDION_ITEMS.map((item, idx) => (
                <div key={idx} className="border-b border-black/[0.08]">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex justify-between items-center py-4 font-medium text-[0.95rem] cursor-pointer text-[#1a1a2e] bg-transparent border-none text-left transition-colors duration-200 hover:text-[#2c5f8a]"
                  >
                    {item.title}
                    <span className="text-xl text-[#2c5f8a]">
                      {openAccordion === idx ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className="accordion-body"
                    style={{ maxHeight: openAccordion === idx ? '200px' : '0px' }}
                  >
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
