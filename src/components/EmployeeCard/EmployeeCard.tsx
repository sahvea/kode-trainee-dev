import React from 'react';
import { Link } from 'react-router-dom';
import { parseEmployee } from '../../utils/utils';
import { EmployeeData, ParsedEmployeeData } from '../../utils/types';

type Props = {
  employee: EmployeeData;
  isBirthDate: boolean;
  onCardClick: (arg: ParsedEmployeeData) => void;
}

const EmployeeCard: React.FC<Props> = ({ employee, isBirthDate, onCardClick }) => {
  const employeeData: ParsedEmployeeData = parseEmployee(employee);
  const employeeBirthDate: string = new Date(employeeData.birthDate)
          .toLocaleString('ru', {day: 'numeric', month: 'short'})
          .split('.').join('');

  function handleCardClick() {
    onCardClick(employeeData);
  }

  return (
    <article className="employee">
      <Link
        to={{
          pathname: `/profile/${employee.id}`
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
      { isBirthDate && <p className="employee__birthdate">{employeeBirthDate}</p> }
    </article>
  );
}

export default EmployeeCard;