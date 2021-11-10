import { Link } from 'react-router-dom';
import avatar from '../../images/avatar-plug.png';

function EmployeeCard(props) {
  return (
    <article className="employee">
      <img className="employee__avatar" src={props.avatar || avatar} alt={props.name} />
      <Link to="/profile" className="employee__info app__link">
        <p className="employee__name">Павел Волков</p>
        <p className="employee__department">vp</p>
        <p className="employee__post">Art–Director</p>
      </Link>
      { props.birthdate && <p className="employee__birthdate">5 июн</p> }
    </article>
  );
}

export default EmployeeCard;