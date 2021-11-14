import SearchForm from '../SearchForm/SearchForm';
import TabBar from '../TabBar/TabBar';
import { infoMessages, tabArray } from '../../utils/constants';

function Header(props) {
  const headerClassName = `header app__section ${!props.isOnline ? 'header_error' : props.isLoading ? 'header_loading' : ''}`;
  const headerTitleClassName = `header__title ${!props.isOnline || props.isLoading ? 'header__title_response' : ''}`;

  return (
    <header className={headerClassName}>
      <h1 className={headerTitleClassName}>Поиск</h1>

      {!props.isOnline || props.isLoading
        ? <p className="header__info-message">{!props.isOnline ? infoMessages.offline : props.isLoading && infoMessages.gettingData}</p>
        : <SearchForm
            className={'header__search'}
            onSearch={props.onSearch}
            onSortBnt={props.onSortBnt}
            setSearchError={props.setSearchError}
            isSortByBirthday={props.isSortByBirthday}
            isLoading={props.isLoading}
          />
      }

      <TabBar array={tabArray} setActiveTab={props.setActiveTab} />
    </header>
  );
}

export default Header;