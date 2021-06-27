const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, "constructor");

    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents()
  }

  subscribeViewEvents() {
    this.searchFormView.on('@submit', event => this.search(event.detail.value))
    this.searchFormView.on('@reset', event => this.reset(event.detail.value))
    // TODO
  }

  search(keyword){
    console.log(tag, keyword);
    this.keyword = keyword;
  }

  reset(keyword){
    console.log(tag, keyword);
    this.keyword = keyword;
  }
}
