import { useState } from 'react';

function SearchFilter({ setSearchQuery, setFilters }) {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [localFilters, setLocalFilters] = useState({ gender: '', color: '', type: '', priceRange: [0, 100] });

  const handleSearchChange = (e) => {
    setLocalSearchQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        value={localSearchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name, color, or type..."
      />
      <select name="gender" value={localFilters.gender} onChange={handleFilterChange}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select name="color" value={localFilters.color} onChange={handleFilterChange}>
        <option value="">All Colors</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
      <select name="type" value={localFilters.type} onChange={handleFilterChange}>
        <option value="">All Types</option>
        <option value="Polo">Polo</option>
        <option value="T-Shirt">T-Shirt</option>
      </select>
      <input
        type="range"
        name="priceRange"
        min="0"
        max="100"
        value={localFilters.priceRange[1]}
        onChange={(e) => handleFilterChange({ target: { name: 'priceRange', value: [0, e.target.value] } })}
      />
      <span>Up to ${localFilters.priceRange[1]}</span>
    </div>
  );
}

export default SearchFilter;
