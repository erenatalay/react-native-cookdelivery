import { combineReducers } from "redux";
import { users } from "./users";
import {tab} from "./tab";
export default combineReducers({
    users : users,
    tab : tab
})