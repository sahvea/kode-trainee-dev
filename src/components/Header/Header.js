import SearchForm from '../SearchForm/SearchForm';
import TabBar from '../TabBar/TabBar';
import { tabArray } from '../../utils/constants';

function Header(props) {
  return (
    <header className="header app__section">
      <h1 className="header__title">Поиск</h1>

      <SearchForm className={'header__search'}
        onSortBnt={props.onSortBnt}
        isSortByBirthday={props.isSortByBirthday}
      />

      <TabBar array={tabArray} />
    </header>
  );
}

export default Header;