import { WrenchIcon, LandmarkIcon, PodiumStarIcon, PeopleGroupIcon } from './icons'

const steps = [
  { icon: WrenchIcon, label: 'Step 1', title: 'Build Your Team' },
  { icon: LandmarkIcon, label: 'Step 2', title: 'Compete Across India' },
  { icon: PodiumStarIcon, label: 'Step 3', title: 'Earn National Ranking & Value' },
  { icon: PeopleGroupIcon, label: 'Step 4', title: 'Join The League' },
]

export default function UserJourney() {
  return (
    <section className="relative bg-black py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 md:px-10 text-center">
        <p className="text-brand-red font-display font-bold uppercase tracking-wide mb-3">User Journey</p>
        <h2 className="font-display font-black uppercase text-[30px] sm:text-[38px] md:text-[44px]">
          Your Path To The League
        </h2>
        <p className="text-gray-400 mt-3">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-4 relative">
          <div className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-brand-blue/70" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative flex flex-col items-center">
                <div className="h-[120px] w-[120px] rounded-full bg-ink-800 border-[6px] border-ink-700 flex items-center justify-center relative z-10">
                  <div className="h-full w-full rounded-full border-2 border-brand-blue flex items-center justify-center">
                    <Icon className="h-11 w-11 text-white" />
                  </div>
                </div>
                <div className="w-px h-6 bg-ink-600 mt-1" />
                <p className="text-brand-red font-display font-bold uppercase text-sm tracking-wide mt-1">
                  {step.label}
                </p>
                <p className="font-display font-extrabold uppercase mt-2 text-[15px] leading-tight max-w-[180px]">
                  {step.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
