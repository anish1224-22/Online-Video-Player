import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { categories } from '../Utils/Constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const [temp, setTemp] = useState(null);

  const handleHover = (categoryName) => {
    setTemp(categoryName);
  };

  const handleLeave = () => {
    setTemp(null);
  };


  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
        justifyContent: 'space-between',
        
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category.name}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            background:
              category.name === temp || category.name === selectedCategory
                ? 'red'
                : '#000',
            cursor: 'pointer',
            borderRadius: '40px',
            border: 'none',
            transition: 'background 0.3s, color 0.3s',
          }}
          onClick={()=>setSelectedCategory(category.name)}
          onMouseEnter={() => handleHover(category.name)}
          onMouseLeave={handleLeave}
        >
          <span
            style={{
              color:
                category.name === temp || category.name === selectedCategory
                  ? 'white'
                  : 'red',
            }}
          >
            {category.icon}
          </span>
          <span style={{ margin: 'auto', color: 'white' }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
