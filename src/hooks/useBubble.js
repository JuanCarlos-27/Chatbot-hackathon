import { useContext } from 'react';
import { BubbleContext } from '../context/bubble';

export default function useBubble() {
    const { toggleChatBubble, isChatOpened, handleToggleBubble, closeMinChatBubble } = useContext(BubbleContext);

    return {toggleChatBubble, isChatOpened, handleToggleBubble, closeMinChatBubble}
}