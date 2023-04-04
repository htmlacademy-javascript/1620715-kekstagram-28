import {openBigPicture} from './big-picture.js';
import {getData} from './api.js';
import {initFilter} from './filter.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const ERROR_TIMEOUT = 5000;
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (data) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = data.url;
  thumbnail.querySelector('.picture__img').alt = data.description;
  thumbnail.querySelector('.picture__likes').textContent = data.likes;
  thumbnail.querySelector('.picture__comments').textContent = data.comments.length;
  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(data);
  });

  return thumbnail;
};

const renderThumbnails = (data) => {
  data.forEach((item) => container.append(createThumbnail(item)));
};

const onGetSuccess = (data) => {
  renderThumbnails(data);
  initFilter(data);
};

const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.classList.add('error-block');
  errorBlock.textContent = 'Произошла ошибка загрузки';
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);

export {getPicturesData, renderThumbnails};
