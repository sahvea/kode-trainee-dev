import React, { ChangeEvent, Dispatch, SyntheticEvent } from 'react';
import { infoMessages } from '../../utils/constants';

type Props = {
  isLoading: boolean;
  isSortByBirthday: boolean;
  onSortBnt: () => void;
  onSearch: (input: string) => void;
  setSearchError: Dispatch<boolean>;
}

const SearchForm: React.FC<Props> = ({ isLoading, isSortByBirthday, onSortBnt, onSearch, setSearchError }) => {
  const [input, setInput] = React.useState<string>('');
  const [validityError, setValidityError] = React.useState<string>('');
  const sortBtnClassName: string = `app__button search__btn search__btn_action_sort ${isSortByBirthday ? 'search__btn_active' : ''}`;

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    const { value } = input;
    setInput(value);
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    onSearch(input);

    if (/^\s+$/.test(input)) {
      setSearchError(true);
      setValidityError(infoMessages.searchInputEmpty);
    } else {
      setSearchError(false);
      setValidityError('');
    }
  }

  return (
    <form className="search" name="search-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="search__fieldset" disabled={isLoading}>
        <div className="search__input-wrap">
          <button className="app__button search__btn search__btn_action_submit" type="submit" aria-label="Поиск" title="Поиск" />
          <input type="search" name="search" required
            autoComplete="off"
            className="search__form-input"
            placeholder="Введи имя, тег, почту..."
            onChange={handleInputChange}
            value={input}
          />
          <button className={sortBtnClassName} type="button" aria-label="Сортировка" title="Сортировка" onClick={onSortBnt} />
        </div>
        { validityError && <p className="search__error">{validityError}</p> }
      </fieldset>
    </form>
  );
}

export default SearchForm;