import Icon from './Icon.jsx';
import Gallery from './Gallery.jsx';
import { services, serviceAreas } from '../data/services.js';
import { reviews } from '../data/reviews.js';
import aboutImage from '../assets/images/aaa-plumbing-1.png';
import areasVideo from '../assets/videos/aaa-vid2.mp4';

export default function ContentSections() {
  return (
    <>
      <section className="about-section section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <img
              src={aboutImage}
              alt="AAA Plumbing & All"
              loading="lazy"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT AAA PLUMBING &amp; ALL</p>
            <h2>Professional plumbing <em>across the West Coast.</em></h2>
            <p className="about-intro">Locally focused plumbing services for homes, businesses and building projects along the West Coast.</p>
            <p><strong>Tony Seaman Plumbing &amp; All (Pty) Ltd trading as AAA Plumbing &amp; All</strong> is led by owner and lead plumber Tony Seaman. From maintenance and repairs to installations and emergency call-outs, get in touch to discuss the plumbing work you need.</p>
            <div className="about-credentials">
              <span><Icon name="check" size={17} /> PIRB-registered plumber</span>
              <span><Icon name="check" size={17} /> EME</span>
              <span><Icon name="check" size={17} /> B-BBEE Level 4 accredited</span>
            </div>
            <a className="text-link" href="#contact">Get in touch <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>

      <section className="services-section section" id="services">
        <div className="container">
          <div className="section-heading heading-row">
            <div><p className="eyebrow">WHAT WE CAN HELP WITH</p><h2>Plumbing solutions, <em>all in one place.</em></h2></div>
            <p>From a small repair to a new project, talk to us about the right plumbing service for your property.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-top"><span className="service-icon"><Icon name={service.icon} size={22} /></span><span className="service-number">0{index + 1}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Ask about ${service.title}`}>Ask about this service <Icon name="arrow" size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="emergency-section" id="emergency">
        <div className="container emergency-inner">
          <span className="emergency-mark"><Icon name="clock" size={25} /></span>
          <div className="emergency-copy">
            <p className="eyebrow eyebrow-light">24/7 EMERGENCY PLUMBING</p>
            <h2>Plumbing emergency? <em>Call us now.</em></h2>
            <p>Burst pipe, blocked drain, leaking geyser or another urgent plumbing issue? Contact AAA Plumbing &amp; All for emergency assistance across the West Coast.</p>
          </div>
          <div className="emergency-actions">
            <a className="button button-emergency button-large" href="tel:+27847511475"><Icon name="phone" /> Call now</a>
            <a className="emergency-whatsapp" href="https://wa.me/27847511475" target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19} /> WhatsApp emergency</a>
          </div>
        </div>
      </section>

      <section className="why-section section">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">WHY AAA PLUMBING &amp; ALL</p>
            <h2>Good work. <em>Good people.</em></h2>
            <p>Dependable plumbing support from a local business that understands the area.</p>
          </div>
          <div className="why-grid">
            <article className="why-card"><span className="why-icon"><Icon name="check" size={22} /></span><h3>PIRB registered</h3><p>Professional plumbing services from a PIRB-registered plumber.</p></article>
            <article className="why-card"><span className="why-icon"><Icon name="clock" size={22} /></span><h3>24/7 emergency assistance</h3><p>Available around the clock for urgent plumbing issues.</p></article>
            <article className="why-card"><span className="why-icon"><Icon name="pin" size={22} /></span><h3>West Coast based</h3><p>Local service across towns throughout the West Coast.</p></article>
            <article className="why-card"><span className="why-icon"><Icon name="wrench" size={22} /></span><h3>Wide range of services</h3><p>From routine repairs to installations, renovations and new builds.</p></article>
          </div>
        </div>
      </section>

      <Gallery />

      <section className="reviews-section section" id="reviews">
        <div className="container">
          <div className="section-heading heading-row">
            <div><p className="eyebrow">CUSTOMER FEEDBACK</p><h2>Reviews from the <em>community.</em></h2></div>
            <p>We value honest feedback. This section is ready for real customer reviews when they are available.</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card review-placeholder" key={review.name}>
                <span className="review-tag">REVIEW PLACEHOLDER</span>
                <div className="review-stars" aria-label="Rating not yet provided">☆☆☆☆☆</div>
                <p>{review.text}</p>
                <div className="review-author"><span className="review-avatar">+</span><span><strong>{review.name}</strong><small>{review.location} · awaiting customer feedback</small></span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="areas-section section" id="areas">
        <video className="areas-video" autoPlay muted loop playsInline aria-hidden="true" tabIndex="-1" preload="metadata">
          <source src={areasVideo} type="video/mp4" />
        </video>
        <div className="areas-video-overlay" aria-hidden="true" />
        <div className="container areas-layout">
          <div className="areas-copy">
            <p className="eyebrow eyebrow-light">LOCAL SERVICE, WEST COAST</p>
            <h2>Serving the <em>West Coast.</em></h2>
            <p>Based in the region and available across local towns. Not sure if your property falls within our service area? Contact us and we’ll confirm availability.</p>
            <a className="button button-light" href="#contact">Check your area <Icon name="arrow" size={17} /></a>
          </div>
          <div className="areas-list">
            {serviceAreas.map((area, index) => (
              <div className="area-row" key={area}><span className="area-index">0{index + 1}</span><strong>{area}</strong><Icon name="pin" size={18} /></div>
            ))}
            <div className="area-row area-row-more"><span className="area-index">+</span><strong>Surrounding West Coast areas</strong><Icon name="arrow" size={18} /></div>
          </div>
        </div>
      </section>
    </>
  );
}
