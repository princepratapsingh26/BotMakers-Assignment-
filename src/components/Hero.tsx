import Navbar from './Navbar'

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[755px] bg-black overflow-hidden">
      <Navbar />

      <div className="absolute inset-0">
        <img
          src="/assets/hero-arena.jpg"
          alt="Two combat robots clash in a sparking arena"
          className="absolute right-0 top-0 h-full w-[78%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>

      <div className="absolute right-6 md:right-10 top-[130px] md:top-[150px] z-20 flex items-center gap-3 bg-black/70 backdrop-blur-sm border border-white/10 rounded-md px-4 py-2 text-sm font-semibold">
        <span className="flex items-center gap-1.5 text-brand-red">
          <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
          LIVE
        </span>
        <span className="text-white/90 font-medium hidden sm:inline">: Episode 14 • Bengaluru Regionals</span>
        <a href="#watch" className="text-brand-red font-bold hover:underline">
          WATCH LIVE
        </a>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 md:px-10 pt-[230px] md:pt-[270px] pb-24">
        <h1 className="font-display font-black uppercase leading-[1.05] text-[42px] sm:text-[52px] md:text-[64px] lg:text-[68px] max-w-3xl">
          India's Ultimate
          <br />
          Robotics Arena
        </h1>

        <p className="mt-6 max-w-md text-lg md:text-xl text-gray-200 font-body font-medium leading-snug">
          Build.Compete.Rank.The National Ecosystem for Robotics Arena
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button className="bg-brand-gradient-br text-white font-bold tracking-wide text-sm px-8 py-4 rounded-md shadow-lg shadow-black/40 hover:brightness-110 transition">
            CREATE ACCOUNT
          </button>
          <button className="border border-white text-white font-bold tracking-wide text-sm px-8 py-4 rounded-md hover:bg-white/10 transition">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
    </section>
  )
}
