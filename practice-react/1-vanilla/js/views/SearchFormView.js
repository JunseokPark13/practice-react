import { qs, on } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#search-form-view"));

    this.resetElement = qs("[type=reset]", this.element);
    this.inputElement = qs("[type=text]", this.element);


    this.showResetButton(false);
    this.bindEvent();
    // TODO
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvent(){
    on(this.inputElement, "keyup", () => this.handleKeyup())
    on(this.element, "submit", event => this.handleSubmit(event))
  }

  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(tag, "handlesubmit");
    const { value } = this.inputElement;
    this.emit("@submit", {value});
  }
}
