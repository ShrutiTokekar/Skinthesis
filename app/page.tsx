import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FadeInObserver from '@/components/FadeInObserver';
import ProductSection from '@/components/ProductSection';

interface TeamMember { name: string; role: string; exp: string; img: string; }
interface ProcessStep { num: string; img: string; alt: string; title: string; body: string; delay: string; }
interface CompRow { feature: string; retinoicAcid: string; retinol: string; vitaminC: string; dynasyn: string; retinoicClass?: string; retinolClass?: string; vitaminCClass?: string; dynasyClass?: string; }

const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Shreeya Tokekar', role: 'CEO / CTO', exp: 'Symrise · Coffee Elf · Labcorp', img: '/images/Shreeya.png' },
  { name: 'Apurva Ashok Tuwar', role: 'COO / Project Manager', exp: 'Capgemini', img: '/images/Apurva.png' },
  { name: 'Rishi Kiran Rajesh', role: 'CMO / Design Lead', exp: 'AgeBrilliantly', img: '/images/Rishi.png' },
  { name: 'Darius McKay', role: 'CFO', exp: 'Empire Consulting · Kean University', img: '/images/Darius.png' },
];

const COMPARISON_ROWS: CompRow[] = [
  { feature: 'Reduces Wrinkles', retinoicAcid: '✓', retinol: '✓', vitaminC: '✓', dynasyn: '✓' },
  { feature: 'Skin Irritation', retinoicAcid: 'High', retinol: 'Moderate', vitaminC: 'Moderate', dynasyn: 'None', retinoicClass: 'text-red-600', retinolClass: 'text-orange-500', vitaminCClass: 'text-orange-500', dynasyClass: 'text-green-600 font-semibold' },
  { feature: 'Light Stable', retinoicAcid: '✗', retinol: '✗', vitaminC: 'Partial', dynasyn: '✓', retinoicClass: 'text-red-600', retinolClass: 'text-red-600', vitaminCClass: 'text-orange-500', dynasyClass: 'text-green-600 font-semibold' },
  { feature: 'Safety Profile', retinoicAcid: 'Rx only', retinol: 'Cosmetic', vitaminC: 'Cosmetic', dynasyn: 'Cosmetic', dynasyClass: 'text-green-600 font-semibold' },
];

const PROCESS_STEPS: ProcessStep[] = [
  { num: '01', img: '/images/Process4.png', alt: 'Step 1', title: 'Single Pump Dispenses Both', body: 'One press releases the Tan Swirl Skin Tint and Lumi Veil Serum simultaneously from the dual-chamber bottle.', delay: '' },
  { num: '02', img: '/images/Process2.png', alt: 'Step 2', title: 'Blend on Fingertip', body: 'The tint and serum merge on your fingertip, creating a personalized fusion that adapts to your skin.', delay: 'delay-1' },
  { num: '03', img: '/images/Process3.png', alt: 'Step 3', title: 'Apply & Transform', body: 'The tint + SPF 30 stay on the surface for coverage and UV defense, while DynaSyn-26™ penetrates deep into the dermis.', delay: 'delay-2' },
];

const STATS: [string, string][] = [['750%', 'Collagen Boost'], ['0', 'Irritation'], ['SPF30', 'UV Defense']];
const sectionLabel = 'text-[0.72rem] tracking-[0.25em] uppercase text-[#6b8cae] font-medium mb-4';
const sectionTitle = 'font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#1a1a2e] mb-6';

