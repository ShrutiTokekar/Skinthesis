import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FadeInObserver from '@/components/FadeInObserver';
import ProductSection from '@/components/ProductSection';
import PipelineSection from '@/components/PipelineSection';

interface TeamMember { name: string; role: string; exp: string; img: string; }
interface ProcessStep { num: string; img: string; alt: string; title: string; body: string; delay: string; }

interface CompRow {
  feature: string;
  dynasyn: string;
  retinol: string;
  vitaminC: string;
  bakuchiol: string;
  dynasyClass?: string;
  retinolClass?: string;
  vitaminCClass?: string;
  bakuchiolClass?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Shreeya Tokekar', role: 'CEO', exp: 'Symrise · Coffee Elf · Labcorp', img: '/images/Shreeya.png' },
  { name: 'Apurva Ashok Tuwar', role: 'Head of Operations', exp: 'Capgemini', img: '/images/Apurva.png' },
  { name: 'Rishi Kiran Rajesh', role: 'Head of Marketing', exp: 'AgeBrilliantly', img: '/images/Rishi.png' },
  { name: 'Darius McKay', role: 'CFO', exp: 'Empire Consulting · Kean University', img: '/images/Darius.png' },
];

const COMPARISON_ROWS: CompRow[] = [
  { feature: 'Reduces Wrinkles', dynasyn: '✓', retinol: '✓', vitaminC: '✓', bakuchiol: '✓', dynasyClass: 'text-green-600 font-semibold' },
  { feature: 'Skin Irritation', dynasyn: 'None', retinol: 'Moderate', vitaminC: 'Moderate', bakuchiol: 'None', dynasyClass: 'text-green-600 font-semibold', retinolClass: 'text-orange-500', vitaminCClass: 'text-orange-500' },
  { feature: 'Light Stable', dynasyn: '✓', retinol: '✗', vitaminC: 'Partial', bakuchiol: '✓', dynasyClass: 'text-green-600 font-semibold', retinolClass: 'text-red-600', vitaminCClass: 'text-orange-500' },
  { feature: 'Formulation Ease', dynasyn: 'Easy', retinol: 'Moderate', vitaminC: 'Moderate', bakuchiol: 'Easy', dynasyClass: 'text-green-600 font-semibold' },
  { feature: 'Consistent Supply', dynasyn: 'High', retinol: 'Moderate', vitaminC: 'Moderate', bakuchiol: 'Variable', dynasyClass: 'text-green-600 font-semibold', bakuchiolClass: 'text-orange-500' },
];

const PROCESS_STEPS: ProcessStep[] = [
  { num: '01', img: '/images/Process4.png', alt: 'Step 1 - Dispense', title: 'Single Pump Dispenses Both', body: 'One press releases the Optical Blur Skin Tint and Collagen-Boosting Serum simultaneously from the dual-chamber bottle.', delay: '' },
  { num: '02', img: '/images/Process2.png', alt: 'Step 2 - Blend', title: 'Blend on Fingertip', body: 'The tint and serum merge on your fingertip, creating a personalized fusion that adapts to your unique skin tone.', delay: 'delay-1' },
  { num: '03', img: '/images/Process3.png', alt: 'Step 3 - Apply', title: 'Apply & Transform', body: 'The tint + SPF 30 deliver instant coverage on the surface, while DynaSyn-26™ penetrates deep into the dermis to activate collagen.', delay: 'delay-2' },
];

// Removed 750% Collagen Boost — replaced with Zero Irritation and Clinical-Grade
const STATS: [string, string][] = [['Zero', 'Irritation'], ['SPF 30', 'UV Defense'], ['11yr', 'Patent Exclusivity']];
const sectionLabel = 'text-[0.72rem] tracking-[0.25em] uppercase text-[#6b8cae] font-medium mb-4';
const sectionTitle = 'font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#1a1a2e] mb-6';

