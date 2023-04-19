// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerEl = document.querySelector('.gallery');
const galleryHTML = createGalleryHTML(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', galleryHTML);


function createGalleryHTML(items) {
	return items.map(({ preview, original, description }) => {
   return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
         </a>
      </div>
   `;
	}).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
	captionType: 'alt',
});