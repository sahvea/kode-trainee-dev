import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ModalWindow from '../ModalWindow/ModalWindow';


function App() {
  const [isModalWindowOpen, setIsModalWindowOpen] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isCriticalError, setIsCriticalError] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState(false);



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
              openModalWindow={openModalWindow}
              setSearchError={setIsSearchError}
              isCriticalError={isCriticalError}
              isSearchError={isSearchError}
            />}
        />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ModalWindow isOpen={isModalWindowOpen} onClose={closeModalWindow} />
    </>
  );
}

export default App;
