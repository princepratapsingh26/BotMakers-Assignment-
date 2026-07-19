import { YoutubeIcon, InstagramIcon, FacebookIcon, TwitterIcon } from './icons'

const BASE_URL = import.meta.env.BASE_URL

const signupCards = [
  { title: 'Become in Judge' },
  { title: 'Volunteer' },
  { title: 'Community Member' },
]

const sponsors = [
  { name: 'NIT Delhi', img: `${BASE_URL}assets/sponsor-nit-delhi.png` },
  { name: 'Indian Bit', img: `${BASE_URL}assets/sponsor-indian-bit.png` },
  { name: 'NIT Silchar', img: `${BASE_URL}assets/sponsor-nit-silchar.png` },
  { name: 'Robo Company', tag: 'Delhivery', img: `${BASE_URL}assets/sponsor-delhivery.png` },
  { name: 'IIT Bombay', img: `${BASE_URL}assets/sponsor-iit-bombay.png` },
  { name: 'Robo Company', tag: 'General Robotics', img: `${BASE_URL}assets/sponsor-general-robotics.png` },
]

const quickLinksCol1 = ['The Arena', 'Episodes', 'National Rankings', 'Programs', 'Rulebooks']
const quickLinksCol2 = ['Join the Team', 'Sponsorships', 'Help Center', 'Contact Us', 'Legal']

const socials = [
  { Icon: YoutubeIcon, label: 'YouTube' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
]

export default function JoinEcosystem() {
  return (
    <section className="relative bg-black pt-20 md:pt-24 pb-10">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <h2 className="font-display font-black uppercase text-[28px] sm:text-[36px] md:text-[42px] mb-10">
          Join The Ecosystem
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {signupCards.map((card) => (
            <div key={card.title} className="bg-ink-850 border border-white/10 rounded-xl p-6">
              <h3 className="font-display font-extrabold uppercase text-lg mb-5">{card.title}</h3>
              <div className="flex flex-col gap-3 mb-5">
                {['Name', 'Location', 'Enroll'].map((ph) => (
                  <input
                    key={ph}
                    type="text"
                    placeholder={ph}
                    disabled
                    className="bg-ink-700 border border-white/10 rounded-md px-4 py-2.5 text-sm text-gray-300 placeholder:text-gray-500"
                  />
                ))}
              </div>
              <button className="w-full bg-brand-gradient text-white font-bold text-sm py-3 rounded-md hover:brightness-110 transition">
                SIGN UP
              </button>
            </div>
          ))}
        </div>

        <h3 className="font-display font-bold uppercase text-xl mb-8">Sponsors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 mb-16">
          {sponsors.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={s.img} alt={s.name} className="h-9 w-9 object-contain shrink-0" />
              <div className="leading-tight">
                {s.tag && (
                  <p className="text-[10px] uppercase tracking-wide text-gray-500">{s.tag}</p>
                )}
                <p className="font-display font-bold uppercase text-sm">{s.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-10 pb-8 grid sm:grid-cols-3 gap-10">
          <div className="sm:col-span-2 grid grid-cols-2 gap-6">
            <div>
              <p className="font-display font-bold uppercase text-sm mb-4">Quick Links</p>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                {quickLinksCol1.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 sm:pt-[26px]">
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                {quickLinksCol2.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-display font-bold uppercase text-sm mb-4">Social Media</p>
            <div className="flex items-center gap-4">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white/80 hover:text-brand-red transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 pb-4">
          © {new Date().getFullYear()} BotLeague. All rights reserved.
        </p>
      </div>
    </section>
  )
}
