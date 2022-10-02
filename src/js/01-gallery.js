import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const refsGallery = document.querySelector(".gallery");
console.log(SimpleLightbox);

function createItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" title= "${description}" alt="${description}" />
</a>`;
    })
    .join("");
}
const addCreateItem = createItem(galleryItems);
refsGallery.insertAdjacentHTML("beforeend", addCreateItem);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
console.dir(lightbox);
