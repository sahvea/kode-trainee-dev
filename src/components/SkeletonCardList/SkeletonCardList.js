import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCardList() {
  return (
    <ul className="staff__list">
      {Array(10)
        .fill()
        .map((item, index) => (
          <li className="staff__list-item" key={index}>
            <article className="employee">
              <Skeleton circle height={72} width={72} />

              <div className="employee__info app__link">
                <p className="employee__name">
                  <Skeleton width={144} borderRadius={50} />
                </p>
                <p className="employee__post">
                  <Skeleton width={80} borderRadius={50} />
                </p>
              </div>
            </article>
          </li>
        ))
      }
    </ul>
  );
}

export default SkeletonCardList;