import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonProfile() {
  return (
    <main className="profile">
      <section className="profile__card employee employee_position_profile">
        <Skeleton circle height={104} width={104} />

        <div className="profile__info employee__info">
          <p className="profile__name employee__name">
            <Skeleton width={230} borderRadius={50} />
          </p>
          <p className="employee__nickname"></p>
          <p className="profile__post employee__post">
            <Skeleton width={120} borderRadius={50} />
          </p>
        </div>
      </section>
      <section className="profile__contact-info app__section">
        <ul className="profile__contact-list">
          <li className="profile__contact-list-item">
            <p className="profile__personal-data profile__personal-data_type_birthdate">
              <Skeleton width={160} borderRadius={50} />
            </p>
            <p className="profile__age">
              <Skeleton width={60} borderRadius={50} />
            </p>
          </li>
          <li className="profile__contact-list-item">
            <p className="profile__personal-data profile__personal-data_type_tel">
              <Skeleton width={160} borderRadius={50} />
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default SkeletonProfile;