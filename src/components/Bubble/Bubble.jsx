import { CloseIcon, InfoJobsIcon } from '../icons';
import './Bubble.scss'

export default function Bubble({ openBubble, handleToggleBubble }) {
  return (
    <button
      className={'bubble-wrapper-icon'}
      onClick={() => handleToggleBubble()}
    >
      <div className={`infojobs-icon ${openBubble ? 'hidden' : 'show'}`}>
        <InfoJobsIcon id='infojobs-svg' />
      </div>
      <div className={`close-icon ${openBubble ? 'show' : 'hidden'}`}>
        <CloseIcon class='close-svg' />
      </div>
    </button>
  );
}
