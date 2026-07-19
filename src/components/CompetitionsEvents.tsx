function BracketTree() {
  const nodes = [
    { y: 22 }, { y: 74 }, { y: 126 }, { y: 178 },
  ]
  return (
    <svg viewBox="0 0 300 220" fill="none" className="w-full max-w-[320px]" xmlns="http://www.w3.org/2000/svg">
      {nodes.map((n, i) => (
        <rect key={i} x="0" y={n.y - 12} width="86" height="24" rx="4" fill="#4a4a4a" />
      ))}
      <rect x="120" y={48 - 12} width="86" height="24" rx="4" fill="#4a4a4a" />
      <rect x="120" y={152 - 12} width="86" height="24" rx="4" fill="#4a4a4a" />
      <rect x="214" y={100 - 12} width="86" height="24" rx="4" fill="#4a4a4a" />

      <path d="M86 22H105V48H120" stroke="#ff4c4c" strokeWidth="1.5" fill="none" />
      <path d="M86 74H105V48H120" stroke="#ff4c4c" strokeWidth="1.5" fill="none" />
      <path d="M86 126H105V152H120" stroke="#ff4c4c" strokeWidth="1.5" fill="none" />
      <path d="M86 178H105V152H120" stroke="#ff4c4c" strokeWidth="1.5" fill="none" />

      <path d="M206 48H214" stroke="#ff4c4c" strokeWidth="1.5" fill="none" />
      <path d="M206 152H214" stroke="#ff4c4c" strokeWidth="1.5" fill="none" />
      <path d="M206 48V100M206 152V100M206 100H214" stroke="#ff4c4c" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

const upcomingEvents = [
  { city: 'Mumbai', date: '11/11/25', location: 'BKC', category: 'Lorem' },
  { city: 'Delhi', date: '11/11/25', location: 'BKC', category: 'Lorem' },
]

const pastResults = [
  { title: 'Bengaluru Regionals', subtitle: 'Lorem Ipsum' },
  { title: 'Bengaluru Regionals', subtitle: 'Lorem Ipsum' },
  { title: 'Bengaluru Regionals', subtitle: 'Lorem Ipsum' },
]

export default function CompetitionsEvents() {
  return (
    <section className="relative bg-black py-20 md:py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,76,76,0.35), transparent 70%)' }}
      />

      <div className="relative max-w-container mx-auto px-6 md:px-10">
        <h2 className="font-display font-black uppercase text-[32px] sm:text-[40px] md:text-[46px] mb-12">
          Competitions &amp; Events
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="flex flex-col h-full">
            <p className="text-brand-red font-display font-bold uppercase tracking-wide mb-4">Live Now</p>
            <div className="flex-1 bg-ink-850 border border-white/10 rounded-xl p-6 flex flex-col">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-xl font-bold">Bengaluru Regionals</h3>
                <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">Ongoing</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Lorem Ipsum</p>
              <div className="border-t border-white/10 pt-6 flex-1 flex items-center justify-center">
                <BracketTree />
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <p className="text-white font-display font-bold uppercase tracking-wide mb-4">Upcoming</p>
            <div className="flex-1 flex flex-col gap-6">
              {upcomingEvents.map((ev) => (
                <div key={ev.city} className="flex-1 bg-ink-850 border border-white/10 rounded-xl p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4">Event in {ev.city}</h3>
                  <div className="flex justify-between text-sm mb-6">
                    <div>
                      <p className="text-gray-400">Date</p>
                      <p className="font-semibold">{ev.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="font-semibold">{ev.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Category</p>
                      <p className="font-semibold">{ev.category}</p>
                    </div>
                  </div>
                  <button className="w-full mt-auto bg-brand-gradient text-white font-bold text-sm py-3 rounded-md hover:brightness-110 transition">
                    REGISTER
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <p className="text-white font-display font-bold uppercase tracking-wide mb-4">Past Results</p>
            <div className="flex-1 bg-ink-850 border border-white/10 rounded-xl p-6 flex flex-col">
              {pastResults.map((r, i) => (
                <div key={i} className={i !== 0 ? 'pt-5 mt-5 border-t border-white/10' : ''}>
                  <h4 className="font-bold">{r.title}</h4>
                  <p className="text-gray-400 text-sm">{r.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
