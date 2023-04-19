import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryItem = createGalleryItems(galleryItems);

// gallery.insertAdjacentHTML('afterbegin', galleryItem);

gallery.innerHTML = galleryItem;

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}" data-orig-img="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

// console.log(galleryItem)

gallery.addEventListener("click", onClick);

const instances = [];

function onClick(evt) {
  evt.preventDefault();
  const original = evt.target
    .closest(".gallery__link")
    .getAttribute("data-orig-img");
  const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`);
  instances.push(instance);
  instance.show();
}
