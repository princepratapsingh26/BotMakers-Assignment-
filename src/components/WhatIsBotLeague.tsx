import { CloseIcon, ArrowRightIcon, GearMIcon, BulbIcon, PersonGearsIcon, BrainCoinIcon } from './icons'

const features = [
  {
    n: '1.',
    title: 'Structured Events',
    desc: 'From one-off events to a year-round competitive season.',
  },
  {
    n: '2.',
    title: 'Digital Identity',
    desc: 'Your professional robotics legacy, tracked and verified.',
  },
  {
    n: '3.',
    title: 'National Ranking',
    desc: 'Benchmark your skills against the best engineers in India.',
  },
  {
    n: '4.',
    title: 'Career Pathway',
    desc: 'Turning arena victories into real-world industry opportunities.',
  },
]

const categories = [
  {
    icon: GearMIcon,
    title: 'Mini Makers',
    desc: 'Where Creativity Meets Logic.',
    highlighted: true,
  },
  {
    icon: BulbIcon,
    title: 'Junior Innovators',
    desc: 'Engineering & Strategy Fundamentals.',
    highlighted: false,
  },
  {
    icon: PersonGearsIcon,
    title: 'Young Engineers',
    desc: 'Advanced Wireless & Autonomous Control.',
    highlighted: false,
  },
  {
    icon: BrainCoinIcon,
    title: 'Robo Minds',
    desc: 'Elite Professional Sports & Robotics.',
    highlighted: false,
  },
]

function TechIllustration() {
  return (
    <svg viewBox="0 0 220 220" fill="none" className="w-full max-w-[240px] mx-auto text-white/70" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="110" r="34" stroke="currentColor" strokeWidth="2" />
      <text x="110" y="118" textAnchor="middle" fontSize="26" fill="currentColor" fontFamily="Orbitron, sans-serif">A</text>

      <rect x="14" y="18" width="34" height="42" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 28h22M20 36h22M20 44h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

      <circle cx="182" cy="34" r="18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="182" cy="34" r="6" stroke="currentColor" strokeWidth="1.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1={182 + 18 * Math.cos((deg * Math.PI) / 180)}
          y1={34 + 18 * Math.sin((deg * Math.PI) / 180)}
          x2={182 + 23 * Math.cos((deg * Math.PI) / 180)}
          y2={34 + 23 * Math.sin((deg * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.6"
        />
      ))}

      <rect x="16" y="164" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M27 164v-6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6" stroke="currentColor" strokeWidth="1.6" />

      <circle cx="184" cy="178" r="16" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="184" cy="178" r="5" stroke="currentColor" strokeWidth="1.6" />

      <path d="M48 38H90M110 76V60M150 46l-20 20M62 164l28-28M158 172l-24-24" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 4" />
    </svg>
  )
}

export default function WhatIsBotLeague() {
  return (
    <section className="relative bg-ink-900 py-20 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="flex items-start justify-between mb-12">
          <h2 className="font-display font-black uppercase text-[28px] sm:text-[34px] md:text-[38px]">
            What Is BotLeague?
          </h2>
          <button aria-label="Close" className="h-9 w-9 rounded-full bg-ink-700 flex items-center justify-center text-white/70 hover:text-white transition shrink-0">
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-x-16 gap-y-10 items-center mb-20">
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {features.map((f) => (
              <div key={f.n}>
                <span className="text-brand-red font-display font-bold text-lg">{f.n}</span>
                <h3 className="font-display font-extrabold uppercase text-lg mt-1 mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">"{f.desc}"</p>
              </div>
            ))}
          </div>
          <TechIllustration />
        </div>

        <h3 className="font-display font-black uppercase text-2xl md:text-3xl mb-8">Categories</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className={
                  'rounded-xl p-6 flex flex-col min-h-[280px] border ' +
                  (cat.highlighted
                    ? 'border-brand-gold bg-[#3a3226]'
                    : 'border-white/10 bg-ink-800')
                }
              >
                <div
                  className={
                    'h-16 w-16 rounded-full border-2 flex items-center justify-center mb-6 ' +
                    (cat.highlighted ? 'border-brand-gold' : 'border-brand-gold/80')
                  }
                >
                  <Icon className="h-8 w-8 text-brand-gold" />
                </div>
                <h4 className="font-display font-extrabold uppercase text-lg leading-tight mb-3">
                  {cat.title}
                </h4>
                <p className="text-gray-400 text-sm leading-snug flex-1">{cat.desc}</p>
                <a href="#learn-more" className="mt-6 inline-flex items-center gap-2 text-brand-red font-bold text-sm hover:gap-3 transition-all">
                  LEARN MORE <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
