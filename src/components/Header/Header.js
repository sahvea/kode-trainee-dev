import SearchForm from "../SearchForm/SearchForm";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Поиск</h1>
      <SearchForm className={'header__search'} />
    </header>
  );
}

export default Header;