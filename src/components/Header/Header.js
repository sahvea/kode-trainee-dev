import SearchForm from '../SearchForm/SearchForm';
import TabBar from '../TabBar/TabBar';
import { tabArray } from '../../utils/constants';

function Header(props) {
  return (
    <header className="header app__section">
      <h1 className="header__title">Поиск</h1>

      <SearchForm
        className={'header__search'}
        onSearch={props.onSearch}
        onSortBnt={props.onSortBnt}
        setSearchError={props.setSearchError}
        isSortByBirthday={props.isSortByBirthday}
        isLoading={props.isLoading}
      />

      <TabBar array={tabArray} setActiveTab={props.setActiveTab} />
    </header>
  );
}

export default Header;