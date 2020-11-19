import { combineReducers } from "redux";
import albums from "./albums";
import users from "./users";

export default combineReducers({
    albums,
    users
})