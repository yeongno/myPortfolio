import { SCROLL_LANDING, SCROLL_MARK } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case SCROLL_LANDING:
      return { ...state, landingScroll: action.payload };
      break;
    case SCROLL_MARK:
      return { ...state, markScroll: action.payload };
      break;
    default:
      return state;
  }
}