export default function Home() {
  return (
    <>
      <Navbar />
      <FadeInObserver />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen relative flex items-center overflow-hidden px-[5%]"
        style={{ background: 'linear-gradient(160deg,#1a2d4a 0%,#2c5f8a 40%,#4a8fc0 70%,#7ab8d8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 40%,rgba(91,164,207,.3) 0%,transparent 60%),radial-gradient(ellipse at 20% 80%,rgba(26,45,74,.6) 0%,transparent 50%)' }} />
        <div className="hero-orb absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, background: 'rgba(91,164,207,.25)', top: -100, left: -100, filter: 'blur(60px)', animationDelay: '0s' }} />
        <div className="hero-orb absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, background: 'rgba(180,210,235,.2)', bottom: 50, right: 300, filter: 'blur(60px)', animationDelay: '3s' }} />
        <div className="hero-orb absolute rounded-full pointer-events-none" style={{ width: 200, height: 200, background: 'rgba(44,95,138,.4)', top: '60%', left: '30%', filter: 'blur(60px)', animationDelay: '1.5s' }} />
        <div className="hero-content relative z-[2] max-w-[560px]">
          <p className="text-[0.78rem] tracking-[0.2em] uppercase text-white/65 mb-5">Est. 2026 &nbsp;·&nbsp; Biotech Beauty</p>
          <h1 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-[1.1] mb-6">
            <span className="font-cormorant italic font-normal text-[1.2em]">Rethinking</span> aging,<br />from the inside out.
          </h1>
          <p className="text-white/75 text-[1.05rem] leading-[1.65] mb-9 max-w-[420px]">Patent-backed collagen technology meets effortless daily skincare. One pump. Real results. Zero retinol.</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#product" className="inline-block px-9 py-3.5 rounded-full text-[0.92rem] font-medium tracking-wide bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white shadow-[0_6px_24px_rgba(44,95,138,.35)] transition-all duration-300 hover:-translate-y-0.5">Discover the Product</a>
            <a href="#tech" className="inline-block px-9 py-3.5 rounded-full text-[0.92rem] font-medium tracking-wide bg-transparent text-white border border-white/60 transition-all duration-300 hover:bg-white/10">Learn the Science</a>
          </div>
          <div className="inline-block text-[0.72rem] tracking-[0.12em] uppercase text-white/50 border border-white/20 px-4 py-1.5 rounded-full">US Patent 10,695,275</div>
        </div>
        {/* TODO: Replace with new Luxe Serum Fusion Veil Duo gold bottle image */}
        <div className="hero-bottle-wrap absolute right-0 z-[2]" style={{ top: '50%', width: 'clamp(460px,50vw,720px)', height: 'clamp(600px,88vh,960px)', position: 'absolute' }}>
          <Image
            src="/images/viel.png"
            alt="Skinthesis Serum Fusion Veil"
            fill
            className="object-contain object-bottom"
            style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,.4))' }}
          />
          <div className="absolute rounded-full" style={{ bottom: -20, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 40, background: 'rgba(91,164,207,.4)', filter: 'blur(20px)' }} />
        </div>
        <div className="hero-scroll-hint absolute bottom-8 flex flex-col items-center gap-2 text-white/40 text-[0.7rem] tracking-[0.15em] uppercase z-[2]" style={{ left: '50%' }}>
          <span>scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom,rgba(255,255,255,.4),transparent)' }} />
        </div>
      </section>

      {/* ─── WHY NOW ──────────────────────────────────────────── */}
      <section id="why-now" className="py-24 px-[5%] bg-[#1a2d4a]">
        <div className="max-w-[1100px] mx-auto text-center">
          <div className="text-[0.72rem] tracking-[0.25em] uppercase text-[#5ba4cf] font-medium mb-4">The Moment</div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-white mb-4">Why <em>Now?</em></h2>
          <p className="text-white/60 max-w-[560px] mx-auto mb-16 text-[1rem] leading-[1.7]">Three forces are converging to create a once-in-a-decade opening for a retinol alternative.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: 'May 2025', label: 'EU Retinol Restriction Live', body: 'The European Commission tightened retinol limits in cosmetics — creating an immediate gap in the global market.' },
              { stat: '$101.5B', label: 'Anti-Aging Market by 2034', body: 'McKinsey & Company projects the global anti-aging market will exceed $101.5 billion within the decade.' },
              { stat: 'Age 25', label: 'Youth Starting Skincare Earlier', body: 'Statista data shows the average skincare consumer now begins preventive anti-aging routines at just 25.' },
            ].map((item, i) => (
              <div key={item.stat} className={`fade-in ${i > 0 ? `delay-${i}` : ''} bg-[#1e3a5f] border border-[#c9a84c]/20 rounded-2xl p-8 text-left transition-all duration-300 hover:border-[#c9a84c]/40`}>
                <div className="font-playfair text-[2.4rem] font-bold mb-1" style={{ color: '#c9a84c' }}>{item.stat}</div>
                <div className="text-white/90 font-medium mb-3 text-[0.72rem] tracking-[0.18em] uppercase">{item.label}</div>
                <p className="text-white/50 text-[0.85rem] leading-[1.65]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ──────────────────────────────────────────── */}
      <section id="problem" className="py-32 px-[5%] bg-[#f7f3ef]">
        <div className="max-w-[1100px] mx-auto">
          <div className={sectionLabel}>The Retinol Gap</div>
          <h2 className={sectionTitle}>Why current solutions <em>fail.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div className="flex flex-col gap-5">
              {[
                { num: '25', label: 'Age skin rejected retinol', body: "Founder Shreeya's own skin rejected retinol at 25 — the spark that started Skinthesis." },
                { num: '40%', label: "Can't tolerate retinol", body: 'Up to 40% of skincare users experience peeling, redness, or sensitivity from retinol products.' },
                { num: 'EU', label: 'Retinol restrictions tightened', body: 'The EU tightened retinol limits in cosmetics in 2024, signaling a global regulatory shift.' },
              ].map((item, i) => (
                <div key={item.num} className={`fade-in ${i > 0 ? `delay-${i}` : ''} flex gap-5 bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,.05)] border border-black/[0.04]`}>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] flex items-center justify-center text-white font-playfair font-bold text-[1rem]">{item.num}</div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1">{item.label}</h3>
                    <p className="text-[#666] text-[0.88rem] leading-[1.6]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="fade-in delay-1 bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,.08)]">
              <h3 className="font-playfair text-[1.4rem] font-bold text-[#1a1a2e] mb-6">Why Current Solutions Fail</h3>
              {[
                { title: 'Aging starts deep in the dermis', body: "Surface creams can't reach where collagen production actually happens." },
                { title: "By the time you see it, it's too late", body: 'Visible signs appear only after significant collagen loss has already occurred.' },
                { title: 'All alternatives fall short', body: 'Retinol irritates. Vitamin C is unstable. Bakuchiol underperforms. Peptides stay surface-level.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 mb-5 last:mb-0">
                  <div className="flex-shrink-0 w-1.5 rounded-full bg-gradient-to-b from-[#2c5f8a] to-[#5ba4cf] self-stretch" />
                  <div>
                    <h4 className="font-medium text-[#1a1a2e] text-[0.95rem] mb-1">{item.title}</h4>
                    <p className="text-[#666] text-[0.85rem] leading-[1.6]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH ─────────────────────────────────────────────── */}
      <section id="tech" className="py-32 px-[5%]" style={{ background: 'linear-gradient(180deg,#edf3f8 0%,#f7f3ef 100%)' }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center mb-24">
          <div>
            <div className={sectionLabel}>Core Technology</div>
            <h2 className={sectionTitle}>Meet <em>DynaSyn-26™</em></h2>
            <div className="inline-block text-[0.75rem] tracking-[0.1em] uppercase bg-[#1a2d4a] text-white px-4 py-1.5 rounded-full mb-6">US Patent 10,695,275 · NeoPharm Licensed</div>
            <p className="text-[#555] leading-[1.75] text-[1rem] mb-7">A next-generation anti-aging ingredient that activates collagen synthesis at the dermal level — with zero irritation, full light stability, and consistent supply. The retinol replacement the industry has been waiting for.</p>
            <div className="flex gap-10">
              {STATS.map(([num, label]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-playfair text-[2rem] font-bold text-[#2c5f8a] leading-none">{num}</span>
                  <span className="text-[0.75rem] tracking-[0.1em] uppercase text-[#999]">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* TODO: Replace with new technology/formulation image if available */}
            <Image src="/images/formulation.png" alt="DynaSyn-26 Technology" width={600} height={450} className="w-full rounded-3xl shadow-[0_20px_60px_rgba(44,95,138,.2)]" style={{ height: 'auto' }} />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white text-[0.75rem] tracking-[0.12em] uppercase px-6 py-2 rounded-full whitespace-nowrap shadow-[0_6px_20px_rgba(44,95,138,.3)]">Clinically Proven · Patent Protected</div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="fade-in max-w-[1100px] mx-auto">
          <div className={sectionLabel}>The Skinthesis Edge</div>
          <h3 className="font-playfair text-[1.8rem] font-bold text-[#1a1a2e] mb-2">How we compare</h3>
          <p className="text-[#666] text-[0.9rem] mb-8">DynaSyn-26™ delivers equivalent efficacy with a superior safety and stability profile — ideal for mass-market cosmetic use.</p>
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,.08)]">
            <div className="grid" style={{ gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', background: '#1a2d4a' }}>
              {['Feature', 'DynaSyn-26™', 'Retinol / Palmitate', 'Vitamin C', 'Bakuchiol'].map((h, i) => (
                <div key={h} className={`px-4 py-4 text-[0.75rem] tracking-[0.08em] uppercase font-medium flex items-center border-r border-white/5 ${i === 1 ? 'bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white font-bold' : 'text-white/70'}`}>{h}</div>
              ))}
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div key={row.feature} className={`grid ${i % 2 === 0 ? 'bg-white' : 'bg-[#f7f3ef]'}`} style={{ gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr' }}>
                <div className="px-4 py-4 text-[0.88rem] font-medium text-[#1a1a2e] flex items-center border-r border-black/[0.04]">{row.feature}</div>
                <div className={`px-4 py-4 text-[0.88rem] flex items-center bg-gradient-to-br from-[rgba(44,95,138,.06)] to-[rgba(91,164,207,.06)] border-r border-black/[0.04] ${row.dynasyClass ?? 'text-[#444]'}`}>{row.dynasyn}</div>
                <div className={`px-4 py-4 text-[0.88rem] flex items-center border-r border-black/[0.04] ${row.retinolClass ?? 'text-[#444]'}`}>{row.retinol}</div>
                <div className={`px-4 py-4 text-[0.88rem] flex items-center border-r border-black/[0.04] ${row.vitaminCClass ?? 'text-[#444]'}`}>{row.vitaminC}</div>
                <div className={`px-4 py-4 text-[0.88rem] flex items-center ${row.bakuchiolClass ?? 'text-[#444]'}`}>{row.bakuchiol}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT STORY ────────────────────────────────────── */}
      <section id="story" className="py-32 px-[5%] bg-[#1a2d4a]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[0.72rem] tracking-[0.25em] uppercase text-[#5ba4cf] font-medium mb-4">The Product Story</div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-white mb-16">
            The old paradigm <em>vs.</em><br />the Skinthesis solution.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Old Paradigm */}
            <div className="fade-in bg-white/5 border border-white/[0.08] rounded-2xl p-8">
              <h3 className="font-playfair text-[1.1rem] text-white/50 mb-8 italic">The Old Paradigm</h3>
              <div className="flex flex-col gap-0 divide-y divide-white/[0.08]">
                {[
                  'Multi-step, time-consuming routine',
                  "Cannot be worn in direct sunlight",
                  'Excludes sensitive skin types',
                  'Excludes retinol-reactive skin',
                  'Makeup undoes the skincare work',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-white/30 font-medium text-[0.78rem]">{i + 1}</div>
                    <p className="text-white/45 text-[0.9rem]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skinthesis Solution */}
            <div className="fade-in delay-1 rounded-2xl overflow-hidden border border-[#5ba4cf]/20">
              {/* Top image strip */}
              <div className="relative h-36 bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] overflow-hidden">
                {/* TODO: Add a lifestyle/product image here for the Skinthesis solution panel */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-playfair text-[1.1rem] italic text-white/80">The Skinthesis Solution</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2c5f8a]/20 to-[#5ba4cf]/10 border-t-0 p-8">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: 'Skin tint works instantly', sub: 'Optical blur coverage from first pump' },
                    { label: 'Fine lines and pores visibly blurred', sub: 'Surface perfecting on application' },
                    { label: 'Fully light stable — wear all day', sub: 'No photosensitivity, no restrictions' },
                    { label: 'DynaSyn-26™ activates collagen', sub: 'Deep dermal action, clinically studied' },
                    { label: 'No irritation, no peeling, ever', sub: 'Safe for sensitive and reactive skin' },
                    { label: 'Reduces fine lines & improves elasticity', sub: 'Long-term structural skin improvement' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 py-2.5 border-b border-white/[0.08] last:border-0">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#5ba4cf] mt-2" />
                      <div>
                        <p className="text-white font-medium text-[0.88rem]">{item.label}</p>
                        <p className="text-white/45 text-[0.78rem] mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────── */}
      <section id="process" className="py-32 px-[5%] bg-[#f7f3ef]">
        <div className="max-w-[1100px] mx-auto">
          <div className={sectionLabel}>How It Works</div>
          <h2 className={sectionTitle}>Simple ritual.<br /><em>Powerful results.</em></h2>
          <p className="text-[#666] max-w-[580px] leading-[1.7] mb-16 text-[1rem]">A two-step system where science meets skincare. One step activates collagen at a biological level, the second protects and perfects.</p>
          <div className="grid items-start gap-4" style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr' }}>
            {PROCESS_STEPS.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className={`fade-in ${step.delay} bg-white border border-black/[0.05] rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(44,95,138,.12)] hover:-translate-y-1`}>
                  <div className="font-playfair text-[3rem] font-black text-[rgba(44,95,138,.2)] leading-none mb-4">{step.num}</div>
                  <div className="w-full h-[260px] overflow-hidden rounded-xl mb-5 bg-[#f7f3ef]">
                    {/* TODO: Replace process images if new ones are available */}
                    <Image src={step.img} alt={step.alt} width={400} height={300} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-playfair text-[1.1rem] text-[#1a1a2e] mb-2">{step.title}</h3>
                  <p className="text-[#666] text-[0.88rem] leading-[1.6]">{step.body}</p>
                </div>
                {idx < 2 && (
                  <div className="text-[2rem] text-[#5ba4cf] flex items-center justify-center opacity-40 pt-[100px]">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS ──────────────────────────────────────────── */}
      <section id="results" className="py-32 px-[5%] bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <div className={sectionLabel}>Real Results</div>
          <h2 className={sectionTitle}>See the <em>difference.</em></h2>
          <div className="flex items-center gap-8 my-12 justify-center flex-wrap md:flex-nowrap">
            <div className="fade-in relative flex-1 max-w-[340px]">
              {/* TODO: Replace before/after images with new clinical result photos if available */}
              <Image src="/images/before.png" alt="Before using Skinthesis" width={340} height={400} className="w-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,.12)]" style={{ height: 'auto' }} />
              <div className="absolute top-4 left-4 bg-[rgba(26,45,74,.8)] text-white text-[0.75rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full">Before</div>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom,transparent,#ccc,transparent)' }} />
              <span className="font-playfair text-[1.1rem] text-[#aaa] italic">vs</span>
              <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom,transparent,#ccc,transparent)' }} />
            </div>
            <div className="fade-in delay-1 relative flex-1 max-w-[340px]">
              <Image src="/images/after.png" alt="After using Skinthesis" width={340} height={400} className="w-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,.12)]" style={{ height: 'auto' }} />
              <div className="absolute top-4 left-4 bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white text-[0.75rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full">After</div>
            </div>
          </div>
          <p className="text-[#999] text-[0.85rem] tracking-[0.04em]">Results shown after consistent use of the Serum Fusion Veil Duo system.</p>
        </div>
      </section>

      {/* ─── PRODUCT ──────────────────────────────────────────── */}
      <ProductSection />

      {/* ─── PIPELINE ─────────────────────────────────────────── */}
      <PipelineSection />

      {/* ─── TARGET CUSTOMER ──────────────────────────────────── */}
      <section id="who" className="py-32 px-[5%] bg-[#1a2d4a]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[0.72rem] tracking-[0.25em] uppercase text-[#5ba4cf] font-medium mb-4">Who It&apos;s For</div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-white mb-4">
            Made for <em>every skin</em><br />that retinol left behind.
          </h2>
          <p className="text-white/60 max-w-[560px] mb-16 leading-[1.7]">Skinthesis was built for the ingredient-literate generation — people who want results without compromise.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'The Skintellectual',
                age: 'Ages 25–40',
                size: '8–12M users',
                desc: 'Ingredient-literate, DTC-native, early adopter of preventive skincare. Wants science, not marketing fluff.',
                delay: '',
                img: '/images/audience2.png',
              },
              {
                label: 'The Conscious Minimalist',
                age: 'Ages 35–50',
                size: '6–10M users',
                desc: 'Retinol-intolerant. High willingness to pay for results without irritation, peeling, or sensitivity.',
                delay: 'delay-1',
                img: '/images/audience3.png',
              },
              {
                label: 'Sensitive Skin',
                age: 'All Ages',
                size: 'High LTV',
                desc: 'Previously excluded by harsh actives. Skinthesis is the first luxury anti-aging option that works for them.',
                delay: 'delay-2',
                img: '/images/audience.png',
              },
            ].map((customer) => (
              <div key={customer.label} className={`fade-in ${customer.delay} bg-white/5 border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/8`}>
                <div className="px-8 pt-8 pb-4 flex justify-center">
                  <div className="w-24 h-24 rounded-full border-2 border-white/20 overflow-hidden relative">
                    <Image src={customer.img} alt={customer.label} fill className="object-cover object-center" />
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <h3 className="font-playfair text-[1.15rem] text-white mb-1 text-center">{customer.label}</h3>
                  <p className="text-[#5ba4cf] text-[0.72rem] tracking-[0.15em] uppercase mb-2 text-center">{customer.age}</p>
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#5ba4cf]/20 text-[#5ba4cf] text-[0.72rem] px-3 py-1 rounded-full">{customer.size}</div>
                  </div>
                  <p className="text-white/55 text-[0.88rem] leading-[1.65] text-center">{customer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────── */}
      <section id="team" className="py-32 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className={sectionLabel}>The People</div>
          <h2 className={sectionTitle}>Our Founding <em>Team</em></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={member.name} className={`fade-in ${idx > 0 ? `delay-${idx}` : ''} text-center p-8 bg-[#f7f3ef] rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(44,95,138,.15)]`}>
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto mb-5 border-[3px] border-white shadow-[0_6px_20px_rgba(44,95,138,.15)]">
                  {/* TODO: Update team photos if new headshots are available */}
                  <Image src={member.img} alt={member.name} width={120} height={120} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-playfair text-[1.05rem] mb-1.5 text-[#1a1a2e]">{member.name}</h3>
                <p className="text-[0.78rem] tracking-[0.1em] uppercase text-[#5ba4cf] mb-2 font-medium">{member.role}</p>
                <p className="text-[0.82rem] text-[#999]">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-32 px-[5%] bg-[#1a2d4a] relative overflow-hidden text-center">
        {/* Gold radial glow */}
        <div className="absolute rounded-full pointer-events-none" style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(201,168,76,.08) 0%,transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        {/* Blue radial glow */}
        <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, background: 'radial-gradient(circle,rgba(91,164,207,.1) 0%,transparent 70%)', top: '30%', left: '40%', transform: 'translate(-50%,-50%)' }} />
        {/* Gold top border line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }} />

        <div className="relative z-10">
          <div className="text-[0.72rem] tracking-[0.25em] uppercase font-medium mb-5" style={{ color: '#c9a84c' }}>Get In Touch</div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] mb-3" style={{ color: '#c9a84c' }}>
            The window is open.
          </h2>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-white mb-8 italic font-cormorant">
            Let&apos;s build it together.
          </h2>
          <div className="flex gap-12 justify-center my-8 flex-wrap">
            <a href="tel:+17324069278" className="flex items-center gap-3 text-white/70 text-[1rem] transition-colors duration-300 hover:text-[#c9a84c]">
              <span className="text-xl">☎</span>+1 732-406-9278
            </a>
            <a href="mailto:skinthesiscosmetics@gmail.com" className="flex items-center gap-3 text-white/70 text-[1rem] transition-colors duration-300 hover:text-[#c9a84c]">
              <span className="text-xl">✉</span>skinthesiscosmetics@gmail.com
            </a>
          </div>
          <p className="text-white/30 text-[0.78rem] tracking-[0.15em] uppercase">U.S.-Based Biotech Beauty Startup · Est. 2026</p>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer id="footer" className="bg-[#111927] py-16 px-[5%] pb-8 text-white/60">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-playfair text-[1.8rem] font-black text-white/90 mb-10">skinthesis</div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-12 pb-10 border-b border-white/[0.08] mb-6">
            <div className="flex flex-col gap-2.5">
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-white/40 mb-1">Navigate</p>
              {[
                { href: '#why-now', label: 'Why Now' },
                { href: '#tech', label: 'Science' },
                { href: '#product', label: 'Product' },
                { href: '#pipeline', label: "What's Next" },
                { href: '#team', label: 'Team' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="text-[0.88rem] text-white/55 transition-colors duration-200 hover:text-[#5ba4cf]">{label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-white/40 mb-1">Legal</p>
              {['Privacy Policy', 'Terms of Use', 'Clinical References'].map((label) => (
                <a key={label} href="#" className="text-[0.88rem] text-white/55 transition-colors duration-200 hover:text-[#5ba4cf]">{label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-white/40 mb-1">Join the Waitlist</p>
              <p className="text-[0.85rem] text-[#aaa]">Be first to know when Serum Fusion Veil Duo™ launches.</p>
              <div className="flex gap-2.5 mt-1">
                <input type="email" placeholder="your@email.com" className="flex-1 bg-white/[0.07] border border-white/[0.12] rounded-lg px-4 py-2.5 text-white text-[0.85rem] outline-none transition-colors duration-300 focus:border-[#5ba4cf]" />
                <button className="bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white border-none rounded-lg px-5 py-2.5 text-[0.82rem] cursor-pointer whitespace-nowrap transition-opacity duration-300 hover:opacity-85">Notify Me</button>
              </div>
            </div>
          </div>
          <p className="text-[0.8rem] text-white/25 tracking-[0.04em]">© 2026 Skinthesis Cosmetics. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
