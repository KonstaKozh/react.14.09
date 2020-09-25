import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField';
import Message from './components/Message';
import {v4 as uuidv4} from "uuid";
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const listStyles = {
  display: 'flex',
  width: 300,
  flexDirection: 'column',
  padding: 16,
  border: '1px solid #eaeeee',
};

class MessageComponent extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: 'Bot',
        message: 'Я бот, чего ты от меня хочешь, кожаный мешок?'
      },
    ],
  };

  componentDidUpdate(prevProps ,prevState) {
    const {messages} = this.state;
    if (messages[messages.length - 1].author !== "Bot") {
      setTimeout(() => {
        this.addMessage({ author: "Bot", message: "Привет! Я бот"})
      }, 1000);
    }
  }


  addMessage = (message) => {
    const { messages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  render = () => {
    const { messages } = this.state;
    return (
      <ul style={listStyles}>
        {messages.map(({ id, author, message }) => (
          <Message key={id} author={author} message={message} />
        ))}
        <MessageField addMessage={this.addMessage} />
      </ul>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <MessageComponent/>
  </MuiThemeProvider>,
  document.getElementById('root'),
);