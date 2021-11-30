import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Staff from '../Staff/Staff';
import ErrorSection from '../ErrorSection/ErrorSection';
import FilterModalWindow from '../FilterModalWindow/FilterModalWindow';
import { filterArrayByDepartament } from '../../utils/utils';
import { EmployeeData } from '../../utils/types';

type Props = {
  staffMembers: EmployeeData[] | any,
  isOnline: boolean,
  isLoading: boolean,
  isSearchError: boolean,
  isCriticalError: boolean,
  isModalWindowOpen: boolean,
  setSearchError: () => void,
  onSearch: () => void,
  onCardClick: () => void,
  openModalWindow: () => void,
  closeModalWindow: () => void,
}

const Main: React.FC<Props> = ({
  staffMembers,
  isOnline,
  isLoading,
  isSearchError,
  isCriticalError,
  isModalWindowOpen,
  setSearchError,
  onSearch,
  onCardClick,
  openModalWindow,
  closeModalWindow,
}) => {
  const location = useLocation();
  const [isLocationChanged, setIsLocationChanged] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('all');
  const [staffMembersNewArray, setStaffMembersNewArray] = React.useState([]);
  const [isBdaySortChecked, setIsBdaySortChecked] = React.useState(false);

  React.useEffect(() => {
    if (activeTab !== 'all') {
      setStaffMembersNewArray(filterArrayByDepartament(staffMembers, activeTab));
    } else {
      setStaffMembersNewArray(staffMembers);
    }
  }, [activeTab, staffMembers]);

  // скелетная загрузка при возвращении на страницу (вместо ошибки поиска из-за пустого массива)
  React.useEffect(() => {
    setIsLocationChanged(true);
    setTimeout(() => setIsLocationChanged(false), 300);
  }, [location]);

  return (
    <>
      <Header
        isOnline={isOnline}
        onSearch={onSearch}
        onSortBnt={openModalWindow}
        setSearchError={setSearchError}
        isSortByBirthday={isBdaySortChecked}
        setActiveTab={setActiveTab}
        isLoading={isLoading}
      />
      <main>
        {isCriticalError || isSearchError || (!isLoading && !isLocationChanged && staffMembersNewArray.length <= 0)
          ? <ErrorSection criticalError={isCriticalError} />
          : <Staff
              isLoading={isLoading}
              isLocationChanged={isLocationChanged}
              staffMembers={staffMembersNewArray}
              isSortByBirthday={isBdaySortChecked}
              onCardClick={onCardClick}
            />
        }
      </main>

      <FilterModalWindow
        isOpen={isModalWindowOpen}
        onClose={closeModalWindow}
        setChecked={setIsBdaySortChecked}
      />
    </>
  );
}

export default Main;