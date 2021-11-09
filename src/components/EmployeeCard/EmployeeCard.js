import avatar from '../../images/avatar-plug.png';

function EmployeeCard(props) {
  return (
    <article className="employee">
      <img className="employee__avatar" src={props.avatar || avatar} alt={props.name} />
      <div className="employee__info">
        <p className="employee__name">Павел Волков</p>
        <p className="employee__department">vp</p>
        <p className="employee__post">Art–Director</p>
      </div>
      { props.birthdate && <p className="employee__birthdate">5 июн</p> }
    </article>
  );
}

export default EmployeeCard;