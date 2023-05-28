import { createContext, useState } from 'react';

export const OfferJobsContext = createContext();

const INITIAL_STATE = [
  {
    id: 1,
    title: 'Frontend Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    salary: '1000',
    location: 'Bogotá',
  },
];

export function OfferJobsProvider({ children }) {
  const [offersJobs, setOffersJobs] = useState(INITIAL_STATE);

  console.log(offersJobs)
  const addOffers = (offers) => {
    setOffersJobs([...offersJobs, offers]);
  };
  return (
    <OfferJobsContext.Provider value={{ offersJobs, addOffers }}>
      {children}
    </OfferJobsContext.Provider>
  );
}
