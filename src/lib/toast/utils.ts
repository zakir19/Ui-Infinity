
import { dispatch } from "./store";

export const TOAST_LIMIT = 10;
export const TOAST_REMOVE_DELAY = 1000;

export const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

export function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

// Track toast timeout IDs for removal
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

export const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};
