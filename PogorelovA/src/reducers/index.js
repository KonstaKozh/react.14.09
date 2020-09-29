import { combineReducers } from 'redux';
import chatsReducer from './chatReducer';

const rootReducer = combineReducers({
  chats: chatsReducer,
});

export default rootReducer;
