const URL = import.meta.env.VITE_API_URL

export async function getDialogflowResponse(message, sessionId) {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message, sessionId })
        })
        const data = await response.json()
        return data.message

    } catch (error) {
        return null
    }
}