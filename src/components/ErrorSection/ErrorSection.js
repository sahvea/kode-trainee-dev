import errorImg from '../../images/flying-saucer.png'

function ErrorSection() {
  function refreshPage(){
    window.location.reload();
  }

  return (
    <section className="error">
      <img className="error__img" src={errorImg} alt="произошла ошибка" />
      <h2 className="error__title">Какой-то сверхразум все сломал</h2>
      <p className="error__subtitle">Постараемся быстро починить</p>
      <button className="app__button error__refresh-btn" type="button" onClick={refreshPage}>Попробовать снова</button>
    </section>
  );
}

export default ErrorSection;