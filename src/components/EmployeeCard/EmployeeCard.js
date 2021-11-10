import { Link } from 'react-router-dom';
import avatar from '../../images/avatar-plug.png';

function EmployeeCard(props) {
  const employeeData = {
    avatar: props.employee.avatarUrl || avatar,
    name: `${props.employee.firstName} ${props.employee.lastName}`,
    nickname: props.employee.userTag,
    department: props.employee.department,
    post: props.employee.position,
    birthdate: props.employee.birthday,
    phone: props.employee.phone
  };

  const employeeNickname = employeeData.nickname.toLowerCase();


  return (
    <article className="employee">
      <img className="employee__avatar" src={employeeData.avatar} alt={employeeData.name} />

      <Link to="/profile" className="employee__info app__link">
        <p className="employee__name">{employeeData.name}</p>
        <p className="employee__nickname">{employeeNickname}</p>
        <p className="employee__post">{employeeData.post}</p>
      </Link>
      { props.birthdate && <p className="employee__birthdate">{employeeData.birthdate}</p> }
    </article>
  );
}

export default EmployeeCard;