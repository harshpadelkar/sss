import { useReducer } from "react";

const defaultOptionsState = {
  isOptionATouched: false,
  isOptionBTouched: false,
  value: null,
  hasError: null,
};

const optionsReducer = (state, actions) => {
  if (actions.type === "A") {
    return {
      isOptionATouched: true,
      isOptionBTouched: false,
      value: actions.value,
      hasError: null,
    };
  }

  if (actions.type === "B") {
    return {
      isOptionATouched: false,
      isOptionBTouched: true,
      value: actions.value,
      hasError: null,
    };
  }

  if (actions.type === "ERROR") {
    return {
      isOptionATouched: state.isOptionATouched,
      isOptionBTouched: state.isOptionBTouched,
      value: state.value,
      hasError: actions.error,
    };
  }

  return defaultOptionsState;
};

const useOptionsReducer = () => {
  const [option, dispatchOption] = useReducer(
    optionsReducer,
    defaultOptionsState
  );

  const dispatchErrorHandler = (value) => {
    dispatchOption({
      type: "ERROR",
      error: value,
    });
  };

  const dispatchOptionHandler = (type, value) => {
    dispatchOption({ type: type, value: value });
  };

  return {
    option,
    dispatchOptionHandler,
    dispatchErrorHandler,
  };
};

export default useOptionsReducer;
