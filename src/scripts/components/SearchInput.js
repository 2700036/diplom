export class SearchInput {
    constructor (foo, form){
        this._getSaveRender = foo;                            
        this._form = form;
        this._input = this._form.input;        
        this._button = this._form.button;
        this._form.addEventListener('submit', this._ignition.bind(this));
    }
    _ignition (){
        event.preventDefault();
        this._getSaveRender(this._input.value)
    }
}







