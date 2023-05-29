import { useContext } from 'react';
import './OffersJob.scss';
import NotResults from './NotResults';
import MainOffer from './MainOffer';
import { OfferJobsContext } from '../../context/offerJobs';

export default function OffersJob() {
  const { offersJobs } = useContext(OfferJobsContext);

  return (
    <section className="offers-job">
      <h2 className="offers-job__title">Ofertas de trabajo para ti</h2>
      {offersJobs.length === 0 && <NotResults />}
      <ul className="offers-job__list">
        {offersJobs.map((offer) => (
          <li className="offers-job__item" key={offer.id}>
            <h3 className="offers-job__item-title">{offer.title}</h3>
            <p className="offers-job__item-city">
              <span>Ciudad: </span>
              {offer.city}
            </p>
            <p className="offers-job__item-category">
              <span>Categoria: </span>
              {offer.category}
            </p>
            <p className="offers-job__item-subcategory">
              <span>Subcategoria: </span> {offer.subcategory}
            </p>
            <p className="offers-job__item-salary">
              <span>Salario: </span>
              {offer.salary}
            </p>
            <p className="offers-job__item-modality">
              <span>Modalidad: </span>
              {offer.teleworking}
            </p>
            <p className="offers-job__item-link">
              <a href={offer.link} target="_blank" rel="noreferrer">
                Enlace de la oferta + info
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    color="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.625 1.979H14.625C15.4505 1.98336 16.1175 2.69097 16.1175 3.56234V6.729C16.1175 7.16623 15.7817 7.52067 15.3675 7.52067C14.9533 7.52067 14.6175 7.16623 14.6175 6.729V4.67859L7.1175 12.5953C6.82548 12.9057 6.35034 12.9075 6.05625 12.5992C5.76216 12.291 5.76048 11.7894 6.0525 11.479L13.5525 3.56234H11.625C11.2108 3.56234 10.875 3.2079 10.875 2.77067C10.875 2.33345 11.2108 1.979 11.625 1.979ZM13.125 11.9223C13.125 11.4851 13.4608 11.1307 13.875 11.1307C14.2892 11.1307 14.625 11.4851 14.625 11.9223V13.0623C14.625 15.2485 12.9461 17.0207 10.875 17.0207H5.625C3.55393 17.0207 1.875 15.2485 1.875 13.0623V7.52067C1.875 5.33454 3.55393 3.56234 5.625 3.56234H6.705C7.11921 3.56234 7.455 3.91678 7.455 4.354C7.455 4.79123 7.11921 5.14567 6.705 5.14567H5.625C4.38236 5.14567 3.375 6.20899 3.375 7.52067V13.0623C3.375 14.374 4.38236 15.4373 5.625 15.4373H10.875C12.1176 15.4373 13.125 14.374 13.125 13.0623V11.9223Z"
                    fill="black"
                  />
                </svg>
              </a>
            </p>
          </li>
        ))}
        {offersJobs[0]?.id === 'cc8923015d4b038a82708f346b1d76' && <MainOffer />}
      </ul>
    </section>
  );
}
