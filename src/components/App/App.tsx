import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import { api } from '../../utils/api';
import { filterArrayByName } from '../../utils/utils';
import { EmployeeData, ParsedEmployeeData } from '../../utils/types';


const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isFilterModalWindowOpen, setIsFilterModalWindowOpen] = React.useState<boolean>(false);
  const [isImageModalWindowOpen, setIsImageModalWindowOpen] = React.useState<boolean>(false);
  const [isCriticalError, setIsCriticalError] = React.useState<boolean>(false);
  const [isSearchError, setIsSearchError] = React.useState<boolean>(false);
  const [isSearched, setIsSearched] = React.useState<boolean>(false);
  const [staffMembers, setStaffMembers] = React.useState<EmployeeData[]>([]);
  const [searchedStaffMembers, setSearchedStaffMembers] = React.useState<EmployeeData[]>([]);
  const [selectedEmployeeData, setSelectedEmployeeData] = React.useState<ParsedEmployeeData | any>({});
  const [isOnline, setIsOnline] = React.useState<boolean>(window.navigator.onLine);

  React.useEffect(() => {
    const updateNetwork = () => {
      setIsOnline(window.navigator.onLine);
    };

    window.addEventListener('offline', updateNetwork);
    window.addEventListener('online', updateNetwork);

    return () => {
      window.removeEventListener('offline', updateNetwork);
      window.removeEventListener('online', updateNetwork);
    };
  });

  React.useEffect(() => {
    if (isOnline) {
      setIsLoading(true);

      api.get('/users')
        .then((res: any) => {
          setStaffMembers(res.data.items);
        })
        .catch((err: any) => {
          if (err.response) {
            console.log(err.response.status);
            console.log(err.response.headers);
            console.log(err.response.data);
          } else {
            console.log('Error', err.message);
          }
          setIsCriticalError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isOnline]);

  function handleSearch(keyword: string) {
    const filteredStaffMembers: EmployeeData[] = filterArrayByName(staffMembers, keyword);
    setSearchedStaffMembers(filteredStaffMembers);

    if (!keyword) {
      setIsSearched(false);
    } else {
      setIsSearched(true);
    }
  }

  function handleEmployeeCardClick(userData: ParsedEmployeeData) {
    setSelectedEmployeeData(userData);
  }

  function openFilterModalWindow() {
    setIsFilterModalWindowOpen(true);
  }

  function openImageModalWindow() {
    setIsImageModalWindowOpen(true);
  }

  function closeModalWindows() {
    setIsFilterModalWindowOpen(false);
    setIsImageModalWindowOpen(false);
  }

  return (
    <Routes>
      <Route path="/"
        element={
          <Main
            isOnline={isOnline}
            isLoading={isLoading}
            staffMembers={isSearched ? searchedStaffMembers : staffMembers}
            setSearchError={setIsSearchError}
            isSearchError={isSearchError}
            isCriticalError={isCriticalError}
            onSearch={handleSearch}
            onCardClick={handleEmployeeCardClick}
            openModalWindow={openFilterModalWindow}
            isModalWindowOpen={isFilterModalWindowOpen}
            closeModalWindow={closeModalWindows}
          />}
      />

      <Route path="/profile/:id"
        element={
          <Profile
            employeeData={selectedEmployeeData}
            staffMembers={staffMembers}
            isLoading={isLoading}
            isCriticalError={isCriticalError}
            isModalWindowOpen={isImageModalWindowOpen}
            openModalWindow={openImageModalWindow}
            closeModalWindow={closeModalWindows}
          />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
