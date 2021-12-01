import React, { Dispatch } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import TabBar from '../TabBar/TabBar';
import { infoMessages, tabArray } from '../../utils/constants';

type Props = {
  isOnline: boolean;
  isLoading: boolean;
  isSortByBirthday: boolean;
  onSearch: (arg: string) => void;
  onSortBnt: () => void;
  setSearchError: Dispatch<boolean>;
  setActiveTab: Dispatch<string>;
}

const Header: React.FC<Props> = ({
  isOnline,
  isLoading,
  isSortByBirthday,
  onSearch,
  onSortBnt,
  setSearchError,
  setActiveTab,
}) => {
  const headerClassName: string = `header app__section ${!isOnline ? 'header_error' : isLoading ? 'header_loading' : ''}`;
  const headerTitleClassName: string = `header__title ${!isOnline || isLoading ? 'header__title_response' : ''}`;

  return (
    <header className={headerClassName}>
      <h1 className={headerTitleClassName}>Поиск</h1>

      {!isOnline || isLoading
        ? <p className="header__info-message">{!isOnline ? infoMessages.offline : isLoading && infoMessages.gettingData}</p>
        : <SearchForm
            onSearch={onSearch}
            onSortBnt={onSortBnt}
            setSearchError={setSearchError}
            isSortByBirthday={isSortByBirthday}
            isLoading={isLoading}
          />
      }

      <TabBar array={tabArray} setActiveTab={setActiveTab} />
    </header>
  );
}

export default Header;