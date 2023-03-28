import React, { createContext, Dispatch, useReducer, useContext } from "react";

type Color = "red" | "orange" | "yellow";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

// dispatch 를 위한 타입 (액션들의 타입을 dispatch의 generics으로 설정)
type SampleDispatch = Dispatch<Action>;

// context
const SampleStateContext = createContext<State | null>(null);
const SampeleDispatchContext = createContext<SampleDispatch | null>(null);

// reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    // 초기값 설정
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampeleDispatchContext.Provider value={dispatch}>
        {children}
      </SampeleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// state, dispatch 를 쉽게 사용하기 위한 커스텀 훅
export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampeleDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
