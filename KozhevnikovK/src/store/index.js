import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from '../reducers/chatReducer';
import messagesReducer from '../reducers/messegesReducer';

export default configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
  },
});
