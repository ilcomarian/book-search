import React, { Component } from "react";

import "./App.css";

import Form from "./components/form";

import cardLayout from "./components/card";
class App extends Component {
  state = {
    items: undefined
  };
  getBook = async e => {
    e.preventDefault();
    let query = e.target.elements.book.value;

    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    fetch(BASE_URL, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        // let { items } = json;
        this.setState({
          items: json.items
        });
      });
  };

  render() {
    console.log(this.state.items);
    if (!this.state.items) {
      return (
        <div className="App">
          <Form getBook={this.getBook} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Form getBook={this.getBook} />
          <div className="box">
            {" "}
            {this.state.items.map(element => cardLayout(element))}
          </div>
        </div>
      );
    }
  }
}

export default App;
