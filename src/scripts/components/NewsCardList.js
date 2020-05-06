export default class NewsCardList {
    constructor (opt){
        this._container = opt.resultCardList;
        this._createCard = opt.createCard;
        this._getNewsfromStorage = opt.getNewsfromStorage;
        this.addCard = this.addCard.bind(this);
    }
    addCard(createdCard) {
        this._container.appendChild(createdCard);
    }

}