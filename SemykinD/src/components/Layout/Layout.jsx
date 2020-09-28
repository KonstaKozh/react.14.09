import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MessageField from '../MessageField';
import Message from '../Message';
import Header from '../Header';
import ChatList from '../ChatList';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  messageField: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    margin: theme.spacing(8),
    padding: theme.spacing(2),
    position: 'relative'
  },
});

class MessageComponent extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: 'Bot',
        message: 'Я бот, чего ты от меня хочешь, кожаный мешок?',
      },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== 'Bot') {
      setTimeout(() => {
        this.addMessage({ author: 'Bot', message: 'Привет! Я бот' });
      }, 1000);
    }
  }

  addMessage = message => {
    const { messages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  render = () => {
    const {classes} = this.props;
    const { messages } = this.state;
    return (
      <div className={classes.root}>
        <Header />
        <ChatList />

        <ul className={classes.messageField}>
          {messages.map(({ id, author, message }) => (
            <Message key={id} author={author} message={message} />
          ))}
          <MessageField addMessage={this.addMessage} />
        </ul>

      </div>
    );
  };
}

export default withStyles(styles)(MessageComponent);
