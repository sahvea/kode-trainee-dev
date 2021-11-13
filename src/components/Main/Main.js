import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Staff from '../Staff/Staff';
import ErrorSection from '../ErrorSection/ErrorSection';
import { filterArrayByDepartament } from '../../utils/utils';


function Main(props) {
  const location = useLocation();
  const [isLocationChanged, setIsLocationChanged] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('all');
  const [staffMembers, setStaffMembers] = React.useState([]);

  React.useEffect(() => {
    if (activeTab !== 'all') {
      setStaffMembers(filterArrayByDepartament(props.staffMembers, activeTab));
    } else {
      setStaffMembers(props.staffMembers);
    }
  }, [activeTab, props.staffMembers]);

  // скелетная загрузка при возвращении на страницу (вместо ошибки поиска из-за пустого массива)
  React.useEffect(() => {
    setIsLocationChanged(true);
    setTimeout(() => setIsLocationChanged(false), 300);
  }, [location]);

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
        {props.isCriticalError || props.isSearchError || (!props.isLoading && !isLocationChanged && staffMembers.length <= 0)
          ? <ErrorSection criticalError={props.isCriticalError} />
          : <Staff
              isLoading={props.isLoading}
              isLocationChanged={isLocationChanged}
              staffMembers={staffMembers}
              isSortByBirthday={props.isSortByBirthday}
              onCardClick={props.onCardClick}
            />
        }
      </main>
    </>
  );
}

export default Main;