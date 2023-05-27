import useBubble from '../../hooks/useBubble';
import { CloseIcon, InfoJobsIcon } from '../icons';
import './Bubble.scss';

export default function Bubble() {
  const { toggleChatBubble, handleToggleBubble } = useBubble();

  return (
    <button
      className={'bubble-wrapper-icon'}
      onClick={() => handleToggleBubble()}
    >
      <div className={`infojobs-icon ${toggleChatBubble ? 'hidden' : 'show'}`}>
        <InfoJobsIcon id="infojobs-svg" />
      </div>
      <div className={`close-icon ${toggleChatBubble ? 'show' : 'hidden'}`}>
        <CloseIcon class="close-svg" />
      </div>
    </button>
  );
}
