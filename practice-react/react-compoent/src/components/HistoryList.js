import React from "react";
import List from "./List.js";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers.js";

export default class HistoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      historyList: [],
    };
  }

  fetch() {
    const historyList = store.getHistoryList();
    this.setState({
      historyList,
    });
  }

  componentDidMount() {
    this.fetch();
  }

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();

    store.removeHistory(keyword);
    this.fetch();
  }

  render() {
    return (
      <List
        data={this.state.keywordList}
        onClick={this.props.onClick}
        renderItem={(item) => {
          return (
            <>
              <span>{item.keyword}</span>
              <span className="date">{formatRelativeDate(item.date)}</span>
              <button
                className="btn-remove"
                onClick={(event) =>
                  this.handleClickRemoveHistory(event, item.keyword)
                }
              />
            </>
          );
        }}
      />
    );
  }
}

// export default class HistoryList extends List {
//   fetch() {
//     const data = store.getHistoryList();
//     this.setState({
//       data,
//     });
//   }

//   componentDidMount() {
//     this.fetch();
//   }

//   handleClickRemoveHistory(event, keyword) {
//     event.stopPropagation();

//     store.removeHistory(keyword);
//     this.fetch();
//   }

//   renderItem(item) {
//     return (
// <>
//   <span>{item.keyword}</span>
//   <span className="date">{formatRelativeDate(item.date)}</span>
//   <button
//     className="btn-remove"
//     onClick={(event) =>
//       this.handleClickRemoveHistory(event, item.keyword)
//     }
//   />
// </>
//     );
//   }
// }
