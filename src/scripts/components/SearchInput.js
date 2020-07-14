export default class SearchInput {
  constructor(foo, toggler, clear, form, getTheme, clearStorage) {
    this._getSaveRender = foo;
    this._togglePreloader = toggler;
    this._clearResults = clear;
    this._form = form;
    this._input = this._form.input;
    this._button = this._form.querySelector('.button');
    this._error = this._form.querySelector('.searh__input-error');
    this._getThemefromStorage = getTheme;
    this._clearStorage = clearStorage;
    this._setEventListeners(this._form);
  }
  _setEventListeners(form) {
    form.addEventListener('input', this._validate.bind(this));
    form.addEventListener('submit', this._ignition.bind(this));
  }
  _ignition() {
    event.preventDefault();
    this._clearResults();
    this._togglePreloader(true);
    this._toggleDisableForm(true);
    this._clearStorage();
    this._getSaveRender(this._input.value).finally(() => {
      this._togglePreloader(false);
      this._toggleDisableForm(false);
  });
  }
  setRequestedTheme(){
    this._input.value = this._getThemefromStorage();
  }
  _toggleDisableForm(isLoading){        
    if(isLoading){
      this._form.forEach(el => {
        el.setAttribute('disabled', true);
      });       
    } else {
      this._form.forEach(el => {
        el.removeAttribute('disabled');
      });        
    }        
}
  _validate(event) {
    if (!this._form.checkValidity()) {
      this._button.setAttribute('disabled', true);
      setTimeout(() => (this._error.style.opacity = '85%'), 0);
      this._error.classList.remove('searh__input-error_hidden');
      this._input.style.border = '1px solid #ffb700';
    } else {
      this._error.classList.add('searh__input-error_hidden');
      this._error.style.opacity = '0%';
      this._input.style.border = '';
      this._button.removeAttribute('disabled');
    }
  }
}
