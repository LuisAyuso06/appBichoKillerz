import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // Implementa aquí la lógica de búsqueda
  };

  return (
    <input
      type="text"
      placeholder="🔍"  // Reemplaza el texto por el símbolo que desees
      value={query}
      onChange={handleSearch}
      className="search-bar"
    />
  );
  
};

export default SearchBar;
