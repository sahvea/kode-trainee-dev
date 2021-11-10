import Divider from '../Divider/Divider';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

function Staff() {
  return (
    <section className="staff">
      <ul className="staff__list">
        <li className="staff__list-item">
          <EmployeeCard />
        </li>
      </ul>
      <Divider year={'2022'} />
    </section>
  );
}

export default Staff;