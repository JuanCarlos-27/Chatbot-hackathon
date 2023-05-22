import { createContext, useReducer } from 'react';

const INITIAL_STATE = [
  // {
  //   id: 1,
  //   rol: "bot",
  //   message:
  //     "Bienvenido a InfoJobs, el portal líder en empleo. Estoy aquí para ayudarte a encontrar el trabajo ideal. Cuéntame, ¿en qué sector o área te gustaría trabajar?",
  // },
  // {
  //   id: 2,
  //   rol: "user",
  //   message: "Hola",
  // },
];

const ACTION_TYPES = {
  ADD_MESSAGE: 'ADD_MESSAGE',
};

const messageReducer = (state, action) => {
  const { type, payload } = action;
  const id = crypto.randomUUID();
  if (type === ACTION_TYPES.ADD_MESSAGE) {
    return [...state, { id: id, rol: payload.rol, message: payload.message }];
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

  return (
    <MessageContext.Provider value={{ messageState: state, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
