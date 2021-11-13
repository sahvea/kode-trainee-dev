import React from 'react';
import { useLocation } from 'react-router';
import Navigation from '../Navigation/Navigation';
import { getAge, getNoun, getPhoneNumber, parseEmployee } from '../../utils/utils';

function Profile(props) {
  const location = useLocation();
  const employeeId = props.employeeData.id;
  const pathnameId = location.pathname.split('/profile/').join('');
  const [employeeData, setEmployeeData] = React.useState({});
  const [phoneNumberUrl, setPhoneNumberUrl] = React.useState('');
  const [employeePhoneNumber, setEmployeePhoneNumber] = React.useState('');

  React.useEffect(() => {
    if (employeeId) {
      setEmployeeData(props.employeeData);
      getPhoneNumber(props.employeeData.phone, setPhoneNumberUrl, setEmployeePhoneNumber);

    // находит сотрудника по id из основого массива при переходе по ссылке / перезагрузке страницы
    } else if (!employeeId && props.staffMembers.length > 0) {
      const employeeArr = props.staffMembers.filter(item => item.id === pathnameId);
      const newEmployeeData = Object.assign({}, employeeArr)[0];

      setEmployeeData(parseEmployee(newEmployeeData));
      getPhoneNumber(newEmployeeData.phone, setPhoneNumberUrl, setEmployeePhoneNumber);
    }
  }, [employeeId, pathnameId, props.employeeData, props.staffMembers]);


  const age = getAge(employeeData.birthDate);
  const employeeAge = `${age} ${getNoun(age, 'год', 'года', 'лет')}`;
  const employeeBirthDate = new Date(employeeData.birthDate)
          .toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'})
          .split(' г.').join('');


  return (
    <>
      <header className="header header_position_profile">
        <Navigation />
      </header>

      <main className="profile">
        <section className="profile__card employee employee_position_profile">
          <img className="profile__avatar employee__avatar" src={employeeData.avatar} alt={employeeData.name} />
          <div className="profile__info employee__info">
            <p className="profile__name employee__name">{employeeData.name}</p>
            <p className="profile__nickname employee__nickname">{employeeData.nickname}</p>
            <p className="profile__post employee__post">{employeeData.post}</p>
          </div>
        </section>
        <section className="profile__contact-info app__section">
          <ul className="profile__contact-list">
            <li className="profile__contact-list-item">
              <p className="profile__personal-data profile__personal-data_type_birthdate">{employeeBirthDate}</p>
              <p className="profile__age">{employeeAge}</p>
            </li>
            <li className="profile__contact-list-item">
              <a href={`tel:${phoneNumberUrl}`} className="profile__link app__link profile__personal-data profile__personal-data_type_tel">{employeePhoneNumber}</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Profile;