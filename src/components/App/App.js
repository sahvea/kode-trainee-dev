import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import { api } from '../../utils/api';
import { filterArrayByName } from '../../utils/utils';


function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFilterModalWindowOpen, setIsFilterModalWindowOpen] = React.useState(false);
  const [isImageModalWindowOpen, setIsImageModalWindowOpen] = React.useState(false);
  const [isCriticalError, setIsCriticalError] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState(false);
  const [isSearched, setIsSearched] = React.useState(false);
  const [staffMembers, setStaffMembers] = React.useState([]);
  const [searchedStaffMembers, setSearchedStaffMembers] = React.useState([]);
  const [selectedEmployeeData, setSelectedEmployeeData] = React.useState({});
  const [isOnline, setIsOnline] = React.useState(window.navigator.onLine);

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
        .then(res => {
          setStaffMembers(res.data.items);
        })
        .catch(err => {
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

  function handleSearch(keyword) {
    const filteredStaffMembers = filterArrayByName(staffMembers, keyword);
    setSearchedStaffMembers(filteredStaffMembers);

    if (!keyword) {
      setIsSearched(false);
    } else {
      setIsSearched(true);
    }
  }

  function handleEmployeeCardClick(userData) {
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

  // закрытие модального окна по Esc
  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeModalWindows();
      }
    }
    document.addEventListener('keydown', handleEscClose);

    return () => document.removeEventListener('keydown', handleEscClose);
  }, []);

  // закрытие модального окна по клику вне окна
  React.useEffect(() => {
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('modal-window_opened')) {
        closeModalWindows();
      }
    }
    document.addEventListener('click', handleOverlayClose);

    return () => document.removeEventListener('click', handleOverlayClose);
  }, []);


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
