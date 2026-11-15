import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ContentSections from './components/ContentSections.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import FloatingContactButtons from './components/FloatingContactButtons.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <ContentSections />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
