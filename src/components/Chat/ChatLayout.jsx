import { useEffect, useRef, useState } from 'react';
import './chat.scss';
import InputMessage from './InputMessage';
import useMessage from '../../hooks/useMessage';
import { CloseIcon } from '../icons';
import useBubble from '../../hooks/useBubble';
import NotificationSound from '../NotificacionSound';

export default function ChatLayout() {
  const chatRef = useRef();
  const [error, setError] = useState(false);
  const [botTyping, setBotTyping] = useState(false);
  const { messageState } = useMessage();
  const {
    toggleChatBubble: openChatBubble,
    isChatOpened,
    closeMinChatBubble,
  } = useBubble();

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messageState]);

  const handleError = () => setError(true);
  const handleBotTyping = (state) => setBotTyping(state);
  return (
    <div
      className={`chat-wrapper ${
        openChatBubble ? 'opened' : `${isChatOpened ? 'min' : ''}`
      }`}
    >
      {!openChatBubble && (
        <div onClick={() => closeMinChatBubble()}>
          <CloseIcon id="icon-close-min" />
        </div>
      )}

      <div className="header-wrapper">
        <div className="header-wrapper-title">Chatbot Infojobs 🤖</div>
      </div>
      {error && (
        <div className="error">Ha ocurrido un error, vuelve a intentarlo</div>
      )}
        <div className="messages-list-wrapper">
          <div className="message-list"  ref={chatRef}>
            {messageState.map((message) => {
              const { message: text, id, rol } = message;
              return <Message key={id} message={text} rol={rol} />;
            })}
            {botTyping && <BotTyping />}
            {!botTyping && <NotificationSound />}
          </div>
        </div>
      <InputMessage onError={handleError} onTyping={handleBotTyping} />
    </div>
  );
}

function BotTyping() {
  return (
    <div className="message typing">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}
function Message({ rol, message }) {
  return <div className={`message ${rol}-message`}>{message}</div>;
}
