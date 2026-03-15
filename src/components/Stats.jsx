import { useEffect, useRef, useState } from 'react'

function useCounter(target, duration = 1800) {
  const [value, setValue] = useState(0)
  const started = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.floor(eased * target))
          if (p < 1) requestAnimationFrame(tick)
          else setValue(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return { ref, value }
}

function Stat({ target, label }) {
  const { ref, value } = useCounter(target)
  return (
    <div className="stat" ref={ref}>
      <span className="stat-n">{value}+</span>
      <span className="stat-l">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <div id="stats" className="stats">
      <Stat target={10} label="Years of Service" />
      <Stat target={50} label="Equipment Units" />
      <Stat target={5} label="Provinces Covered" />
      <Stat target={500} label="Projects Completed" />
    </div>
  )
}
