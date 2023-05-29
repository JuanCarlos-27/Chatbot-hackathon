import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { OfferJobsProvider } from './context/offerJobs.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <OfferJobsProvider>
    <App />
  </OfferJobsProvider>
);
