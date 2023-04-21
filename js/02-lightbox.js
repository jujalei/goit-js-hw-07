import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryItem);

function createGalleryItems(galleryItems) {
 return galleryItems.reduce((acc, { preview, original, description }) => {
   const item =  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
 return acc+item
  }, '');
}

const lightbox = new SimpleLightbox('.gallery a',  {
    captionsData: 'alt',
    captionDelay: 250,
  });


console.log(galleryItem);
