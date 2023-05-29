import { createContext, useState } from 'react';

const INITIAL_STATE = [
  {
    id: 'cc8923015d4b038a82708f346b1d76',
    title:
      'Beca InfoJobs Tech: 3 meses en Australia, ¡aprendiendo inglés con trabajo y todos los gastos pagados!',
    city: 'Madrid',
    category: 'Informática y telecomunicaciones',
    subcategory: 'Programación',
    link: 'https://www.infojobs.net/madrid/beca-infojobs-tech-3-meses-australia-aprendiendo-ingles-con-trabajo-todos-los-gastos-pagados/of-icc8923015d4b038a82708f346b1d76',
    salary: '900€ - 1.050€ Bruto/mes'
  },
];

export const OfferJobsContext = createContext();

export function OfferJobsProvider({ children }) {
  const [offersJobs, setOffersJobs] = useState(INITIAL_STATE);

  const addOffers = (offers) => {
    setOffersJobs([...offers]);
  };
  return (
    <OfferJobsContext.Provider value={{ offersJobs, addOffers }}>
      {children}
    </OfferJobsContext.Provider>
  );
}
