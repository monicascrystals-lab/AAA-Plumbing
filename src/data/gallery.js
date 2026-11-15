import kitchenPlumbing from '../assets/images/gallery/kitchen-plumbing.jpg';
import bathroomFittings from '../assets/images/gallery/bathroom-fittings.jpg';
import drainCleaning from '../assets/images/gallery/drain-cleaning.png';
import geyserInstallation from '../assets/images/gallery/geyser-installation.jpg';
import showerBefore from '../assets/images/gallery/shower-before.png';
import showerAfter from '../assets/images/gallery/shower-after.png';
import toiletBefore from '../assets/images/gallery/toilet-before.jpg';
import toiletAfter from '../assets/images/gallery/toilet-after.jpg';
import roofBefore from '../assets/images/gallery/roof-before.jpg';
import roofAfter from '../assets/images/gallery/roof-after.jpg';
import solarBefore from '../assets/images/gallery/sun-before.jpg';
import solarAfter from '../assets/images/gallery/sun-after.jpg';

export const galleryImages = [
  {
    src: kitchenPlumbing,
    alt: 'Clean, modern kitchen fixtures and plumbing',
    label: 'Kitchen plumbing',
  },
  {
    src: bathroomFittings,
    alt: 'Modern bathroom basin and fittings',
    label: 'Bathroom fittings',
  },
  {
    src: drainCleaning,
    alt: 'Plumber working on a pipe under a sink',
    label: 'Blocked drain clearing',
  },
  {
    src: geyserInstallation,
    alt: 'Contemporary home interior with carefully finished fixtures',
    label: 'Geyser installations',
  },
];

export const comparisonPairs = [
  {
    title: 'Shower renovation',
    beforeImage: showerBefore,
    afterImage: showerAfter,
    beforeAlt: 'Shower area before renovation, with an unfinished tiled base',
    afterAlt: 'Shower area after renovation, with a glass enclosure',
  },
  {
    title: 'Toilet installation',
    beforeImage: toiletBefore,
    afterImage: toiletAfter,
    beforeAlt: 'Bathroom before toilet installation, with the waste pipe exposed',
    afterAlt: 'Toilet installed in a tiled bathroom',
  },
  {
    title: 'Roof work',
    beforeImage: roofBefore,
    afterImage: roofAfter,
    beforeAlt: 'Roof before work, showing a tiled roof surface',
    afterAlt: 'Roof after work, with tools and materials visible',
  },
  {
    title: 'Solar panel installation',
    beforeImage: solarBefore,
    afterImage: solarAfter,
    beforeAlt: 'Roof before solar panels were installed',
    afterAlt: 'Roof with solar panels installed',
  },
];
