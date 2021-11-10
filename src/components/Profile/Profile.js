import Navigation from '../Navigation/Navigation';
import avatar from '../../images/avatar-plug.png';

function Profile(props) {
  return (
    <>
      <header className="header header_position_profile">
        <Navigation />
      </header>

      <main className="profile">
        <section className="profile__card employee employee_position_profile">
          <img className="profile__avatar employee__avatar" src={props.avatar || avatar} alt={props.name} />
          <div className="profile__info employee__info">
            <p className="profile__name employee__name">Павел Волков</p>
            <p className="profile__department employee__department">vp</p>
            <p className="profile__post employee__post">Art–Director</p>
          </div>
        </section>
        <section className="profile__contact-info app__section">
          <ul className="profile__contact-list">
            <li className="profile__contact-list-item">
              <p className="profile__personal-data profile__personal-data_type_birthdate">5 июня 1996</p>
              <p className="profile__age">24 года</p>
            </li>
            <li className="profile__contact-list-item">
              <a href={`tel:${props.phoneNumber}`} className="profile__link app__link profile__personal-data profile__personal-data_type_tel">+7 (999) 900 90 90</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Profile;