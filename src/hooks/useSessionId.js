import { useEffect, useState } from 'react';

export default function useSessionId() {
    const [sessionId, setSessionId] = useState('');

    useEffect(() => {
        // Generar un nuevo sessionId cuando el componente se monte
        const newSessionId = crypto.randomUUID();
        setSessionId(newSessionId);
        // Limpiar el sessionId cuando el componente se desmonte (refrescar la página)
        return () => setSessionId('');
    }, []);

    return { sessionId }
}