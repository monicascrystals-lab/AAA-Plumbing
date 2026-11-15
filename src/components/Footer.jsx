import Icon from './Icon.jsx';
import logoUrl from '../assets/images/aaa-plumbing-logo.png';

const footerLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Reviews', '#reviews'],
  ['Contact', '#contact'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#home">
            <img className="brand-logo" src={logoUrl} alt="AAA Plumbing & All logo" />
          </a>
          <p>All your plumbing needs satisfied.</p>
          <small className="legal-name">Tony Seaman Plumbing &amp; All (Pty) Ltd</small>
        </div>
        <div className="footer-nav">
          <h3>Explore</h3>
          <nav aria-label="Footer navigation">
            {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
        </div>
        <div className="footer-contact">
          <h3>Get in touch</h3>
          <a href="tel:+27847511475"><Icon name="phone" size={16} /> 084 751 1475</a>
          <a href="mailto:tony@aaaplumbing.co.za"><Icon name="mail" size={16} /> tony@aaaplumbing.co.za</a>
          <span><Icon name="pin" size={16} /> West Coast, South Africa</span>
          <span><Icon name="clock" size={16} /> Open 24 hours</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} AAA Plumbing &amp; All</span>
        <span className="footer-credentials">PIRB Registered <i>·</i> EME <i>·</i> B-BBEE Level 4</span>
      </div>
    </footer>
  );
}
