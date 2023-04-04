import {activateScale, resetScale} from './form-scale.js';
import {changeEffect, resetFilter, createSlider} from './form-effects.js';
import {addValidator, resetPristine, validatePristine} from './form-validate.js';
import {renderFailMessage, renderSuccessMessage} from './send-messages.js';
import {sendData} from './api.js';
import {loadImg} from './add-image.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram';
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const effectsField = document.querySelector('.effects');
const submitButton = document.querySelector('.img-upload__submit');

const onSendSuccess = () => {
  renderSuccessMessage();
  closeModal();
  submitButton.disabled = false;
};

const onSendFail = () => {
  renderFailMessage();
  submitButton.disabled = false;
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !evt.target.closest('.text__hashtags') &&
  !evt.target.closest('.text__description')) {
    if (document.querySelector('.error')) {
      return;
    }
    evt.preventDefault();
    closeModal();
  }
};

const onCancelButtonClick = () => closeModal();
const onFileInputChange = (evt) => {
  openModal();
  loadImg(evt);
};

const onEffectsFileIdChange = (evt) => changeEffect(evt);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validatePristine()) {
    submitButton.disabled = true;
    sendData(GET_URL, onSendSuccess, onSendFail, new FormData(evt.target));
  }
};

function openModal () {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal() {
  form.reset();
  resetScale();
  resetFilter();
  resetPristine();
  overlay.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const addFormAction = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonClick);
  effectsField.addEventListener('change', onEffectsFileIdChange);
  form.addEventListener('submit', onFormSubmit);
  activateScale();
  addValidator();
  createSlider();
};

export {addFormAction};
