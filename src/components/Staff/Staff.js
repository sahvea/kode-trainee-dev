// import Divider from '../Divider/Divider';
import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import SkeletonCard from '../SkeletonCard/SkeletonCard';

function Staff(props) {
  const staffArrayDefault = props.staffMembers.sort((a, b) => a.firstName.localeCompare(b.firstName));
  const staffArraySorted = props.staffMembers.sort((a, b) => a.birthday.localeCompare(b.birthday));

  // const [staffArraySorted, setStaffArraySorted] = React.useState([]);
  // const staffArraySorted = props.staffMembers.sort((a, b) => {
//     //calculate the difference between first date and current date
//     const firstDifference = new Date() - new Date(a.birthday);
//     //calculate difference between second date and current date.
//     const secondDifference = new Date() - new Date(b.birthday);
//     a.birthday.localeCompare(b.birthday)

//     //return the smallest value.
//     return firstDifference - secondDifference;
//   });





//  React.useEffect(() => {

//   console.log(staffArraySorted);
//  }, [staffArraySorted]);

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
      {/* <Divider year={'2022'} /> */}
    </section>
  );
}

export default Staff;