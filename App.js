import React from "react";
import Films from "./Films";
import {Provider} from "./Context";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Qi9xgwcE0YWcCj2DOGny4exLTyKiBTSJ"
    )
      .then((resp) => resp.json())
      .then((result) => this.setState({ data: result.results.books }));
  }

  render() {
    if (this.state.data === null) {
      return (
        <div className="mt-5 row row-cols-2 justify-content-center text-center align-items-center">
          <div className="spinner-border text-primary mr-2"></div>
          <h6 className="text-dark">Loading</h6>
        </div>
      );
    }

    return (
      <>
        <h1 className="text-center text-light bg-dark pt-5 pb-5 mb-4 font-weight-regular">
          Book Store <small>Made By Zakaria Imzilen</small>
        </h1>
        <div className="row row-cols-2">
          <Films data={this.state.data} show={this.state.show} />
        </div>
      </>
    );
  }
}

export default App;
