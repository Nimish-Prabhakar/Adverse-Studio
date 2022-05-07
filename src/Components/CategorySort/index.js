import React, { useState } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './style.css';

function CategorySort({ title, options, sortedValue }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openList, setOpenList] = useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    sortedValue(event.target.innerText);
    setOpenList((prevValue) => {
      return !prevValue;
    });
  };

  const handleOpenList = (e) => {
    setOpenList((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div className="categorySortWrapper">
      <div className="categorySortFlex">
        <p>{title}</p>
        {openList ? (
          <BsChevronCompactUp
            onClick={handleOpenList}
            className="dropDownIcon"
          />
        ) : (
          <BsChevronCompactDown
            onClick={handleOpenList}
            className="dropDownIcon"
          />
        )}
      </div>
      {openList && (
        <Box
          sx={{
            width: '150%',
            maxWidth: 160,
            bgcolor: 'white',
            border: '1px solid black',
            position: 'absolute',
            marginTop: '6px',
            marginLeft: '-15px',
          }}
        >
          {options.map((item) => {
            return (
              <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                  selected={selectedIndex === item.index}
                  onClick={(event) => handleListItemClick(event, item.index)}
                >
                  <ListItemText primary={item.itemText} />
                </ListItemButton>
              </List>
            );
          })}
        </Box>
      )}
    </div>
  );
}

export default CategorySort;
