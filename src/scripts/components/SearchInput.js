export default class SearchInput {
    constructor (foo, toggler, clear, form){
        this._getSaveRender = foo; 
        this._togglePreloader = toggler;
        this._clearResults = clear;                           
        this._form = form;
        this._input = this._form.input;        
        this._button = this._form.button;
        this._form.addEventListener('submit', this._ignition.bind(this));
    }
    _ignition (){
        event.preventDefault();
        this._clearResults();
        this._togglePreloader(true);        
        localStorage.clear(); 
        this._getSaveRender(this._input.value)
    }
}







