function SearchForm(props) {
  const sortBtnClassName = `app__button search__btn search__btn_action_sort ${props.isSortByBirthday ? 'search__btn_active' : ''}`;

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <form className="search" name="search-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="search__fieldset">
        <div className="search__input-wrap">
          <button className="app__button search__btn search__btn_action_submit" type="submit" aria-label="Поиск" title="Поиск" />
          <input type="search" name="search" required
            autoComplete="off"
            className="search__form-input"
            placeholder="Введи имя, тег, почту..."
            minLength="2"
          />
          <button className={sortBtnClassName} type="button" aria-label="Сортировка" title="Сортировка" onClick={props.onSortBnt} />
        </div>
        {/* {validityError && <p className="search__error">{validityError}</p>} */}
      </fieldset>
    </form>
  );
}

export default SearchForm;