import './styles/App.scss';
import Bubble from './components/Bubble/Bubble';
import ChatLayout from './components/Chat/ChatLayout';
import { MessageProvider } from './context/message';
import { BubbleProvider } from './context/bubble';
import OffersJob from './components/OffersJob/OffersJob';
export default function App() {
  return (
    <MessageProvider>
      <main className="container">
        <OffersJob />
        <section className="bubble-wrapper">
          <BubbleProvider>
            <ChatLayout />
            <Bubble />
          </BubbleProvider>
        </section>
      </main>
    </MessageProvider>
  );
}
