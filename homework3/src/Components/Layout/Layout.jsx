import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, withStyles } from '@material-ui/core';
import FormMessage from '../FormMessage';
import Header from '../Header';
import Message from '../Message';
import ChatList from '../ChatList';

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
      alignItems: "center",
    width: "98%"
  },
  chat: {
    width: "50%",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    backgroundColor: "#fff",
    borderRadius: 5,
    zIndex: 2,
  },
};

class HelloMessage extends Component {
    state = {
        messages: [
            {
                id: uuidv4(),
                author: 'Bot',
                message: 'Привет от бота',
            },
        ],
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (messages.length % 2 === 0) {
            setTimeout(() => {
                this.addMessage({ author: 'Bot', message: 'привет, я бот' });
            }, 500);
        }
    }

    addMessage = message => {
        const { messages } = this.state;

        this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
    };

    render() {
        const { classes } = this.props;
        const { messages } = this.state;

        return (
          <div className={classes.root}>
            <Header />
            <ChatList />
            <Box className={ classes.box } component="span" m={1}>
              <div className={classes.chat}>
              <ul className="list">
                {messages.map(({ id, author, message }) => (
                  <Message key={id} author={author} message={message} />
                ))}
              </ul>
              </div>
              <FormMessage addMessage={this.addMessage} />
            </Box>
          </div>
        );
    }
}

export default withStyles(styles)(HelloMessage);