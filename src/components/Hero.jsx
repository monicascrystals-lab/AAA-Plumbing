import Icon from './Icon.jsx';

const heroVideos = import.meta.glob('../assets/videos/*.{mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export default function Hero() {
  const video = Object.values(heroVideos)[0];

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-image" />
      {video && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=2000&q=85"
        >
          <source src={video} />
        </video>
      )}
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light"><span className="status-dot" /> WEST COAST PLUMBING · AVAILABLE 24/7</p>
          <h1 id="hero-title">All your plumbing needs <em>satisfied.</em></h1>
          <p className="hero-lede">
            Professional plumbing maintenance, repairs, installations and emergency services across the West Coast of South Africa.
          </p>
          <div className="hero-trust"><Icon name="check" size={18} /> PIRB registered <span /> West Coast based <span /> 24/7 emergency plumbing</div>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="tel:+27847511475"><Icon name="phone" /> Call 084 751 1475</a>
            <a className="button button-whatsapp button-large" href="https://wa.me/27847511475" target="_blank" rel="noreferrer"><Icon name="whatsapp" /> WhatsApp us</a>
            <a className="hero-email-link" href="mailto:tony@aaaplumbing.co.za"><Icon name="mail" size={18} /> Email us</a>
          </div>
        </div>
        <div className="hero-note">
          <span className="hero-note-icon"><Icon name="clock" size={21} /></span>
          <span><strong>Plumbing emergency?</strong><small>Call anytime, day or night.</small></span>
          <a href="tel:+27847511475" aria-label="Call for emergency plumbing"><Icon name="arrow" /></a>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}
