import { useContext, useEffect, useState } from 'react';
import { MessageContext } from '../context/message';

export default function useMessage() {
    const [userMessage, setUserMessage] = useState('');
    const [validInput, setValidInput] = useState(false);
    const { messageState, addMessage, addMessageWithChips } = useContext(MessageContext)

    const handleChangeMessage = (e) => {
        setUserMessage(e.target.value);
    };

    const handleClearInput = () => {
        setUserMessage('');
    }

    useEffect(() => {
        if (userMessage === '' || !userMessage.trim()) {
            setValidInput(false);
            return;
        }
        setValidInput(true);
    }, [userMessage]);

    return {
        userMessage,
        validInput,
        handleChangeMessage,
        handleClearInput,
        addMessage,
        messageState,
        addMessageWithChips
    }
}