import { useState } from 'react';

const FilterLayout = ({ setSearchQuery, setFilters }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [localFilters, setLocalFilters] = useState({
    gender: '',
    color: '',
    type: '',
    priceRange: [0, 100],
  });

  const handleSearchChange = (e) => {
    setLocalSearchQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };
  return (
    <section className='flex items-center justify-between gap-[2em] flex-wrap sm:text-[.8rem]'>
      <input
        type='text'
        className='p-[.6rem_1em] min-w-[200px] max-w-[300px] bg-[#f5f5f5] rounded-[10px] border-[2px] border-[#d1d1d1] sm:w-[100%]'
        value={localSearchQuery}
        onChange={handleSearchChange}
        placeholder='Search by name, color, or type...'
      />
      <select
        name='gender'
        value={localFilters.gender}
        onChange={handleFilterChange}
      >
        <option value=''>All Genders</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
      </select>
      <select
        name='color'
        value={localFilters.color}
        onChange={handleFilterChange}
      >
        <option value=''>All Colors</option>
        <option value='Orange'>Orange</option>
        <option value='Green'>Green</option>
        <option value='Blue'>Blue</option>
        <option value='White'>White</option>
        <option value='Black'>Black</option>
      </select>
      <select
        name='type'
        value={localFilters.type}
        onChange={handleFilterChange}
      >
        <option value=''>All Types</option>
        <option value='Polo'>Polo</option>
        <option value='T-Shirt'>T-Shirt</option>
        <option value='Hoodie'>Hoodie</option>
      </select>
      <div className='flex gap-3'>
        <span>Price: </span>
        <input
          type='range'
          name='priceRange'
          min='0'
          max='100'
          value={localFilters.priceRange[1]}
          onChange={(e) =>
            handleFilterChange({
              target: { name: 'priceRange', value: [0, e.target.value] },
            })
          }
          className='w-[100px]'
        />
        <span>Up to ${localFilters.priceRange[1]}</span>
      </div>
    </section>
  );
};

export default FilterLayout;
