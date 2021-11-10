import Divider from '../Divider/Divider';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

function Staff(props) {

  return (
    <section className="staff app__section">
      <ul className="staff__list">
        {
          props.staffMembers.map(item => (
            <li className="staff__list-item" key={item.id}>
              <EmployeeCard
                isLoading={props.isLoading}
                avatar={item.avatarUrl}
                firstName={item.firstName}
                lastName={item.lastName}
                nickname={item.userTag}
                department={item.department}
                post={item.position}
                birthdate={item.birthday}
                phone={item.phone}
              />
            </li>
          ))
        }
      </ul>
      <Divider year={'2022'} />
    </section>
  );
}

export default Staff;