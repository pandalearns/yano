export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <img src="/logo.png" alt="YANO Heavy Equipment Rental" style={{ height: 52, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: 18 }} />
          <p>Serving CALABARZON with reliable heavy equipment and skilled operators. Rain or shine, we keep your project moving.</p>
        </div>
        <div className="fcol">
          <p className="fcol-title">Navigation</p>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="fcol">
          <p className="fcol-title">Contact Us</p>
          <ul>
            <li><a href="tel:09171338462">0917-133-8462</a></li>
            <li><a href="tel:09171361046">0917-136-1046</a></li>
            <li><a href="mailto:yanoequipment@gmail.com">yanoequipment@gmail.com</a></li>
            <li><a href="https://wa.me/639171338462" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>&copy; 2025 YANO Heavy Equipment Rental. All rights reserved.</p>
        <p>CALABARZON, Philippines</p>
      </div>
    </>
  )
}
