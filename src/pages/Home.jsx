import Navbar from '../components/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import FinalCTA from '../sections/FinalCTA.jsx'
import FermorMethod from '../sections/FermorMethod.jsx'
import FinancialDecisions from '../sections/FinancialDecisions.jsx'
import FinancialTools from '../sections/FinancialTools.jsx'
import Hero from '../sections/Hero.jsx'
import Insights from '../sections/Insights.jsx'
import SeeTheMath from '../sections/SeeTheMath.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FinancialDecisions />
        <FermorMethod />
        <FinancialTools />
        <SeeTheMath />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
