import React from 'react';
import './App.css';
import InputComponent from './İnput';
import { useSearch } from './searchUtils';

import emojiData from './emojiList.json';

function App() {
  const { searchResults, suggestions, searchText, showSuggestions, setSearchText, setShowSuggestions, handleSearch, filteredSubmit, handleSelectSuggestion } = useSearch(emojiData);

  return (
    <div className="App">
      <InputComponent
        onSearch={handleSearch}
        suggestions={suggestions}
        onSubmit={filteredSubmit}
        onSelectSuggestion={handleSelectSuggestion}
        searchText={searchText}
        setSearchText={setSearchText}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
      
      />
      <div className="search-results">
        {searchResults.map((emoji) => (
          <div className="emoji" key={emoji.title}>
            <div className="size">{emoji.symbol}</div>
            <div className="title">{emoji.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;