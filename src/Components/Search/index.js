import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

function Search() {
  return (
    <Box className="searchWrapper" sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <Input
          className="searchInput"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

export default Search;
