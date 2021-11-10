// import Divider from '../Divider/Divider';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import SkeletonCard from '../SkeletonCard/SkeletonCard';

function Staff(props) {

  return (
    <section className="staff app__section">
      <ul className="staff__list">
        {
          props.isLoading
            ? <SkeletonCard />
            : props.staffMembers.map(item => (
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