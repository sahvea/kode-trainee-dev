import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import avatar from '../../images/avatar-plug.png';

function EmployeeCard(props) {
  const employeeName = `${props.firstName} ${props.lastName}`;


  return (
    <article className="employee">
      <div className="employee__avatar-wrap">
        {
          props.isLoading
            ? <Skeleton circle height="100%" />
            : <img className="employee__avatar" src={props.avatar || avatar} alt={employeeName} />
        }
      </div>

      <Link to="/profile" className="employee__info app__link">
        <p className="employee__name">{ props.isLoading ? <Skeleton width={144} borderRadius="50px" /> : employeeName }</p>
        <p className="employee__nickname">{ props.isLoading ? <Skeleton /> : props.nickname}</p>
        <p className="employee__post">{ props.isLoading ? <Skeleton width={80} borderRadius="50px" /> : props.post }</p>
      </Link>
      { props.birthdate && <p className="employee__birthdate">5 июн</p> }
    </article>
  );
}

export default EmployeeCard;