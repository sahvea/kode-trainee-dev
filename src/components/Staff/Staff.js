import EmployeeCard from '../EmployeeCard/EmployeeCard';

function Staff() {
  return (
    <section className="staff">
      <ul className="staff__list">
        <li className="staff__list-item">
          <EmployeeCard />
        </li>
      </ul>
    </section>
  );
}

export default Staff;