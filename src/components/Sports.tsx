const BASE_URL = import.meta.env.BASE_URL

const sports = [
  { title: 'Robo Race', img: `${BASE_URL}assets/sport-robo-race.jpg` },
  { title: 'Line Follower', img: `${BASE_URL}assets/sport-line-follower.jpg` },
  { title: 'RC Racing', img: `${BASE_URL}assets/sport-rc-racing.jpg` },
  { title: 'FPV Drone Racing & Aeromodelling', img: `${BASE_URL}assets/sport-fpv-drone.jpg` },
  { title: 'Robo Hockey', img: `${BASE_URL}assets/sport-robo-hockey.jpg` },
  { title: 'Robo War', img: `${BASE_URL}assets/sport-robo-war.jpg` },
]

function CircuitDecoration() {
  return (
    <svg viewBox="0 0 300 260" fill="none" className="w-full h-full text-white/10" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={i}
          d={`M${i * 30} 0 V${40 + i * 15} H${i * 30 + 60}`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 14 }).map((_, i) => (
        <circle key={i} cx={(i * 37) % 300} cy={(i * 53) % 260} r="3" fill="currentColor" />
      ))}
    </svg>
  )
}

export default function Sports() {
  return (
    <section className="relative bg-black py-20 md:py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[420px] h-[360px] pointer-events-none">
        <CircuitDecoration />
      </div>

      <div className="relative max-w-container mx-auto px-6 md:px-10">
        <p className="text-brand-red font-display font-bold uppercase tracking-wide mb-3">Sports</p>
        <h2 className="font-display font-black uppercase text-[30px] sm:text-[38px] md:text-[44px] mb-12">
          Competition Disciplines
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {sports.map((s) => (
            <div
              key={s.title}
              className="relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-ink-850 px-4 py-3">
                <p className="font-display font-bold text-sm md:text-[15px] leading-tight">{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
