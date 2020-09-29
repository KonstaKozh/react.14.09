import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, withStyles } from '@material-ui/core';
import MessaheList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout';

const styles = theme => ({
  ChatBox: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
  },
});

class Chats extends Component {
  state = {
    chats: {
      1: { id: 1, tittle: 'Чат 1', messageList: [1] },
      2: { id: 2, tittle: 'Чат 2', messageList: [2] },
      3: { id: 3, tittle: 'Чат 3', messageList: [3] },
    },
    messages: {
      1: {
        id: 1,
        author: 'Bot',
        message: 'Привет от бота',
      },
      2: {
        id: 2,
        author: 'Bot',
        message: 'Сам ты Бот',
      },
      3: {
        id: 3,
        author: 'Bot',
        message: 'Поболтаем?',
      },
    },
  };

  componentDidUpdate(prevProps, prevState) {
    const lastMessag = this.messages;

    if (lastMessag[lastMessag.length -1]?.author !== 'Bot') {
      setTimeout(() => {
        this.addMessage({ author: 'Bot', message: 'привет, я бот' });
      }, 500);
    }
  }

  get messages() {
    const { id } = this.props.match.params;
    const { chats, messages } = this.state;
    if (id in chats){
      return chats[id].messageList.map(messId => messages[messId]);
    }
    return [];
  }
    
  addMessage = ({ author, message }) => {
    const { id } = this.props.match.params;
    const newId = uuidv4();

    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
      },
      messages: { ...messages, [newId]: { id: newId, author, message } },
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <Box className={classes.ChatBox}>
          <MessaheList messages={this.messages} />
          <FormMessage addMessage={this.addMessage} />
        </Box>
      </Layout>
    );
  }
}

export default withStyles(styles)(Chats);

