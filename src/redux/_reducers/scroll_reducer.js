import { SCROLL_LANDING } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case SCROLL_LANDING:
      return { ...state, landingScroll: action.payload };
      break;

    default:
      return state;
  }
}
