import React from 'react';
import { errorInfoConfig } from '../../utils/constants';

type Props = {
  criticalError: boolean,
}

const ErrorSection: React.FC<Props> = ({ criticalError }) => {
  const errorImg = criticalError ? errorInfoConfig.critical.img : errorInfoConfig.search.img;
  const errorTitle = criticalError ? errorInfoConfig.critical.title : errorInfoConfig.search.title;
  const errorSubtitle = criticalError ? errorInfoConfig.critical.subtitle : errorInfoConfig.search.subtitle;

  function refreshPage(){
    window.location.reload();
  }

  return (
    <section className="error">
      <img className="error__img" src={errorImg} alt="произошла ошибка" />
      <h2 className="error__title">{errorTitle}</h2>
      <p className="error__subtitle">{errorSubtitle}</p>
      {criticalError &&
        <button className="app__button error__refresh-btn" type="button" onClick={refreshPage}>Попробовать снова</button>
      }
    </section>
  );
}

export default ErrorSection;