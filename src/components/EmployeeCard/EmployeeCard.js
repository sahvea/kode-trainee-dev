import React from 'react';
import { Link } from 'react-router-dom';
import { parseEmployee } from '../../utils/utils';

function EmployeeCard(props) {
  const employeeData = parseEmployee(props.employee);
  const employeeBirthDate = new Date(employeeData.birthDate)
          .toLocaleString('ru', {day: 'numeric', month: 'short'})
          .split('.').join('');

  function handleCardClick() {
    props.onCardClick(employeeData);
  }

  return (
    <article className="employee">
      <Link
        to={{
          pathname: `/profile/${props.employee.id}`
        }}
        className="app__link employee__link-wrap"
        onClick={handleCardClick}
      >
        <img className="employee__avatar" src={employeeData.avatar} alt={employeeData.name} />
        <div className="employee__info">
          <p className="employee__name">{employeeData.name}</p>
          <p className="employee__nickname">{employeeData.nickname}</p>
          <p className="employee__post">{employeeData.post}</p>
        </div>
      </Link>
      { props.isBirthDate && <p className="employee__birthdate">{employeeBirthDate}</p> }
    </article>
  );
}

export default EmployeeCard;