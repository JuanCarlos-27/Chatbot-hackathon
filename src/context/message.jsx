import { createContext, useReducer } from 'react';
import { ROLES } from '../consts';

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
  ADD_CHIPS: 'ADD_CHIPS'
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

    if(message.rol === ROLES.BOT){
      // create a sound effect
      const audio = new Audio('./assets/notification-sound.mp3');
      audio.play();
      
    }
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
