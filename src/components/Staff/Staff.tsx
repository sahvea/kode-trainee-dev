import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import SkeletonCardList from '../Skeleton/SkeletonCardList';
import Divider from '../Divider/Divider';
import { sortArrayByBirthday } from '../../utils/utils';
import { nextYear } from '../../utils/constants';
import { EmployeeData, ParsedEmployeeData } from '../../utils/types';

type Props = {
  staffMembers: EmployeeData[];
  isLoading: boolean;
  isLocationChanged: boolean;
  isSortByBirthday: boolean;
  onCardClick: (arg: ParsedEmployeeData) => void;
}

const Staff: React.FC<Props> = ({ staffMembers, isLoading, isLocationChanged, isSortByBirthday, onCardClick }) => {
  const arraySortedByAlphabet: EmployeeData[] = staffMembers.sort((a, b) => a.firstName.localeCompare(b.firstName));

  const [thisYearBirthdays, nextYearBirthdays] = staffMembers
    .reduce((result: [EmployeeData[], EmployeeData[]], element: EmployeeData) => {
      const today: Date = new Date();
      const birthDate: Date = new Date(element.birthday);

      result[
        birthDate.getMonth() < today.getMonth()
        || (birthDate.getMonth() === today.getMonth() && birthDate.getDate() < today.getDate())
          ? 1
          : 0
      ].push(element);

      return result;
    }, [
      [], [] // по дефолту массивы thisYearBirthdays/nextYearBirthdays пусты
    ]);

  const staffArrayWithBdThisYear: EmployeeData[] = thisYearBirthdays.sort(sortArrayByBirthday);
  const staffArrayWithBdNextYear: EmployeeData[] = nextYearBirthdays.sort(sortArrayByBirthday);


  return (
    <section className="staff app__section">
      {
        isLoading || isLocationChanged
          ? <SkeletonCardList />
          : isSortByBirthday
            ? <>
                <ul className="staff__list">
                  { staffArrayWithBdThisYear.map(item => (
                      <li className="staff__list-item" key={item.id}>
                        <EmployeeCard
                          employee={item}
                          isBirthDate={true}
                          onCardClick={onCardClick}
                        />
                      </li>
                  )) }
                </ul>

                { staffArrayWithBdNextYear.length > 0 &&
                  <>
                    <Divider year={nextYear} />

                    <ul className="staff__list">
                      { staffArrayWithBdNextYear.map(item => (
                        <li className="staff__list-item" key={item.id}>
                          <EmployeeCard
                            employee={item}
                            isBirthDate={true}
                            onCardClick={onCardClick}
                          />
                        </li>
                      )) }
                    </ul>
                  </>
                }
              </>

            : <ul className="staff__list">
                { arraySortedByAlphabet.map(item => (
                  <li className="staff__list-item" key={item.id}>
                    <EmployeeCard
                      employee={item}
                      isBirthDate={false}
                      onCardClick={onCardClick}
                    />
                  </li>
                )) }
              </ul>
      }
    </section>
  );
}

export default Staff;