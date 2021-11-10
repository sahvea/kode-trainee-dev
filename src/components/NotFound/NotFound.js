import { Link } from 'react-router-dom';
import errorImg from '../../images/flying-saucer.png';

function NotFound() {
  return (
    <main>
      <section className="not-found app__section">
        <img className="not-found__img" src={errorImg} alt="страницы не существует" />
        <h1 className="not-found__error">404</h1>
        <p className="not-found__message">Страница не найдена</p>
        <Link to="/" className="not-found__return">Назад</Link>
      </section>
    </main>
  );
}

export default NotFound;