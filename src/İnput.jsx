import React from 'react';
import './App.css';

const InputComponent = ({
  onSearch,
  suggestions,
  onSubmit,
  onSelectSuggestion,
  searchText,
  setSearchText,
  showSuggestions,
  setShowSuggestions,
}) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    onSearch(value);
    setShowSuggestions(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchText);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
    onSelectSuggestion(suggestion);
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className='design'>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-bar"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {showSuggestions && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputComponent;