export default function Hero() {
  return (
    <section id="hero" className="hero">
      <video
        className="hero-video"
        src={`${import.meta.env.BASE_URL}hero.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-video-overlay" />
      <div className="hero-accent-bar" />

      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-dot" />
          <span className="hero-tag-text">Now Serving All of CALABARZON</span>
        </div>
        <h1 className="hero-title">
          Heavy Equipment<br />for Every Project
        </h1>
        <p className="hero-sub">
          Professional-grade machinery with flexible rental terms and skilled operators.
          Rain or shine, YANO keeps your project moving.
        </p>
        <div className="hero-btns">
          <a href="#services" className="btn-solid">View Our Fleet</a>
          <a href="#contact" className="btn-outline">Get a Quote</a>
        </div>
        <div className="hero-phones">
          <div className="hero-phone-item">
            <span className="hero-phone-label">Main Line</span>
            <a href="tel:09171338462" className="hero-phone-num">0917-133-8462</a>
          </div>
          <div className="hero-phone-divider" />
          <div className="hero-phone-item">
            <span className="hero-phone-label">Alternative</span>
            <a href="tel:09171361046" className="hero-phone-num">0917-136-1046</a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
