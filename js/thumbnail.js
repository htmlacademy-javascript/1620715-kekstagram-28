import {createPosts} from './data.js';
import {openBigPicture} from './big-picture.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const data = createPosts();

const createThumbnail = (item) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = item.url;
  thumbnail.querySelector('.picture__likes').textContent = item.likes;
  thumbnail.querySelector('.picture__comments').textContent = item.comments.length;
  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(item);
  });

  return thumbnail;
};

const renderThumbnail = () => data.forEach((item) => container.append(createThumbnail(item)));

export {renderThumbnail};
