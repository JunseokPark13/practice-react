import React from "react";
import Header from "./components/header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import store from "./Store";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    };
  }

  handleChangeInput(searchKeyword) {
      if (searchKeyword.length <= 0){
          this.handleReset()
      }
      this.setState({ searchKeyword })
  }

  search(searchKeyword) {
    console.log("Todo Search : ", searchKeyword);
    const searchResult = store.search(searchKeyword)
    this.setState({searchResult, submitted: true,})
    
  }

  handleReset() {
    this.setState({searchKeyword:"", searchResult: [], submitted: false,})
  }

  render() {
    const { searchKeyword, submitted, searchResult } = this.state

    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm
            value={searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={(searchKeyword) => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
          <div className="content">
            {submitted && <SearchResult data={searchResult} />}
          </div>
        </div>
        
      </>
    );
  }
}
