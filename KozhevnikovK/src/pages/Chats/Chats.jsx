import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
// import produce from 'immer';
import MessageList from "../../components/MessageList";
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout/Layout';
import store from "../../store";
import {addMessageToState} from "../../actions/chatActions";

class Chats extends Component {
  state = {
    chats: {
      1: { id: 1, title: 'Чат 1', messageList: [1, 2] },
      2: { id: 2, title: 'Чат 2', messageList: [3, 2] },
      3: { id: 3, title: 'Чат 3', messageList: [2, 3] },
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
        message: 'Давай поболтаем',
      },
      3: {
        id: 3,
        author: 'Bot',
        message: 'Давай поболтаем, я в третьем чате',
      },
    },
  };

  componentDidUpdate() {
    const lastMessages = this.messages;

    if (lastMessages[lastMessages.length - 1]?.author !== 'Bot') {
      setTimeout(() => {
        this.addMessage({ author: 'Bot', message: 'привет, я бот' });
      }, 500);
    }
  }

  get messages() {
    const {
      match: {
        params: {id},
      },
    } = this.props;
    const { chats, messages } = this.state;
    if (id in chats) {
      return chats[id].messageList.map(messId => messages[messId]);
    }
    return [];
  }

  addMessage = ({ author, message }) => {
    const {
      match: {
        params: {id},
      },
    } = this.props;
    const newId = uuidv4();

    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
      },
      messages: { ...messages, [newId]: { id: newId, author, message } },
    }));

    // with Immer.js
    // this.setState(prevState =>
    //   produce(prevState, draft => {
    //     draft.chats[id].messageList.push(newId);
    //     draft.messages[newId] = { id: newId, author, message };
    //   }),
    // );
  };

  addChat = () => {
    const newId = uuidv4();
    this.setState(({chats}) => ({
      chats: { ...chats, [newID]: { id: newId, title: 'Чат ${newID}', messageList: []}},
    }));
  };

  render() {
    const {chats} = this.state;
    console.log(this.props);
    return (
      <Layout chats = {Object.values(chats)} addChat={this.addChat}>
        <MessageList messages={this.messages} />
        <FormMessage addMessage={this.addMessage} />
        <button onClick={this.props.addMessage}>Add message</button>
      </Layout>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
}

const mapStateToProps = (store) => ({
  chatsFromRedux: store.shats,
});

const mapDispatchToProps = {
  addMessage: addMessageToState ,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
