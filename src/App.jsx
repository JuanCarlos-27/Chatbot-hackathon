import { useState } from 'react';
import './styles/App.scss';
import Bubble from './components/Bubble/Bubble';
import ChatLayout from './components/Chat/ChatLayout';
import { MessageProvider } from './context/message';

export default function App() {
  const [toggleChatBubble, setToggleChatBubble] = useState(false);

  const handleToggleBubble = () => {
    setToggleChatBubble(!toggleChatBubble);
  };

  return (
    <MessageProvider>
      <main className='container'>
        <section className='bubble-wrapper'>
          <ChatLayout openChatBubble={toggleChatBubble} />
          <Bubble
            handleToggleBubble={handleToggleBubble}
            openBubble={toggleChatBubble}
          />
        </section>
      </main>
    </MessageProvider>
  );
}
