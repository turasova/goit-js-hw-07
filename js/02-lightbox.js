import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
galleryList.addEventListener('click', handlerClick);


function createMarkup(arr) {
    return arr.map(({preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  ).join('');
}
console.dir(galleryList)


function handlerClick(evt) {
    evt.preventDefault();

}

console.log(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {
	
});



