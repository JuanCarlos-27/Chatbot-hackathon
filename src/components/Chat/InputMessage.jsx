import { getDialogflowResponse } from '../../services/getDfResponse';
import { SendIcon } from '../icons';
import useSessionId from '../../hooks/useSessionId';
import useMessage from '../../hooks/useMessage';

export default function InputMessage({ onError, onTyping }) {
  const { sessionId } = useSessionId();
  const {
    addMessage,
    validInput,
    userMessage,
    handleChangeMessage,
    handleClearMessage,
  } = useMessage();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (validInput) {
      handleClearMessage();
      addMessage({ message: userMessage, rol: 'user' });
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
      addMessage({ message: dialogflowResponse, rol: 'bot' });
    }
  };
  return (
    <div className='input-container'>
      <div className='check-input'></div>
      <form className='input-box-wrapper' onSubmit={handleSubmitForm}>
        <input
          type='text'
          value={userMessage}
          onChange={handleChangeMessage}
          placeholder='Escribe tu pregunta...'
        />
        <button>
          <SendIcon isValid={validInput} />
        </button>
      </form>
    </div>
  );
}
