import { createContext, useReducer } from 'react';

const INITIAL_STATE = [];

const ACTION_TYPES = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  ADD_CHIPS: 'ADD_CHIPS',
  ADD_JOB_OFFERS: 'ADD_JOB_OFFERS',
};

const messageReducer = (state, action) => {
  const { type, payload } = action;
  const id = crypto.randomUUID();
  if (type === ACTION_TYPES.ADD_MESSAGE) {
    return [...state, { id: id, rol: payload.rol, message: payload.message }];
  }
  if(type === ACTION_TYPES.ADD_CHIPS ){
    return [...state, { id: id, rol: payload.rol, message: payload.message, chips: payload.chips }]
  }

  return state;
};

export const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [state, dispatch] = useReducer(messageReducer, INITIAL_STATE);

  const addMessage = (message) => {
    dispatch({
      type: ACTION_TYPES.ADD_MESSAGE,
      payload: { rol: message.rol, message: message.message },
    });
  };

  const addMessageWithChips = (message) =>{
    dispatch({
      type: ACTION_TYPES.ADD_CHIPS,
      payload: { rol: message.rol, message: message.message, chips: message.chips }
    })
  }

  return (
    <MessageContext.Provider value={{ messageState: state, addMessage, addMessageWithChips }}>
      {children}
    </MessageContext.Provider>
  );
}