export default function Home() {
  return (
    <>
      <Navbar />
      <FadeInObserver />

      {/* HERO */}
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
          <p className="text-white/75 text-[1.05rem] leading-[1.65] mb-9 max-w-[420px]">Patent-backed collagen technology meets effortless daily skincare. One pump. Real results.</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#product" className="inline-block px-9 py-3.5 rounded-full text-[0.92rem] font-medium tracking-wide bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white shadow-[0_6px_24px_rgba(44,95,138,.35)] transition-all duration-300 hover:-translate-y-0.5">Shop Now</a>
            <a href="#tech" className="inline-block px-9 py-3.5 rounded-full text-[0.92rem] font-medium tracking-wide bg-transparent text-white border border-white/60 transition-all duration-300 hover:bg-white/10">Learn the Science</a>
          </div>
          <div className="inline-block text-[0.72rem] tracking-[0.12em] uppercase text-white/50 border border-white/20 px-4 py-1.5 rounded-full">US Patent 10,695,275</div>
        </div>
        <div className="hero-bottle-wrap absolute right-[5%] z-[2]" style={{ top: '50%', width: 'clamp(220px,25vw,380px)' }}>
          <Image src="/images/viel.png" alt="Skinthesis Serum Fusion Veil" width={380} height={500} className="w-full rounded-3xl" style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,.35))' }} />
          <div className="absolute rounded-full" style={{ bottom: -20, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 40, background: 'rgba(91,164,207,.4)', filter: 'blur(20px)' }} />
        </div>
        <div className="hero-scroll-hint absolute bottom-8 flex flex-col items-center gap-2 text-white/40 text-[0.7rem] tracking-[0.15em] uppercase z-[2]" style={{ left: '50%' }}>
          <span>scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom,rgba(255,255,255,.4),transparent)' }} />
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="py-32 px-[5%] bg-[#f7f3ef]">
        <div className="max-w-[1100px] mx-auto">
          <div className={sectionLabel}>The Problem</div>
          <h2 className={sectionTitle}>Aging starts <em>deep in the skin.</em><br />Most products never get there.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: '⬇', title: 'Aging Starts Deep', body: 'Collagen decline begins in your dermis years before you see any wrinkles on the surface.', delay: '' },
              { icon: '⏱', title: 'Visible Signs Come Later', body: 'By the time you notice fine lines and sagging, significant collagen loss has already occurred.', delay: 'delay-1' },
              { icon: '✗', title: 'Current Solutions Fail', body: 'Retinol irritates. Peptides underperform. Collagen creams stay on the surface. Vitamin C is unstable.', delay: 'delay-2' },
            ].map((card) => (
              <div key={card.title} className={`fade-in ${card.delay} bg-white rounded-2xl p-10 shadow-[0_4px_30px_rgba(0,0,0,.06)] border border-black/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(44,95,138,.12)]`}>
                <div className="text-4xl mb-5 text-[#5ba4cf]">{card.icon}</div>
                <h3 className="font-playfair text-[1.25rem] mb-3 text-[#1a1a2e]">{card.title}</h3>
                <p className="text-[#666] leading-[1.65] text-[0.95rem]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section id="tech" className="py-32 px-[5%]" style={{ background: 'linear-gradient(180deg,#edf3f8 0%,#f7f3ef 100%)' }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center mb-24">
          <div>
            <div className={sectionLabel}>Our Technology</div>
            <h2 className={sectionTitle}>Breakthrough<br /><em>Technology</em></h2>
            <p className="text-[#555] leading-[1.75] text-[1rem] mb-7">DynaSyn-26™ is our patented collagen-activating compound, proven to boost collagen production by up to 750% without the irritation or side effects commonly associated with conventional anti-aging ingredients.</p>
            <div className="inline-block text-[0.75rem] tracking-[0.1em] uppercase bg-[#1a2d4a] text-white px-5 py-2 rounded-full mb-8">US Patent 10,695,275 B2 · Valid until ~2037</div>
            <div className="flex gap-10">
              {STATS.map(([num, label]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-playfair text-[2.2rem] font-bold text-[#2c5f8a] leading-none">{num}</span>
                  <span className="text-[0.78rem] tracking-[0.1em] uppercase text-[#999]">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image src="/images/formulation.png" alt="How DynaSyn-26 Works" width={600} height={450} className="w-full rounded-3xl shadow-[0_20px_60px_rgba(44,95,138,.2)]" style={{ height: 'auto' }} />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white text-[0.78rem] tracking-[0.12em] uppercase px-6 py-2 rounded-full whitespace-nowrap shadow-[0_6px_20px_rgba(44,95,138,.3)]">Clinically Proven</div>
          </div>
        </div>
        <div className="fade-in max-w-[1100px] mx-auto">
          <h3 className="font-playfair text-[1.6rem] mb-7 text-[#1a1a2e]">How We Compare</h3>
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,.08)]">
            <div className="grid text-white" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.1fr', background: '#1a2d4a' }}>
              {['Feature', 'Retinoic Acid', 'Retinol', 'Vitamin C', 'DynaSyn-26™'].map((h, i) => (
                <div key={h} className={`px-5 py-4 text-[0.78rem] tracking-[0.08em] uppercase font-medium flex items-center border-r border-white/5 ${i === 4 ? 'bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white font-bold' : 'text-white/70'}`}>{h}</div>
              ))}
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div key={row.feature} className={`grid ${i % 2 === 0 ? 'bg-white' : 'bg-[#f7f3ef]'}`} style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.1fr' }}>
                <div className="px-5 py-4 text-[0.9rem] font-medium text-[#1a1a2e] flex items-center border-r border-black/[0.04]">{row.feature}</div>
                <div className={`px-5 py-4 text-[0.9rem] flex items-center border-r border-black/[0.04] ${row.retinoicClass ?? 'text-[#444]'}`}>{row.retinoicAcid}</div>
                <div className={`px-5 py-4 text-[0.9rem] flex items-center border-r border-black/[0.04] ${row.retinolClass ?? 'text-[#444]'}`}>{row.retinol}</div>
                <div className={`px-5 py-4 text-[0.9rem] flex items-center border-r border-black/[0.04] ${row.vitaminCClass ?? 'text-[#444]'}`}>{row.vitaminC}</div>
                <div className={`px-5 py-4 text-[0.9rem] flex items-center bg-gradient-to-br from-[rgba(44,95,138,.08)] to-[rgba(91,164,207,.08)] ${row.dynasyClass ?? 'text-[#444]'}`}>{row.dynasyn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-32 px-[5%] bg-[#1a2d4a]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[0.72rem] tracking-[0.25em] uppercase text-[#5ba4cf] font-medium mb-4">How It Works</div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-white mb-6">Simple ritual.<br /><em>Powerful results.</em></h2>
          <p className="text-white/60 max-w-[580px] leading-[1.7] mb-16 text-[1rem]">A two-step system where science meets skincare. One step activates collagen at a biological level, and the second protects and enhances those results.</p>
          <div className="grid items-start gap-4" style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr' }}>
            {PROCESS_STEPS.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className={`fade-in ${step.delay} bg-white/5 border border-white/[0.08] rounded-2xl p-8 transition-colors duration-300 hover:bg-[rgba(91,164,207,.1)]`}>
                  <div className="font-playfair text-[3rem] font-black text-[rgba(91,164,207,.3)] leading-none mb-4">{step.num}</div>
                  <div className="w-full h-[300px] overflow-hidden rounded-xl mb-5 bg-white/[0.04]">
                    <Image src={step.img} alt={step.alt} width={400} height={300} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-playfair text-[1.1rem] text-white mb-2">{step.title}</h3>
                  <p className="text-white/55 text-[0.88rem] leading-[1.6]">{step.body}</p>
                </div>
                {idx < 2 && (
                  <div className="text-[2rem] text-[#5ba4cf] flex items-center justify-center opacity-50 pt-[100px]">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-32 px-[5%] bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <div className={sectionLabel}>Real Results</div>
          <h2 className={sectionTitle}>See the <em>difference.</em></h2>
          <div className="flex items-center gap-8 my-12 justify-center flex-wrap md:flex-nowrap">
            <div className="fade-in relative flex-1 max-w-[340px]">
              <Image src="/images/before.png" alt="Before" width={340} height={400} className="w-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,.12)]" style={{ height: 'auto' }} />
              <div className="absolute top-4 left-4 bg-[rgba(26,45,74,.8)] text-white text-[0.75rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full">Before</div>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom,transparent,#ccc,transparent)' }} />
              <span className="font-playfair text-[1.1rem] text-[#aaa] italic">vs</span>
              <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom,transparent,#ccc,transparent)' }} />
            </div>
            <div className="fade-in delay-1 relative flex-1 max-w-[340px]">
              <Image src="/images/after.png" alt="After" width={340} height={400} className="w-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,.12)]" style={{ height: 'auto' }} />
              <div className="absolute top-4 left-4 bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white text-[0.75rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full">After</div>
            </div>
          </div>
          <p className="text-[#999] text-[0.85rem] tracking-[0.04em]">Results shown after consistent use of the Serum Fusion Veil system.</p>
        </div>
      </section>

      {/* PRODUCT */}
      <ProductSection />

      {/* TEAM */}
      <section id="team" className="py-32 px-[5%]" style={{ background: 'linear-gradient(180deg,#edf3f8 0%,#f7f3ef 100%)' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className={sectionLabel}>The People</div>
          <h2 className={sectionTitle}>Our Founding <em>Team</em></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={member.name} className={`fade-in ${idx > 0 ? `delay-${idx}` : ''} text-center p-8 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(44,95,138,.15)]`}>
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto mb-5 border-[3px] border-[#edf3f8] shadow-[0_6px_20px_rgba(44,95,138,.15)]">
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

      {/* CONTACT */}
      <section id="contact" className="py-32 px-[5%] bg-[#1a2d4a] relative overflow-hidden text-center">
        <div className="absolute rounded-full pointer-events-none" style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(91,164,207,.15) 0%,transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="text-[0.72rem] tracking-[0.25em] uppercase font-medium mb-4 text-[#aac4e0]">Get In Touch</div>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.15] text-white mb-6">Let&apos;s build something<br /><em>beautiful together.</em></h2>
        <div className="flex gap-12 justify-center my-10 flex-wrap">
          <a href="tel:+17324069278" className="flex items-center gap-3 text-white/80 text-[1rem] transition-colors duration-300 hover:text-[#5ba4cf]"><span className="text-xl">☎</span>+1 732-406-9278</a>
          <a href="mailto:skinthesiscosmetics@gmail.com" className="flex items-center gap-3 text-white/80 text-[1rem] transition-colors duration-300 hover:text-[#5ba4cf]"><span className="text-xl">✉</span>skinthesiscosmetics@gmail.com</a>
        </div>
        <p className="text-white/35 text-[0.82rem] tracking-[0.12em] uppercase">U.S.-Based Biotech Beauty Startup · Est. 2026</p>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#111927] py-16 px-[5%] pb-8 text-white/60">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-playfair text-[1.8rem] font-black text-white/90 mb-10">skinthesis</div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-12 pb-10 border-b border-white/[0.08] mb-6">
            <div className="flex flex-col gap-2.5">
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-white/40 mb-1">Navigate</p>
              {['#tech', '#process', '#results', '#product', '#team'].map((href) => (
                <a key={href} href={href} className="text-[0.88rem] text-white/55 transition-colors duration-200 hover:text-[#5ba4cf]">{href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-white/40 mb-1">Legal</p>
              {['Privacy Policy', 'Terms of Use', 'Clinical References'].map((label) => (
                <a key={label} href="#" className="text-[0.88rem] text-white/55 transition-colors duration-200 hover:text-[#5ba4cf]">{label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-white/40 mb-1">Newsletter</p>
              <p className="text-[0.85rem] text-[#aaa]">Sign up for Skinthesis exclusive updates.</p>
              <div className="flex gap-2.5 mt-1">
                <input type="email" placeholder="your@email.com" className="flex-1 bg-white/[0.07] border border-white/[0.12] rounded-lg px-4 py-2.5 text-white text-[0.85rem] outline-none transition-colors duration-300 focus:border-[#5ba4cf]" />
                <button className="bg-gradient-to-br from-[#2c5f8a] to-[#5ba4cf] text-white border-none rounded-lg px-5 py-2.5 text-[0.82rem] cursor-pointer whitespace-nowrap transition-opacity duration-300 hover:opacity-85">Sign Up</button>
              </div>
            </div>
          </div>
          <p className="text-[0.8rem] text-white/25 tracking-[0.04em]">© 2026 Skinthesis Cosmetics. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}