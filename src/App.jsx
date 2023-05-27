import './styles/App.scss';
import Bubble from './components/Bubble/Bubble';
import ChatLayout from './components/Chat/ChatLayout';
import { MessageProvider } from './context/message';
import { BubbleProvider } from './context/bubble';
export default function App() {
  return (
    <MessageProvider>
      <main className="container">
        <div className="results"></div>
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
