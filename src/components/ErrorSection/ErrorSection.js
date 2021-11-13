import { errorInfoConfig } from '../../utils/constants';

function ErrorSection(props) {
  const errorImg = props.criticalError ? errorInfoConfig.critical.img : errorInfoConfig.search.img;
  const errorTitle = props.criticalError ? errorInfoConfig.critical.title : errorInfoConfig.search.title;
  const errorSubtitle = props.criticalError ? errorInfoConfig.critical.subtitle : errorInfoConfig.search.subtitle;

  function refreshPage(){
    window.location.reload();
  }

  return (
    <section className="error">
      <img className="error__img" src={errorImg} alt="произошла ошибка" />
      <h2 className="error__title">{errorTitle}</h2>
      <p className="error__subtitle">{errorSubtitle}</p>
      {props.criticalError &&
        <button className="app__button error__refresh-btn" type="button" onClick={refreshPage}>Попробовать снова</button>
      }
    </section>
  );
}

export default ErrorSection;