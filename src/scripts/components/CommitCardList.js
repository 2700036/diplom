export default class CommitCardList {
    constructor(opt){
        this._createSlide = opt.createSlide;        
        this._section = opt.commitSection;
        this._container = this._section.querySelector('.swiper-wrapper'); 
        this._disconnect = this._section.nextElementSibling;
    }
    addSlide(obj){
        this._container.appendChild(this._createSlide(obj));         
    }
    showCommits(){
        this._section.classList.contains('slider_hidden') ? this._section.classList.remove('slider_hidden') : 0;
    }
    disconnect (){
        this._disconnect.classList.remove('disconnect_hidden');
    }
}