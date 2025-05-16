
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { memoryState, dispatch, subscribe } from "./store";
import { ToastProps } from "./types";

type Toast = Omit<ToastProps, "id">;

export function createToast() {
  return function toast(props: Toast) {
    const id = uuidv4();

    const update = (props: Toast) =>
      dispatch({
        type: "UPDATE_TOAST",
        toast: { ...props, id },
      });

    const dismiss = () =>
      dispatch({ type: "DISMISS_TOAST", toastId: id });

    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
        onOpenChange: (open: boolean) => {
          if (!open) {
            dismiss();
          }
          props.onOpenChange?.(open);
        },
      },
    });

    return {
      id,
      update,
      dismiss,
    };
  };
}

export function useToast() {
  const [state, setState] = React.useState<typeof memoryState>(memoryState);

  React.useEffect(() => {
    const unsubscribe = subscribe(setState);
    return unsubscribe;
  }, []);

  return {
    ...state,
    toast: createToast(),
    dismiss: (toastId?: string) =>
      dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}
