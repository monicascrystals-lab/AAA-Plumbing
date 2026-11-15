import { useEffect, useState } from 'react';
import { galleryImages } from '../data/gallery.js';
import Icon from './Icon.jsx';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') setActiveImage(null);
      if (event.key === 'ArrowRight') {
        setActiveImage((current) => galleryImages[(galleryImages.indexOf(current) + 1) % galleryImages.length]);
      }
      if (event.key === 'ArrowLeft') {
        setActiveImage((current) => galleryImages[(galleryImages.indexOf(current) - 1 + galleryImages.length) % galleryImages.length]);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeImage]);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow">A CLOSER LOOK</p>
            <h2>Work built on <em>care.</em></h2>
          </div>
          <p>Thoughtful plumbing, practical solutions and quality finishes for homes and businesses across the West Coast. Illustrative stock photos are shown here until project photos are added.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              className={`gallery-tile gallery-tile-${index + 1}`}
              key={image.label}
              type="button"
              onClick={() => setActiveImage(image)}
              aria-label={`View image: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span className="gallery-caption">{image.label}<Icon name="arrow" size={18} /></span>
            </button>
          ))}
        </div>
      </div>
      {activeImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
        >
          <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close image viewer">
            <Icon name="close" size={25} />
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            type="button"
            aria-label="Previous image"
            onClick={() => setActiveImage((current) => galleryImages[(galleryImages.indexOf(current) - 1 + galleryImages.length) % galleryImages.length])}
          ><span aria-hidden="true">←</span></button>
          <figure className="lightbox-figure">
            <img src={activeImage.src} alt={activeImage.alt} />
            <figcaption>{activeImage.label}</figcaption>
          </figure>
          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            aria-label="Next image"
            onClick={() => setActiveImage((current) => galleryImages[(galleryImages.indexOf(current) + 1) % galleryImages.length])}
          ><span aria-hidden="true">→</span></button>
        </div>
      )}
    </section>
  );
}
