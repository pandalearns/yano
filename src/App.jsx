import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="stripe" />
        <Stats />
        <Services />
        <About />
        <Gallery />
        <div className="stripe" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
