import Divider from '../Divider/Divider';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

function Staff(props) {
  return (
    <section className="staff app__section">
      <ul className="staff__list">
        <li className="staff__list-item">
          <EmployeeCard isLoading={props.isLoading} />
        </li>
      </ul>
      <Divider year={'2022'} />
    </section>
  );
}

export default Staff;