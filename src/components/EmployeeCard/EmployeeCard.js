import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar-plug.png';

function EmployeeCard(props) {
  const employeeData = {
    id: props.employee.id,
    avatar: props.employee.avatarUrl || avatar,
    name: `${props.employee.firstName} ${props.employee.lastName}`,
    nickname: `${props.employee.userTag.toLowerCase()}`,
    post: props.employee.position,
    birthDate: props.employee.birthday,
    phone: props.employee.phone
  };

  const employeeBirthDate = new Date(employeeData.birthDate)
          .toLocaleString('ru', {day: 'numeric', month: 'short'})
          .split('.').join('');

  function handleCardClick() {
    props.onCardClick(employeeData);
  }

  return (
    <article className="employee">
      <img className="employee__avatar" src={employeeData.avatar} alt={employeeData.name} />

      <Link
        to={{
          pathname: `/profile/${props.employee.id}`
        }}
        className="employee__info app__link"
        onClick={handleCardClick}
      >
        <p className="employee__name">{employeeData.name}</p>
        <p className="employee__nickname">{employeeData.nickname}</p>
        <p className="employee__post">{employeeData.post}</p>
      </Link>
      { props.isBirthDate && <p className="employee__birthdate">{employeeBirthDate}</p> }
    </article>
  );
}

export default EmployeeCard;