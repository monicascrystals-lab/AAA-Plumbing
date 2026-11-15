import ContactForm from './ContactForm.jsx';
import Icon from './Icon.jsx';

const contactItems = [
  { icon: 'phone', label: 'Call Tony', detail: '084 751 1475', href: 'tel:+27847511475' },
  { icon: 'whatsapp', label: 'WhatsApp', detail: 'Send a message', href: 'https://wa.me/27847511475', external: true },
  { icon: 'mail', label: 'Email', detail: 'tony@aaaplumbing.co.za', href: 'mailto:tony@aaaplumbing.co.za' },
  { icon: 'pin', label: 'Service area', detail: 'West Coast, South Africa', href: '#areas' },
];

export default function ContactSection() {
  return (
    <>
      <section className="contact-section section" id="contact">
        <div className="container">
          <div className="section-heading contact-heading">
            <p className="eyebrow">LET'S GET IT SORTED</p>
            <h2>Need a plumber? <em>Get in touch.</em></h2>
            <p>Tell us what you need and where you are. For urgent plumbing assistance, call anytime.</p>
          </div>
          <div className="contact-layout">
            <aside className="contact-aside">
              <p className="eyebrow eyebrow-light">REACH OUT DIRECTLY</p>
              <h3>Here when you need us.</h3>
              <p className="contact-aside-copy">Talk to Tony about plumbing repairs, a new installation or an urgent issue.</p>
              <div className="contact-cards">
                {contactItems.map((item) => (
                  <a
                    className="contact-card"
                    href={item.href}
                    key={item.label}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    <span className="contact-card-icon"><Icon name={item.icon} size={19} /></span>
                    <span><small>{item.label}</small><strong>{item.detail}</strong></span>
                    <Icon name="arrow" size={17} />
                  </a>
                ))}
              </div>
              <div className="hours-note"><Icon name="clock" size={19} /><span><strong>Open 24 hours</strong><small>Emergency plumbing availability</small></span></div>
            </aside>
            <div className="form-panel">
              <div className="form-panel-heading">
                <span className="form-step">01 <i>/ ENQUIRY</i></span>
                <h3>How can we help?</h3>
                <p>Fields marked <span aria-hidden="true">*</span> are required.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="closing-cta" aria-labelledby="closing-heading">
        <div className="container closing-inner">
          <div><p className="eyebrow eyebrow-light">READY WHEN YOU ARE</p><h2 id="closing-heading">Need plumbing assistance today?</h2></div>
          <div className="closing-actions">
            <a className="button button-light button-large" href="tel:+27847511475"><Icon name="phone" /> Call now</a>
            <a className="button button-whatsapp button-large" href="https://wa.me/27847511475" target="_blank" rel="noreferrer"><Icon name="whatsapp" /> WhatsApp</a>
            <a className="closing-link" href="#contact">Request a quote <Icon name="arrow" size={17} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
