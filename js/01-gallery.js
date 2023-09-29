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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    ).join('');
}
console.dir(galleryList)


function handlerClick(evt) {
    evt.preventDefault();
   const galleryItem = evt.target.dataset.source;
  if (!galleryItem) return;
  instance.element().querySelector('img').src = galleryItem;
  instance.show();  
}
//Модальне вікно


const instance = basicLightbox.create(`
    < class="modal">
       <img  src=""
      data-source=""
      alt=""/> 
    </div>`
,
  {
    onShow: () => {
      document.addEventListener('keydown', escPress)
    },
    onClose: () => {
      document.removeEventListener('keydown', escPress)
    },
  } 

 );


function escPress(evt) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = evt.code === ESC_KEY_CODE;
    if (!isEscKey) return;
    instance.close();
}

