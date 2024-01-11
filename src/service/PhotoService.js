// src/service/PhotoService.js

// Terra Images
import terra1 from '../images/Terra/terra1.jpg';
import terra2 from '../images/Terra/terra2.jpg';
import terra3 from '../images/Terra/terra3.jpg';
import terra4 from '../images/Terra/terra4.jpg';

// Jupiter Images
import jupiter1 from '../images/Jupiter/jupiter1.jpg';
import jupiter2 from '../images/Jupiter/jupiter2.jpg';
import jupiter3 from '../images/Jupiter/jupiter3.jpg';
import jupiter4 from '../images/Jupiter/jupiter4.jpg';

// Mars Images
import marte1 from '../images/Marte/marte1.jpg';
import marte2 from '../images/Marte/marte2.jpg';
import marte3 from '../images/Marte/marte3.jpg';
import marte4 from '../images/Marte/marte4.jpg';
import marte5 from '../images/Marte/marte5.jpg';
import marte6 from '../images/Marte/marte6.jpg';
import marte7 from '../images/Marte/marte7.jpg';
import marte8 from '../images/Marte/marte8.jpg';
// Mercury Images
import mercur1 from '../images/Mercur/mercur1.jpg';
import mercur2 from '../images/Mercur/mercur2.jpg';
import mercur3 from '../images/Mercur/mercur3.jpg';
import mercur4 from '../images/Mercur/mercur4.jpg';


/// Neptun (Neptune) Images
import neptun1 from '../images/Neptun/neptun1.jpg';
import neptun2 from '../images/Neptun/neptun2.jpg';
import neptun3 from '../images/Neptun/neptun3.jpg';
import neptun4 from '../images/Neptun/neptun4.jpg';

// Saturn Images
import saturn1 from '../images/Saturn/saturn1.jpg';
import saturn2 from '../images/Saturn/saturn2.jpg';
import saturn3 from '../images/Saturn/saturn3.jpg';
import saturn4 from '../images/Saturn/saturn4.jpg';

// Uranus Images
import uranus1 from '../images/Uranus/uranus1.jpg';
import uranus2 from '../images/Uranus/uranus2.jpg';
import uranus3 from '../images/Uranus/uranus3.jpg';
import uranus4 from '../images/Uranus/uranus4.jpg';

// Venus Images
import venus1 from '../images/Venus/venus1.jpg';
import venus2 from '../images/Venus/venus2.jpg';
import venus3 from '../images/Venus/venus3.jpg';
import venus4 from '../images/Venus/venus4.jpg';

// Images object containing all planets
const images = {
  Terra: [
    { itemImageSrc: terra1, thumbnailImageSrc: terra1, alt: 'Terra 1' },
    { itemImageSrc: terra2, thumbnailImageSrc: terra2, alt: 'Terra 2' },
    { itemImageSrc: terra3, thumbnailImageSrc: terra3, alt: 'Terra 3' },
    { itemImageSrc: terra4, thumbnailImageSrc: terra4, alt: 'Terra 4' },
  ],
  Jupiter: [
    { itemImageSrc: jupiter1, thumbnailImageSrc: jupiter1, alt: 'Jupiter 1' },
    { itemImageSrc: jupiter2, thumbnailImageSrc: jupiter2, alt: 'Jupiter 2' },
    { itemImageSrc: jupiter3, thumbnailImageSrc: jupiter3, alt: 'Jupiter 3' },
    { itemImageSrc: jupiter4, thumbnailImageSrc: jupiter4, alt: 'Jupiter 4' },
  ],
  Marte: [
    { itemImageSrc: marte1, thumbnailImageSrc: marte1, alt: 'Descriere pentru Marte 1' },
    { itemImageSrc: marte2, thumbnailImageSrc: marte2, alt: 'Descriere pentru Marte 2' },
    { itemImageSrc: marte3, thumbnailImageSrc: marte3, alt: 'Descriere pentru Marte 3' },
    { itemImageSrc: marte4, thumbnailImageSrc: marte4, alt: 'Descriere pentru Marte 4' },
    { itemImageSrc: marte5, thumbnailImageSrc: marte5, alt: 'Descriere pentru Marte 4' },
    { itemImageSrc: marte6, thumbnailImageSrc: marte6, alt: 'Descriere pentru Marte 4' },
    { itemImageSrc: marte7, thumbnailImageSrc: marte7, alt: 'Descriere pentru Marte 4' },
    { itemImageSrc: marte8, thumbnailImageSrc: marte8, alt: 'Descriere pentru Marte 4' },
  ],
Mercur: [
    { itemImageSrc: mercur1, thumbnailImageSrc: mercur1, alt: 'Descriere pentru Mercur 1' },
    { itemImageSrc: mercur2, thumbnailImageSrc: mercur2, alt: 'Descriere pentru Mercur 2' },
    { itemImageSrc: mercur3, thumbnailImageSrc: mercur3, alt: 'Descriere pentru Mercur 3' },
    { itemImageSrc: mercur4, thumbnailImageSrc: mercur4, alt: 'Descriere pentru Mercur 4' },
  ],
  Neptun: [
    { itemImageSrc: neptun1, thumbnailImageSrc: neptun1, alt: 'Descriere pentru Neptun 1' },
    { itemImageSrc: neptun2, thumbnailImageSrc: neptun2, alt: 'Descriere pentru Neptun 2' },
    { itemImageSrc: neptun3, thumbnailImageSrc: neptun3, alt: 'Descriere pentru Neptun 3' },
    { itemImageSrc: neptun4, thumbnailImageSrc: neptun4, alt: 'Descriere pentru Neptun 4' },
  ],
  Saturn: [
    { itemImageSrc: saturn1, thumbnailImageSrc: saturn1, alt: 'Saturn 1' },
    { itemImageSrc: saturn2, thumbnailImageSrc: saturn2, alt: 'Saturn 2' },
    { itemImageSrc: saturn3, thumbnailImageSrc: saturn3, alt: 'Saturn 3' },
    { itemImageSrc: saturn4, thumbnailImageSrc: saturn4, alt: 'Saturn 4' },
  ],
  Uranus: [
    { itemImageSrc: uranus1, thumbnailImageSrc: uranus1, alt: 'Uranus 1' },
    { itemImageSrc: uranus2, thumbnailImageSrc: uranus2, alt: 'Uranus 2' },
    { itemImageSrc: uranus3, thumbnailImageSrc: uranus3, alt: 'Uranus 3' },
    { itemImageSrc: uranus4, thumbnailImageSrc: uranus4, alt: 'Uranus 4' },
  ],
  Venus: [
    { itemImageSrc: venus1, thumbnailImageSrc: venus1, alt: 'Venus 1' },
    { itemImageSrc: venus2, thumbnailImageSrc: venus2, alt: 'Venus 2' },
    { itemImageSrc: venus3, thumbnailImageSrc: venus3, alt: 'Venus 3' },
    { itemImageSrc: venus4, thumbnailImageSrc: venus4, alt: 'Venus 4' },
  ],
  // ... add more planets if needed
};

// Function to get images for a particular planet
export const getImagesForPlanet = (planetName) => {
  return Promise.resolve(images[planetName]);
};


// You might still want to keep the original getImages if it's being used elsewhere
export const getImages = () => {
    return Promise.resolve(images.Terra); // Default to Terra if no specific planet is requested
  };