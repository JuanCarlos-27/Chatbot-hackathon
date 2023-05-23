import { useState } from 'react';
import './chat.scss';
import InputMessage from './InputMessage';
import useMessage from '../../hooks/useMessage';
import { CloseIcon } from '../icons';

export default function ChatLayout({ openChatBubble }) {
  const [error, setError] = useState(false);
  const [botTyping, setBotTyping] = useState(false);
  const { messageState } = useMessage();

  const handleError = () => setError(true);
  const handleBotTyping = (state) => setBotTyping(state);

  return (
    <div className={`chat-wrapper ${openChatBubble ? 'opened' : 'min'}`}>
      {!openChatBubble && <CloseIcon id="icon-close-min" />}
      <div className="header-wrapper">
        <div className="header-wrapper-title">Chatbot Infojobs 🤖</div>
      </div>
      {error && (
        <div className="error">Ha ocurrido un error, vuelve a intentarlo</div>
      )}
      {
        messageState.length !== 0 &&
        <div className="messages-list-wrapper">
          <div className="message-list">
            {messageState.map((message) => {
              const { message: text, id, rol } = message;
              return <Message key={id} message={text} rol={rol} />;
            })}
            {botTyping && <BotTyping />}
          </div>
        </div>
      }
      <InputMessage onError={handleError} onTyping={handleBotTyping} />
    </div>
  );
}

// function Chips({ chips }) {
//   return (
//     <div className="chips-wrapper">
//       {chips.map((chip) => (
//         <a key={chip}>{chip}</a>
//       ))}
//     </div>
//   );
// }

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
  return (
    <>
      <div className={`message ${rol}-message`}>{message}</div>
      {/* {chips && <Chips chips={chips} />} */}
    </>
  );
}
