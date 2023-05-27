import { createContext, useState } from 'react';

export const BubbleContext = createContext();

export function BubbleProvider({ children }) {
    const [toggleChatBubble, setToggleChatBubble] = useState(false);
    const [isChatOpened, setIsChatOpened] = useState(true);
  
    const closeMinChatBubble = () => {
        setIsChatOpened(false);
    }
    const handleToggleBubble = () => {
      setToggleChatBubble(prevState => !prevState);
      closeMinChatBubble();
    };
  
    return (
        <BubbleContext.Provider value={{toggleChatBubble, isChatOpened, handleToggleBubble, closeMinChatBubble}}>
            {children}
        </BubbleContext.Provider>
    );
}