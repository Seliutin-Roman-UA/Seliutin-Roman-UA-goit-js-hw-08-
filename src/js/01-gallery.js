// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const stringForHTML = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', stringForHTML);

let lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionSelector: '.gallery__image',
  captionsData: 'alt',
  captionDelay: '250ms',
});

