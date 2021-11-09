import SearchForm from '../SearchForm/SearchForm';
import TabBar from '../TabBar/TabBar';
import { tabArray } from '../../utils/constants';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Поиск</h1>
      <SearchForm className={'header__search'} />
      <TabBar array={tabArray} />
    </header>
  );
}

export default Header;