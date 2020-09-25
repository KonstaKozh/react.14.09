import React, { Component } from 'react';

// import PropTypes from 'prop-types';

class Message extends Component {
  // static propTypes = {
  //   text: PropTypes.object.isRequired,
  // };

  render() {
    return (
      <div>
        <div> {this.props.message} </div>
        <div>{ this.props.author }</div>
      </div>
    );
  }
}

export default Message;