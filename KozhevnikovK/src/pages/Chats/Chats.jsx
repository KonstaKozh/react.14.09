import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import MessageList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout/Layout';
import { asyncAddMessage } from '../../reducers/messagesReducer';
import {
  getActiveMessages,
  getCurrentMessages,
  getIsFetching,
} from '../../selectors/chatsSelectors';
// import Preloader from '../../components/Preloader/Preloader';
// import { fetchChats } from '../../reducers/chatReducer';

class Chats extends Component {
  submitMessage = ({ author, message }) => {
    const {
      asyncAddMessage,
      match: {
        params: { id },
      },
    } = this.props;
    asyncAddMessage({ author, message, chatId: id, id: uuidv4() });
  };

  render() {
    const { messages, activeMessages } = this.props;

    return (
      <Layout>
        <MessageList messages={messages} activeMessages={activeMessages}/>
        <FormMessage addMessage={this.submitMessage} />
      </Layout>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
  messages: PropTypes.arrayOf(PropTypes.any).isRequired,
  activeMessages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  asyncAddMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    messages: getCurrentMessages(state, id),
    activeMessages: getActiveMessages(state),
  };
};

const mapDispatchToProps = {
  asyncAddMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
