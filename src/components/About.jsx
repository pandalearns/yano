import { useReveal } from '../hooks/useReveal'

const reasons = [
  { num: '01', title: 'All-Weather Ready', desc: "Our equipment and operators are prepared for any condition. Rainy season delays? Not on our watch. We run 365 days a year." },
  { num: '02', title: 'Fast Response', desc: "We mobilize quickly across CALABARZON. Our team deploys so you don't lose a single valuable workday." },
  { num: '03', title: 'Operators Included', desc: "Every machine comes with a certified, experienced operator. Our team arrives ready to work safely and efficiently." },
  { num: '04', title: 'Full Region Coverage', desc: "Serving Cavite, Laguna, Batangas, Rizal, and Quezon. Wherever your project is, YANO is within reach." },
]

function WhyCard({ reason, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="why-card" ref={ref}>
      <div className="why-n">{reason.num}</div>
      <h3 className="why-title">{reason.title}</h3>
      <p className="why-desc">{reason.desc}</p>
    </div>
  )
}

export default function About() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal(1)
  const bodyRef = useReveal(2)
  const ctaRef = useReveal(3)

  return (
    <section id="about" className="about">
      <div className="about-left">
        <p className="eyebrow" ref={eyebrowRef}>Why Choose Us</p>
        <h2 className="sec-title" ref={titleRef}>The YANO<br />Difference</h2>
        <p ref={bodyRef}>
          Over a decade serving construction projects across all five provinces of CALABARZON.
          From small excavation jobs to large-scale infrastructure builds — YANO delivers.
        </p>
        <a href="#contact" className="about-arrow" ref={ctaRef}>
          Start a project with us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="about-right">
        {reasons.map((r, i) => (
          <WhyCard key={r.num} reason={r} delay={i % 2} />
        ))}
      </div>
    </section>
  )
}
