import { useEffect, useRef } from 'react';

const NOTIFICATION_SOUND = '../public/notification-sound.mp3';

export default function NotificationSound() {
  const audioRef = useRef(null);

  useEffect(() => {
    try {
      audioRef.current.play();
    } catch (error) {
      console.log('Error reproduciendo el sonido de notificación')
    }
  }, []);

  return <audio src={NOTIFICATION_SOUND} ref={audioRef}></audio>;
}
