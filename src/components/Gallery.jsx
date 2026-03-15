import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

function GalItem({ src, alt, delay }) {
  const [failed, setFailed] = useState(false)
  const ref = useReveal(delay)

  return (
    <div className={`gal-item${!src || failed ? ' gal-empty' : ''}`} ref={ref}>
      {src && !failed ? (
        <>
          <img src={src} alt={alt} onError={() => setFailed(true)} />
          <div className="gal-overlay" />
        </>
      ) : (
        <span>Photo Coming Soon</span>
      )}
    </div>
  )
}

export default function Gallery() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal(1)
  const descRef = useReveal()

  return (
    <section id="gallery" className="gallery sec-pad">
      <div className="sec-header">
        <div>
          <p className="eyebrow" ref={eyebrowRef}>Our Fleet</p>
          <h2 className="sec-title" ref={titleRef}>Equipment in Action</h2>
        </div>
        <p className="sec-desc" ref={descRef}>
          A look at our fleet across CALABARZON. Well-maintained machines ready for your toughest jobs.
        </p>
      </div>
      <div className="gal-grid">
        <GalItem src={`${import.meta.env.BASE_URL}image.png`} alt="YANO equipment at work" delay={0} />
        <GalItem src={`${import.meta.env.BASE_URL}image copy.png`} alt="YANO heavy equipment" delay={1} />
        <GalItem delay={2} />
        <GalItem delay={3} />
        <GalItem delay={4} />
      </div>
    </section>
  )
}
