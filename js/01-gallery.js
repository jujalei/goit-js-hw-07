import { galleryItems } from "./gallery-items.js";
// Change code below this line


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


gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const original = evt.target
    .closest(".gallery__link")
    .getAttribute("data-orig-img");
  const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`);

  instance.show();

  // onEscClick
  document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
