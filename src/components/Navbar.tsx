const navLinks = [
  { label: 'Events', active: true },
  { label: 'Programs', active: false },
  { label: 'Community', active: false },
  { label: 'Ranks', active: false },
]

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="max-w-container mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex items-center">
          <img src="/assets/logo.png" alt="BotLeague" className="h-9 md:h-10 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-10 font-body font-semibold text-[15px] tracking-wide">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.label.toLowerCase()}`}
                className={
                  link.active
                    ? 'text-white pb-1 border-b-2 border-brand-red'
                    : 'text-gray-300 hover:text-white transition-colors'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-block border border-white/70 text-white text-sm font-bold tracking-wide px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors">
            LOGIN
          </button>
          <button className="bg-brand-gradient text-white text-sm font-bold tracking-wide px-6 py-2.5 rounded-md shadow-lg shadow-black/30 hover:brightness-110 transition">
            REGISTER NOW
          </button>
        </div>
      </nav>
    </header>
  )
}
