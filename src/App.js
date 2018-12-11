import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";

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
    }
    return (
      <div className="App">
        {/* <Form getBook={this.getBook} /> */}
        { this.state.items.forEach(element => 
        <div>element.accessInfo.accessViewStatus</div>
      
       }
      </div>
    );
  }
}

export default App;
