import './styles/App.scss';
import { useState } from 'react';
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
      <main className="container">
        <div className="results">

        </div>
        <section className="bubble-wrapper">
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
