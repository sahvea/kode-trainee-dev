import React from 'react';
import { useLocation } from 'react-router';
import SkeletonProfile from '../Skeleton/SkeletonProfile';
import Navigation from '../Navigation/Navigation';
import ErrorSection from '../ErrorSection/ErrorSection';
import { getAge, getNoun, getPhoneNumber, parseEmployee } from '../../utils/utils';
import ImageModalWindow from '../ImageModalWindow/ImageModalWindow';
import { EmployeeData, ParsedEmployeeData } from '../../utils/types';

type Props = {
  employeeData: ParsedEmployeeData;
  staffMembers: EmployeeData[];
  isLoading: boolean;
  isCriticalError: boolean;
  isModalWindowOpen: boolean;
  openModalWindow: () => void;
  closeModalWindow: () => void;
}

const Profile: React.FC<Props> = ({
  employeeData,
  staffMembers,
  isLoading,
  isCriticalError,
  isModalWindowOpen,
  openModalWindow,
  closeModalWindow,
}) => {
  const location = useLocation();
  const employeeId: string = employeeData.id;
  const pathnameId: string = location.pathname.split('/profile/').join('');
  const [employeeInfo, setEmployeeInfo] = React.useState<ParsedEmployeeData | any>({});
  const [phoneNumberUrl, setPhoneNumberUrl] = React.useState<string>('');
  const [employeePhoneNumber, setEmployeePhoneNumber] = React.useState<string>('');


  React.useEffect(() => {
    if (employeeId) {
      setEmployeeInfo(employeeData);
      getPhoneNumber(employeeData.phone, setPhoneNumberUrl, setEmployeePhoneNumber);

    // находит сотрудника по id из основого массива при переходе по ссылке / перезагрузке страницы
    } else if (!employeeId && staffMembers.length > 0) {
      const employeeArr = staffMembers.filter(item => item.id === pathnameId);
      const newEmployeeData = Object.assign({}, employeeArr)[0];

      setEmployeeInfo(parseEmployee(newEmployeeData));
      getPhoneNumber(newEmployeeData.phone, setPhoneNumberUrl, setEmployeePhoneNumber);
    }
  }, [employeeId, pathnameId, employeeData, staffMembers]);


  const age = getAge(employeeInfo.birthDate);
  const employeeAge = `${age} ${getNoun(age, 'год', 'года', 'лет')}`;
  const employeeBirthDate = new Date(employeeInfo.birthDate)
          .toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'})
          .split(' г.').join('');


  return (
    <>
      {isCriticalError
        ? <main>
            <ErrorSection criticalError={isCriticalError} />
          </main>
        : <>
            <header className="header header_position_profile">
              <Navigation />
            </header>

            {isLoading
              ? <SkeletonProfile />
              : <>
                  <main className="profile">
                    <section className="profile__card employee employee_position_profile">
                      <img className="profile__avatar employee__avatar" src={employeeInfo.avatar} alt={employeeInfo.name} onClick={openModalWindow} />
                      <div className="profile__info employee__info">
                        <p className="profile__name employee__name">{employeeInfo.name}</p>
                        <p className="profile__nickname employee__nickname">{employeeInfo.nickname}</p>
                        <p className="profile__post employee__post">{employeeInfo.post}</p>
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

                  <ImageModalWindow
                    isOpen={isModalWindowOpen}
                    onClose={closeModalWindow}
                    avatar={employeeInfo.avatar}
                    name={employeeInfo.name}
                  />
                </>
            }
          </>
      }
    </>
  );
}

export default Profile;