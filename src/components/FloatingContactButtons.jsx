import Icon from './Icon.jsx';

export default function FloatingContactButtons() {
  return (
    <nav className="floating-contact" aria-label="Quick contact">
      <a href="https://wa.me/27847511475" target="_blank" rel="noreferrer" aria-label="Contact AAA Plumbing & All on WhatsApp">
        <Icon name="whatsapp" size={21} /><span>WhatsApp</span>
      </a>
      <a href="tel:+27847511475" aria-label="Call AAA Plumbing & All">
        <Icon name="phone" size={20} /><span>Call</span>
      </a>
      <a href="mailto:tony@aaaplumbing.co.za" aria-label="Email AAA Plumbing & All">
        <Icon name="mail" size={20} /><span>Email</span>
      </a>
    </nav>
  );
}
