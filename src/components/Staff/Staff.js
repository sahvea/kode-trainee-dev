// import Divider from '../Divider/Divider';
import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import SkeletonCardList from '../SkeletonCardList/SkeletonCardList';
import Divider from '../Divider/Divider';
import { sortArrayByBirthday } from '../../utils/utils';
import { nextYear } from '../../utils/constants';

function Staff(props) {
  const arraySortedByAlphabet = props.staffMembers.sort((a, b) => a.firstName.localeCompare(b.firstName));

  const [thisYearBirthdays, nextYearBirthdays] = props.staffMembers
    .reduce((result, element) => {
      const today = new Date();
      const birthDate = new Date(element.birthday);

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

  const staffArrayWithBdThisYear = thisYearBirthdays.sort(sortArrayByBirthday);
  const staffArrayWithBdNextYear = nextYearBirthdays.sort(sortArrayByBirthday);


  return (
    <section className="staff app__section">
      {
        props.isLoading
          ? <SkeletonCardList />
          : props.isSortByBirthday
            ? <>
                <ul className="staff__list THIS_YEAR">
                  { staffArrayWithBdThisYear.map(item => (
                      <li className="staff__list-item" key={item.id}>
                        <EmployeeCard
                          employee={item}
                          isBirthDate={true}
                        />
                      </li>
                  )) }
                </ul>

                { staffArrayWithBdNextYear &&
                  <>
                    <Divider year={nextYear} />

                    <ul className="staff__list NEXT_YEAR">
                      { staffArrayWithBdNextYear.map(item => (
                        <li className="staff__list-item" key={item.id}>
                            <EmployeeCard
                              employee={item}
                              isBirthDate={true}
                            />
                          </li>
                      )) }
                    </ul>
                  </>
                }
              </>

            : <ul className="staff__list ALPHABET">
                { arraySortedByAlphabet.map(item => (
                  <li className="staff__list-item" key={item.id}>
                    <EmployeeCard
                      employee={item}
                      isBirthDate={false}
                    />
                  </li>
                )) }
              </ul>
      }
    </section>
  );
}

export default Staff;