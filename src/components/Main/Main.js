import React from 'react';
import Header from '../Header/Header';
import Staff from '../Staff/Staff';
import ErrorSection from '../ErrorSection/ErrorSection';
import { errorInfoConfig } from '../../utils/constants';


function Main(props) {
  const [isSortByBirthday, setIsSortByBirthday] = React.useState(true);

  return (
    <>
      <Header
        onSortBnt={props.openModalWindow}
        setSearchError={props.setSearchError}
        setIsSortByBirthday={setIsSortByBirthday}
      />
      <main>
        {
          ( props.isCriticalError || props.isSearchError )
          ? <ErrorSection
              criticalError={props.isCriticalError}
              img={props.isCriticalError ? errorInfoConfig.critical.img : errorInfoConfig.search.img}
              error={props.isCriticalError ? errorInfoConfig.critical.title : errorInfoConfig.search.title}
              info={props.isCriticalError ? errorInfoConfig.critical.subtitle : errorInfoConfig.search.subtitle}
            />
          : <Staff
              isLoading={props.isLoading}
              staffMembers={props.staffMembers}
              isSortByBirthday={isSortByBirthday}
            />
        }
      </main>
    </>
  );
}

export default Main;