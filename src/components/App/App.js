import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ModalWindow from '../ModalWindow/ModalWindow';
import { api } from '../../utils/api';



function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isModalWindowOpen, setIsModalWindowOpen] = React.useState(false);
  const [isCriticalError, setIsCriticalError] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState(false);
  const [isBdaySortChecked, setIsBdaySortChecked] = React.useState(false);
  const [staffMembers, setStaffMembers] = React.useState([]);



  React.useEffect(() => {
    setIsLoading(true);

    api.get('/users')
      .then(res => {
        setStaffMembers(res.data.items);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log('Error', err.message);
        }
        setIsCriticalError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);


  function openModalWindow() {
    setIsModalWindowOpen(true);
  }

  function closeModalWindow() {
    setIsModalWindowOpen(false);
  }

  // закрытие модального окна по Esc
  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeModalWindow();
      }
    }
    document.addEventListener('keydown', handleEscClose);

    return () => document.removeEventListener('keydown', handleEscClose);
  }, []);

  // закрытие модального окна по клику вне окна
  React.useEffect(() => {
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('modal-window_opened')) {
        closeModalWindow();
      }
    }
    document.addEventListener('click', handleOverlayClose);

    return () => document.removeEventListener('click', handleOverlayClose);
  }, []);


  return (
    <>
      <Routes>
        <Route path="/"
          element={
            <Main
              isLoading={isLoading}
              staffMembers={staffMembers}
              openModalWindow={openModalWindow}
              setSearchError={setIsSearchError}
              isCriticalError={isCriticalError}
              isSearchError={isSearchError}
              isSortByBirthday={isBdaySortChecked}
            />}
        />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ModalWindow isOpen={isModalWindowOpen} onClose={closeModalWindow} setChecked={setIsBdaySortChecked} />
    </>
  );
}

export default App;
