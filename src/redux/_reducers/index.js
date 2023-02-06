import { combineReducers } from "redux";
import user from "./user_reducer";
import post from "./post_reducer";
import turn from "./turn_reducer";
import reply from "./reply_reducer";
import scroll from "./scroll_reducer";

const rootReducer = combineReducers({
  user,
  post,
  turn,
  reply,
  scroll,
});

export default rootReducer;
