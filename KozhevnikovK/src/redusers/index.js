import {combineReducers} from "redux";
import chatReduser from "./chatReduser";

const rootReduser = combineReducers({
        chats: chatReduser,
});

export default rootReduser;