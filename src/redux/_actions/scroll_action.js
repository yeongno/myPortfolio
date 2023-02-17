import { SCROLL_LANDING, SCROLL_MARK } from "./types";

export function landingScroll(data) {
  const result = data;
  return {
    type: SCROLL_LANDING,
    payload: result,
  };
}
export function markScroll(data) {
  const result = data;
  return {
    type: SCROLL_MARK,
    payload: result,
  };
}
