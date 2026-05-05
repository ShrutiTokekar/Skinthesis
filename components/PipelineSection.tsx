'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PipelineProduct {
  id: string;
  status: string;
  timeline: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  img: string; // TODO: replace with actual product images
  imgAlt: string;
  available: boolean;
}

const PRODUCTS: PipelineProduct[] = [
  {
    id: 'serum-fusion',
    status: 'Launching 2026',
    timeline: 'Now',
    name: 'Serum Fusion Veil Duo™',
    tagline: 'Collagen serum meets skin tint.',
    description: 'A dual-chamber complexion treatment that simultaneously dispenses a collagen-boosting serum and an optical blur skin tint in a single pump. SPF 30 mineral protection. Available in 6 inclusive shades — Fair Light through Deep Rich. No retinol. No irritation. Zero compromise.',
    tags: ['DynaSyn-26™', 'SPF 30', '6 Shades', 'Collagen-Active', 'Retinol-Free'],
    // TODO: Replace with new Luxe Serum Fusion Veil Duo gold bottle image
    img: '/images/Product_showcase.png',
    imgAlt: 'Skinthesis Serum Fusion Veil Duo',
    available: true,
  },
  {
    id: 'eye-brightener',
    status: 'Arriving Year 3',
    timeline: '2028',
    name: 'Eye Brightener Fusion Serum™',
    tagline: 'Targeted collagen care for the under-eye.',
    description: 'A precision under-eye treatment infused with DynaSyn™ to reduce fine lines and dark circles at the source. Features a gold depuffing cooling tip for instant relief. Available in 6 diverse shades that blend seamlessly with your skin tone for a naturally brightened finish.',
    tags: ['DynaSyn™', 'Cooling Tip', '6 Shades', 'Depuffing', 'Collagen-Active'],
    // TODO: Replace with Eye Brightener product image when available
    img: '/images/eye_brightner.png',
    imgAlt: 'Skinthesis Eye Brightener Fusion Serum',
    available: false,
  },
  {
    id: 'lip-oil',
    status: 'Arriving Year 4',
    timeline: '2029',
    name: 'Tinted Lip Plumping Oil™',
    tagline: 'Plump, hydrate, and protect.',
    description: 'A luxurious lip-plumping oil infused with DynaSyn™ for collagen support at the lip line. Features a cooling soothing tip for immediate comfort. Available in three sophisticated shades — Classic Red, Salmon, and Cherry — each designed to complement a full range of skin tones.',
    tags: ['DynaSyn™', 'Plumping', 'Cooling Tip', 'Hydrating', '3 Shades'],
    // TODO: Replace with Lip Plumping Oil product image when available
    img: '/images/tinted_lip_oil.png',
    imgAlt: 'Skinthesis Tinted Lip Plumping Oil',
    available: false,
  },
];

export default function PipelineSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <section id="pipeline" className="py-32 px-[5%]" style={{ background: 'linear-gradient(180deg,#edf3f8 0%,#f7f3ef 100%)' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[0.72rem] tracking-[0.25em] uppercase text-[#6b8cae] font-medium mb-4">What&apos;s Next</div>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#1a1a2e] mb-4">
          The <em>Collection</em>
        </h2>
        <p className="text-[#666] max-w-[560px] leading-[1.7] mb-16 text-[1rem]">
          DynaSyn-26™ is the foundation. Our pipeline extends the same collagen-activating science into new formats — each designed to meet a different moment in your routine.
        </p>

        <div className="flex flex-col gap-5">
          {PRODUCTS.map((product) => {
            const isOpen = expanded === product.id;
            return (
              <div
                key={product.id}
                className={`rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                  product.available
                    ? 'bg-gradient-to-br from-[#2c5f8a] to-[#4a8fc0] border-[#2c5f8a]/30 text-white'
                    : 'bg-white border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,.06)]'
                }`}
                onClick={() => toggle(product.id)}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between px-8 py-6">
                  <div className="flex items-center gap-6">
                    {/* Timeline badge */}
                    <div className={`text-[0.68rem] tracking-[0.2em] uppercase font-medium px-4 py-1.5 rounded-full flex-shrink-0 ${
                      product.available ? 'bg-white/20 text-white' : 'bg-[#edf3f8] text-[#2c5f8a]'
                    }`}>
                      {product.status}
                    </div>
                    <div>
                      <h3 className={`font-playfair text-[1.25rem] font-bold ${product.available ? 'text-white' : 'text-[#1a1a2e]'}`}>
                        {product.name}
                      </h3>
                      <p className={`text-[0.88rem] mt-0.5 ${product.available ? 'text-white/70' : 'text-[#888]'}`}>
                        {product.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="flex gap-2 flex-wrap justify-end hidden md:flex">
                      {product.tags.slice(0, 3).map(tag => (
                        <span key={tag} className={`text-[0.7rem] tracking-wide px-3 py-1 rounded-full ${
                          product.available ? 'bg-white/15 text-white' : 'bg-[#edf3f8] text-[#2c5f8a]'
                        }`}>{tag}</span>
                      ))}
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      product.available ? 'bg-white/20' : 'bg-[#edf3f8]'
                    } ${isOpen ? 'rotate-45' : ''}`}>
                      <span className={`text-lg leading-none ${product.available ? 'text-white' : 'text-[#2c5f8a]'}`}>+</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className={`border-t ${product.available ? 'border-white/20' : 'border-black/[0.06]'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className={`relative overflow-hidden ${product.available ? 'bg-white/10' : 'bg-[#f7f3ef]'}`} style={{ minHeight: 280 }}>
                        {/* TODO: Replace with actual product image for each pipeline item */}
                        <Image
                          src={product.img}
                          alt={product.imgAlt}
                          fill
                          className="object-cover object-center"
                        />
                        {!product.available && (
                          <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                        )}
                      </div>
                      {/* Description */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className={`text-[0.68rem] tracking-[0.2em] uppercase font-medium mb-3 ${product.available ? 'text-white/60' : 'text-[#6b8cae]'}`}>
                          {product.available ? 'Available Now' : `Expected ${product.timeline}`}
                        </div>
                        <p className={`text-[0.95rem] leading-[1.75] mb-6 ${product.available ? 'text-white/85' : 'text-[#555]'}`}>
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map(tag => (
                            <span key={tag} className={`text-[0.72rem] tracking-wide px-3 py-1.5 rounded-full ${
                              product.available ? 'bg-white/15 text-white border border-white/20' : 'bg-[#edf3f8] text-[#2c5f8a]'
                            }`}>{tag}</span>
                          ))}
                        </div>
                        {product.available && (
                          <a href="#product" className="mt-6 inline-block text-[0.85rem] font-medium text-white border border-white/40 px-6 py-2.5 rounded-full w-fit hover:bg-white/10 transition-colors duration-200">
                            View Product →
                          </a>
                        )}
                        {!product.available && (
                          <p className={`mt-6 text-[0.8rem] tracking-wide ${product.available ? 'text-white/50' : 'text-[#aaa]'}`}>
                            Sign up for our newsletter to be notified at launch.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
