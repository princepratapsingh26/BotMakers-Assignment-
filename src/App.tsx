import Hero from './components/Hero'
import CompetitionsEvents from './components/CompetitionsEvents'
import UserJourney from './components/UserJourney'
import WhatIsBotLeague from './components/WhatIsBotLeague'
import Sports from './components/Sports'
import WhyRegister from './components/WhyRegister'
import JoinEcosystem from './components/JoinEcosystem'

function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      <Hero />
      <CompetitionsEvents />
      <UserJourney />
      <WhatIsBotLeague />
      <Sports />
      <WhyRegister />
      <JoinEcosystem />
    </div>
  )
}

export default App
