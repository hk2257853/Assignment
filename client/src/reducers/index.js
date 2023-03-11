import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import history from "./history"

export default combineReducers({ posts, auth, history });
