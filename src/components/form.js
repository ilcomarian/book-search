import React, { Component } from "react";

import { Button } from "reactstrap";
const Form = props => (
  <div>
    <form onSubmit={props.getBook}>
      <input type="text" name="book" placeholder="Search for book" />

      <Button color="danger">&</Button>
    </form>
  </div>
);

export default Form;
