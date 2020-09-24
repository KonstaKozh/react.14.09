import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Typography, withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import FormMessage from "../FormMessage";
import Header from "../Header";
import Message from "../Message";
import ChatList from "../ChatList";

const styles = (theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  container: {
    marginTop: theme.spacing(10),
  },
  list: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    fontFamily: ("Helvetica Neue", "Helvetica", "sans-serif"),
    fontSize: 20,
    fontWeight: "normal",
  }
});

class HelloMessage extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: "Bot",
        message: "Привет от бота",
      },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages.length % 2 === 0) {
      setTimeout(() => {
        this.addMessage({ author: "Bot", message: "привет, я бот" });
      }, 500);
    }
  }

  addMessage = (message) => {
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
        <Container maxWidth="md" className={classes.container}>
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "80vh" }}
          >
          <ul className={classes.list}>
            {messages.map(({ id, author, message }) => (
              <Message key={id} author={author} message={message} />
            ))}
          </ul>
          </Typography>
          <FormMessage addMessage={this.addMessage} />
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(HelloMessage);
