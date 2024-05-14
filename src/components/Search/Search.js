const Search = (props) => {
  const { searchText, onSearchTextChange, onSearchClick } = props;
  const onValueChange = (value) => {
    onSearchTextChange(value);
    onSearchClick(value);
  }
  return (
    <div className="search">
      <input
        placeholder="Search for restaurants..."
        className="search-input"
        value={searchText}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
