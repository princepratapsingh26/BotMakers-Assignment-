import { MedalIcon, GavelIcon, BriefcaseIcon, LightningIcon, ShieldIcon } from './icons'

const benefits = [
  {
    icon: MedalIcon,
    title: 'National Recognition',
    desc: "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    icon: GavelIcon,
    title: 'Fair Judging',
    desc: 'Compete with confidence under standardized, expert-led evaluation.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Career Ops',
    desc: 'Bridge the gap between arena victories and top-tier tech placements.',
  },
  {
    icon: LightningIcon,
    title: 'High-Energy Eco',
    desc: 'Join a nationwide community of elite innovators and robotics athletes.',
  },
]

const leaderboard = [
  { rank: '02', score: '22000', color: 'bg-sky-500' },
  { rank: '03', score: '20030', color: 'bg-sky-500' },
  { rank: '04', score: '19500', color: 'bg-pink-500' },
  { rank: '05', score: '15060', color: 'bg-pink-500' },
  { rank: '06', score: '13865', color: 'bg-pink-500' },
  { rank: '07', score: '10954', color: 'bg-sky-500' },
  { rank: '08', score: '9057', color: 'bg-sky-500' },
]

export default function WhyRegister() {
  return (
    <section className="relative bg-black py-20 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10 grid lg:grid-cols-[1fr_380px] gap-14 items-start">
        <div>
          <p className="text-brand-red font-display font-bold uppercase tracking-wide mb-3">Why Register ?</p>
          <h2 className="font-display font-black uppercase text-[28px] sm:text-[36px] md:text-[42px] mb-12">
            The League Advantage
          </h2>

          <div className="flex flex-col gap-9">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="flex gap-5">
                  <Icon className="h-8 w-8 text-brand-red shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-extrabold uppercase text-lg mb-1.5">{b.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">"{b.desc}"</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-ink-900 p-5">
          <img
            src="/assets/leaderboard-circuit.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative">
            <p className="font-display font-bold uppercase tracking-widest text-center text-sm mb-4">
              Leaderboard
            </p>

            <div className="flex flex-col items-center mb-5">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center relative">
                <ShieldIcon className="h-8 w-8 text-white" />
                <span className="absolute -top-2 text-amber-300 text-lg">★</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-300">#01 - Player Name</p>
              <p className="text-2xl font-display font-black">508754</p>
            </div>

            <div className="flex flex-col gap-2">
              {leaderboard.map((row) => (
                <div
                  key={row.rank}
                  className="flex items-center justify-between bg-black/50 border border-white/10 rounded-md px-3 py-2 text-sm"
                >
                  <span className="text-gray-400 font-semibold w-6">{row.rank}</span>
                  <span className={`h-5 w-5 rounded-full ${row.color} flex items-center justify-center shrink-0`}>
                    <ShieldIcon className="h-3 w-3 text-white" />
                  </span>
                  <span className="flex-1 ml-2 text-gray-200">Player Name</span>
                  <span className="font-semibold">{row.score}</span>
                  <ShieldIcon className="h-4 w-4 text-gray-500 ml-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
