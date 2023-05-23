import { getDialogflowResponse } from '../../services/getDfResponse';
import { SendIcon } from '../icons';
import useSessionId from '../../hooks/useSessionId';
import useMessage from '../../hooks/useMessage';
import { ROLES } from '../../consts';
import { useEffect } from 'react';
export default function InputMessage({ onError, onTyping }) {
  const { sessionId } = useSessionId();
  const {
    addMessage,
    validInput,
    userMessage,
    handleChangeMessage,
    handleClearMessage,
    addMessageWithChips,
  } = useMessage();

  useEffect(() => {
    console.log('render')
    if(sessionId){
      getDialogflowResponse('Hola', sessionId).then(
        (response) => {
          console.log(response)
          if (response == null) {
            onError();
            return;
          }
          response?.text?.forEach((message) => {
            addMessage({ message, rol: ROLES.BOT });
          });
        }
      );
    }
  }, [sessionId]);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (validInput) {
      handleClearMessage();
      addMessage({ message: userMessage, rol: ROLES.USER });
      onTyping(true);
      const dialogflowResponse = await getDialogflowResponse(
        userMessage,
        sessionId
      );
      onTyping(false);
      if (dialogflowResponse == null) {
        onError();
        return;
      }
      if (dialogflowResponse.richText) {
        dialogflowResponse?.text?.forEach((message) => {
          addMessageWithChips({
            message,
            rol: ROLES.BOT,
            chips: dialogflowResponse.richText,
          });
        });
      } else {
        dialogflowResponse?.text?.forEach((message) => {
          addMessage({ message, rol: ROLES.BOT });
        });
      }
    }
  };
  return (
    <div className="input-container">
      <div className="check-input"></div>
      <form className="input-box-wrapper" onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={userMessage}
          onChange={handleChangeMessage}
          placeholder="Ingresa tu mensaje"
        />
        <button>
          <SendIcon isValid={validInput} />
        </button>
      </form>
    </div>
  );
}
