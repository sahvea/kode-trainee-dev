function ErrorSection(props) {
  function refreshPage(){
    window.location.reload();
  }

  return (
    <section className="error">
      <img className="error__img" src={props.img} alt="произошла ошибка" />
      <h2 className="error__title">{props.error}</h2>
      <p className="error__subtitle">{props.info}</p>
      {
        props.criticalError && <button className="app__button error__refresh-btn" type="button" onClick={refreshPage}>Попробовать снова</button>
      }
    </section>
  );
}

export default ErrorSection;