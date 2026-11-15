import { useState } from 'react';
import Icon from './Icon.jsx';
import logoUrl from '../assets/images/aaa-plumbing-logo.png';

const links = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Reviews', '#reviews'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span><Icon name="pin" size={15} /> Proudly serving the West Coast, South Africa</span>
          <a href="tel:+27847511475"><Icon name="phone" size={15} /> 084 751 1475 <b>· Open 24 hours</b></a>
        </div>
      </div>
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="AAA Plumbing & All home" onClick={closeMenu}>
          <img className="brand-logo" src={logoUrl} alt="AAA Plumbing & All logo" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <div className="nav-actions">
            <a className="button button-outline button-small" href="https://wa.me/27847511475" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={17} /> WhatsApp
            </a>
            <a className="button button-primary button-small" href="tel:+27847511475">
              <Icon name="phone" size={16} /> Call now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
