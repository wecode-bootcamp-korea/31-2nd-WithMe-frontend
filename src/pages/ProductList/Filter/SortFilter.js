import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortFilter({
  setFilterValue,
  filterDisabled,
  setSortInput,
  sortInput,
}) {
  const handleChange = event => {
    setSortInput(event.target.value);
  };

  const handleFilterValue = (value, name) => {
    setFilterValue(prev => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth disabled={filterDisabled}>
        <InputLabel id="demo-simple-select-label">마감 임박순</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortInput}
          label="value"
          onChange={handleChange}
        >
          <MenuItem
            onClick={() => {
              handleFilterValue('running_date', 'sort');
            }}
            value="running_date"
          >
            마감 임박순
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterValue('-created_at', 'sort');
            }}
            value="-created_at"
          >
            최신 등록순
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterValue('price', 'sort');
            }}
            value="price"
          >
            낮은 금액순
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterValue('-price', 'sort');
            }}
            value="-price"
          >
            높은 금액순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
