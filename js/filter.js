import { renderThumbnails } from './thumbnail.js';
import { shuffleArray, debounce } from './util.js';

const RANDOM_COMMENTS_COUNT = 10;
const RENDER_DELAY = 500;
const DISCUSSED_FILTER_ID = 'filter-discussed';
const RANDOM_FILTER_ID = 'filter-random';
const imageFilters = document.querySelector('.img-filters');

const removeElements = (elements) => {
  elements.forEach((element) => element.remove());
};

const rerenderPictures = (data, id) => {
  let dataCopy = data.slice();
  removeElements(document.querySelectorAll('.picture'));
  if (id === DISCUSSED_FILTER_ID) {
    dataCopy = dataCopy.sort((a, b) => b.comments.length - a.comments.length);
  }
  if (id === RANDOM_FILTER_ID) {
    dataCopy = shuffleArray(dataCopy).slice(0, RANDOM_COMMENTS_COUNT);
  }
  renderThumbnails(dataCopy);
};

const rerenderTimeout = debounce((data, id) => rerenderPictures(data, id), RENDER_DELAY);

function onImageFiltersClick(evt, data) {
  if (evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const id = evt.target.id;
    rerenderTimeout(data, id);
  }
}

const initFilter = (data) => {
  imageFilters.classList.remove('img-filters--inactive');
  imageFilters.addEventListener('click', (evt) => {
    onImageFiltersClick(evt, data);
  });
};

export { initFilter };
