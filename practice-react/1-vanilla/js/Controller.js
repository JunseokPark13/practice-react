const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView }) {
    console.log(tag, "constructor");

    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;

    this.subscribeViewEvents()
  }

  subscribeViewEvents() {
    this.searchFormView.on('@submit', event => this.search(event.detail.value))
    this.searchFormView.on('@reset', event => this.reset(event.detail.value))
    // TODO
  }

  search(searchKeyword){
    console.log(tag, searchKeyword);
    this.store.search(searchKeyword)
    this.render()
  }

  reset(keyword){
    console.log(tag, keyword);
    this.store.searchKeyword = ""
    this.store.searchResult = []
    this.render();
    this.searchResultView.hide();
  }

  render() {
    if(this.store.searchKeyword.length > 0){
      this.searchResultView.show(this.store.searchResult)
      return ;
    }

    this.searchResultView.hide();
  }
}
