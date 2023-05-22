import { useState } from 'react';
import './chat.scss';
import InputMessage from './InputMessage';
import useMessage from '../../hooks/useMessage';

export default function ChatLayout({ openChatBubble }) {
  const [error, setError] = useState(false);
  const [botTyping, setBotTyping] = useState(false);
  const { messageState } = useMessage();

  const handleError = () => setError(true);
  const handleBotTyping = (state) => setBotTyping(state);

  return (
    <div className={`chat-wrapper ${openChatBubble ? 'opened' : ''}`}>
      <div className='header-wrapper'>
        <div className='header-wrapper-title'>Chatbot Infojobs 🤖</div>
      </div>
      {error && (
        <div className='error'>Ha ocurrido un error, vuelve a intentarlo</div>
      )}

      <div className='messages-list-wrapper'>
        <div className='message-list'>
          {messageState.map((message) => {
            const { message: text, id, rol } = message;
            if (rol === 'bot') {
              return <Message key={id} message={text} rol={rol} />;
            }
            return <Message key={id} message={text} rol={rol} />;
          })}
          {botTyping && <BotTyping />}
        </div>
      </div>
      <InputMessage onError={handleError} onTyping={handleBotTyping} />
    </div>
  );
}
function BotTyping() {
  return (
    <div className='message typing'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
  );
}
function Message({ rol, message }) {
  return <span className={`message ${rol}-message`}>{message}</span>;
}
