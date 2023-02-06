import { SCROLL_LANDING } from "./types";

export function landingScroll(data) {
  const result = data;
  return {
    type: SCROLL_LANDING,
    payload: result,
  };
}
