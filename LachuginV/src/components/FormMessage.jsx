import React, { Component } from "react";
import PropTypes from "prop-types";

class FormMessage extends Component {
  state = {
    author: "",
    message: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="author" />
        <input type="text" name="message" />
        <button type="submit">жмяк</button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  prop: PropTypes,
};

export default FormMessage;
