import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar-plug.png';

function EmployeeCard(props) {
  const employeeData = {
    avatar: props.employee.avatarUrl || avatar,
    name: `${props.employee.firstName} ${props.employee.lastName}`,
    nickname: props.employee.userTag,
    department: props.employee.department,
    post: props.employee.position,
    birthDate: new Date(props.employee.birthday),
    phone: props.employee.phone
  };

  const employeeNickname = employeeData.nickname.toLowerCase();
  const employeeBirthDate = employeeData.birthDate
                              .toLocaleString('ru', {day: 'numeric', month: 'short'})
                              .split('.').join('');

  // const dateArray = Array.from(employeeData.birthDate);
  // const sorterEmployeeData = dateArray.sort((a, b) => b.birthDate - a.birthDate);


  // React.useEffect(() => {

  //   function findUpcomingBirthday(dataString) {
  //     const currentYear = new Date().getFullYear();
  //     const birthDate = new Date(dataString);
  //     let year;

  //     const age = currentYear - birthDate.getFullYear();
  //     const currentBirthday = birthDate.getFullYear() + age;

  //     if (currentBirthday > currentYear) {
  //       year = currentYear + 1;
  //     }

  //   }

  //   findUpcomingBirthday(props.employee.birthday);

  //   console.log(findUpcomingBirthday(props.employee.birthday));
  // }, [props.employee.birthday]);

  return (
    <article className="employee">
      <img className="employee__avatar" src={employeeData.avatar} alt={employeeData.name} />

      <Link to="/profile" className="employee__info app__link">
        <p className="employee__name">{employeeData.name}</p>
        <p className="employee__nickname">{employeeNickname}</p>
        <p className="employee__post">{employeeData.post}</p>
      </Link>
      { employeeBirthDate && <p className="employee__birthdate">{employeeBirthDate}</p> }
    </article>
  );
}

export default EmployeeCard;