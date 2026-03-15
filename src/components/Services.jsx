import { useReveal } from '../hooks/useReveal'

const services = [
  {
    num: '01', name: 'Excavators',
    desc: 'Full-size and mini excavators for digging, trenching, and demolition. Available with experienced operators for any terrain.',
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="14" width="10" height="7" rx="1"/><rect x="3" y="10" width="7" height="5" rx="1"/><line x1="10" y1="10" x2="17" y2="5"/><line x1="17" y1="5" x2="22" y2="10"/><line x1="19" y1="13" x2="22" y2="10"/></svg>,
  },
  {
    num: '02', name: 'Bulldozers',
    desc: 'Heavy-duty bulldozers for land clearing, grading, and earthmoving. Built to handle tough terrain in any weather condition.',
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="10" width="17" height="9" rx="1"/><rect x="3" y="7" width="9" height="5" rx="1"/><rect x="1" y="17" width="19" height="4" rx="1"/><line x1="19" y1="13" x2="23" y2="13"/><line x1="21" y1="9" x2="23" y2="13"/><line x1="21" y1="17" x2="23" y2="13"/></svg>,
  },
  {
    num: '03', name: 'Dump Trucks',
    desc: 'High-capacity dump trucks for hauling soil, gravel, and construction materials across your CALABARZON project sites.',
    icon: <svg viewBox="0 0 24 24"><rect x="1" y="8" width="15" height="11" rx="1"/><path d="M16 12h4l3 5v3H16"/><circle cx="5.5" cy="19" r="2"/><circle cx="19.5" cy="19" r="2"/></svg>,
  },
  {
    num: '04', name: 'Backhoe Loaders',
    desc: 'Versatile backhoe loaders ideal for road work, utility installation, and general construction tasks.',
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="12" width="12" height="8" rx="1"/><rect x="3" y="8" width="7" height="5" rx="1"/><rect x="1" y="18" width="14" height="3" rx="1"/><path d="M14 14 Q18 10 20 7 L23 9 L21 16"/><path d="M21 16 L17 20"/></svg>,
  },
  {
    num: '05', name: 'Road Rollers',
    desc: 'Compactors and road rollers for asphalt paving, soil compaction, and road construction projects.',
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="16" r="6"/><circle cx="12" cy="16" r="3"/><rect x="8" y="3" width="8" height="7" rx="1"/><line x1="12" y1="10" x2="12" y2="13"/></svg>,
  },
  {
    num: '06', name: 'Cranes & Lifts',
    desc: 'Mobile cranes and lifting equipment for construction, infrastructure, and industrial applications.',
    icon: <svg viewBox="0 0 24 24"><line x1="7" y1="3" x2="7" y2="22"/><line x1="7" y1="5" x2="21" y2="9"/><line x1="21" y1="9" x2="21" y2="14"/><line x1="7" y1="7" x2="3" y2="14"/><rect x="17" y="14" width="7" height="5" rx="1"/><line x1="4" y1="21" x2="10" y2="21"/></svg>,
  },
]

function ServiceCard({ svc, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="svc-card" ref={ref}>
      <p className="svc-num">{svc.num}</p>
      <div className="svc-icon">{svc.icon}</div>
      <h3 className="svc-name">{svc.name}</h3>
      <p className="svc-desc">{svc.desc}</p>
    </div>
  )
}

export default function Services() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal(1)
  const descRef = useReveal()

  return (
    <section id="services" className="services sec-pad">
      <div className="sec-header">
        <div>
          <p className="eyebrow" ref={eyebrowRef}>What We Offer</p>
          <h2 className="sec-title" ref={titleRef}>Heavy Equipment<br />For Every Job</h2>
        </div>
        <p className="sec-desc" ref={descRef}>
          From excavation to grading, YANO provides the right machine with a skilled operator for your project — delivered on time, every time.
        </p>
      </div>
      <div className="svc-grid">
        {services.map((svc, i) => (
          <ServiceCard key={svc.num} svc={svc} delay={i % 3} />
        ))}
      </div>
    </section>
  )
}
