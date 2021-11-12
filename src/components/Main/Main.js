import React from 'react';
import Header from '../Header/Header';
import Staff from '../Staff/Staff';
import ErrorSection from '../ErrorSection/ErrorSection';
import { errorInfoConfig } from '../../utils/constants';
import { filterArrayByDepartament } from '../../utils/utils';


function Main(props) {
  const [activeTab, setActiveTab] = React.useState('all');
  const [staffMembers, setStaffMembers] = React.useState([]);

  React.useEffect(() => {
    if (activeTab !== 'all') {
      setStaffMembers(filterArrayByDepartament(props.staffMembers, activeTab));
    } else {
      setStaffMembers(props.staffMembers);
    }
  }, [activeTab, props.staffMembers]);

  return (
    <>
      <Header
        onSearch={props.onSearch}
        onSortBnt={props.openModalWindow}
        setSearchError={props.setSearchError}
        isSortByBirthday={props.isSortByBirthday}
        setActiveTab={setActiveTab}
        isLoading={props.isLoading}
      />
      <main>
        {
          ( props.isCriticalError || props.isSearchError || (!props.isLoading && staffMembers.length <= 0) )
          ? <ErrorSection
              criticalError={props.isCriticalError}
              img={props.isCriticalError ? errorInfoConfig.critical.img : errorInfoConfig.search.img}
              error={props.isCriticalError ? errorInfoConfig.critical.title : errorInfoConfig.search.title}
              info={props.isCriticalError ? errorInfoConfig.critical.subtitle : errorInfoConfig.search.subtitle}
            />
          : <Staff
              isLoading={props.isLoading}
              staffMembers={staffMembers}
              isSortByBirthday={props.isSortByBirthday}
            />
        }
      </main>
    </>
  );
}

export default Main;