// import Divider from '../Divider/Divider';
import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
// import Divider from '../Divider/Divider';
import { sortByAlphabet, sortByBirthday } from '../../utils/utils';

function Staff(props) {
  const arraySortedByAlphabet = props.staffMembers.sort(sortByAlphabet);
  const arraySortedByBirthday = props.staffMembers.sort(sortByBirthday);
  const [staffArraySorted, setStaffArraySorted] = React.useState([]);


  React.useEffect(() => {
    if (props.isSortByBirthday) {
      setStaffArraySorted(arraySortedByBirthday);
    }
    else {
      setStaffArraySorted(arraySortedByAlphabet);
    }

    console.log(staffArraySorted);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isSortByBirthday, props.staffMembers]);

  return (
    <section className="staff app__section">
      <ul className="staff__list">
        {
          props.isLoading
            ? <SkeletonCard />
            : staffArraySorted.map(item => (
              <li className="staff__list-item" key={item.id}>
                <EmployeeCard
                  employee={item}
                />
              </li>
            ))
        }
      </ul>
      {/* {isNextYear && <Divider year={'2022'} /> } */}
    </section>
  );
}

export default Staff;