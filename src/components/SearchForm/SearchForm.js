import React from 'react';
import { infoMessages } from '../../utils/constants';

function SearchForm(props) {
  const [input, setInput] = React.useState('');
  const [validityError, setValidityError] = React.useState('');
  const sortBtnClassName = `app__button search__btn search__btn_action_sort ${props.isSortByBirthday ? 'search__btn_active' : ''}`;

  function handleInputChange(e) {
    const input = e.target;
    const { value } = input;
    setInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSearch(input);

    if (/^\s+$/.test(input)) {
      props.setSearchError(true);
      setValidityError(infoMessages.searchInputEmpty);
    } else {
      props.setSearchError(false);
      setValidityError('');
    }
  }

  return (
    <form className="search" name="search-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="search__fieldset" disabled={props.isLoading}>
        <div className="search__input-wrap">
          <button className="app__button search__btn search__btn_action_submit" type="submit" aria-label="Поиск" title="Поиск" />
          <input type="search" name="search" required
            autoComplete="off"
            className="search__form-input"
            placeholder="Введи имя, тег, почту..."
            onChange={handleInputChange}
            value={input}
          />
          <button className={sortBtnClassName} type="button" aria-label="Сортировка" title="Сортировка" onClick={props.onSortBnt} />
        </div>
        { validityError && <p className="search__error">{validityError}</p> }
      </fieldset>
    </form>
  );
}

export default SearchForm;