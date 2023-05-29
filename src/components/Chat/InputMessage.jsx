import { getDialogflowResponse } from '../../services/getDfResponse';
import { SendIcon } from '../icons';
import useSessionId from '../../hooks/useSessionId';
import useMessage from '../../hooks/useMessage';
import { ROLES } from '../../consts';
import { useContext, useEffect, useState } from 'react';
import { OfferJobsContext } from '../../context/offerJobs';
export default function InputMessage({ onError, onTyping }) {
  const { addOffers } = useContext(OfferJobsContext);

  const { sessionId } = useSessionId();
  const [endConversation, setEndConversation] = useState(false);
  const {
    addMessage,
    validInput,
    userMessage,
    handleChangeMessage,
    handleClearInput,
    addMessageWithChips,
  } = useMessage();

  useEffect(() => {
    if (sessionId) {
      getDialogflowResponse('Hola', sessionId).then((response) => {
        if (response == null) {
          onError();
          return;
        }
        response?.text?.forEach((message) => {
          addMessage({ message, rol: ROLES.BOT });
        });
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (validInput) {
      handleClearInput();
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
      if (dialogflowResponse.endInteraction) {
        setEndConversation(true);
        addOffers(dialogflowResponse.offers);
        
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
          disabled={endConversation}
        />
        <button>
          <SendIcon isValid={validInput} />
        </button>
      </form>
    </div>
  );
}
