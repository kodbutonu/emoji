import { useState } from 'react';
import './App.css';
export function useSearch(emojiData) {
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (searchText) => {
    const filteredResults = emojiData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);

    const filteredSuggestions = emojiData
      .filter((item) => item.title.toLowerCase().startsWith(searchText.toLowerCase()))
      .map((item) => item.title);
    setSuggestions(filteredSuggestions);
  };

  const filteredSubmit = (searchText) => {
    const filteredResults = emojiData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);

    const filteredResults = emojiData.filter((item) =>
      item.title.toLowerCase().includes(suggestion.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return {
    searchResults,
    suggestions,
    searchText,
    showSuggestions,
    setSearchText,
    setShowSuggestions,
    handleSearch,
    filteredSubmit,
    handleSelectSuggestion,
  };
}