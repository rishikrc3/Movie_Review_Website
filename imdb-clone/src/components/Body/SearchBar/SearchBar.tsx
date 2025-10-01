import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchBar = ({ movieName, setMovieName, handleClick}) => {
  
    return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 4,
          px: 2,
        }}
      >
        <TextField
          variant="outlined"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Search movies..."
          sx={{
            width: "100%",
            maxWidth: 600,
          }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          startIcon={<SearchIcon />}
          size="large"
          sx={{
            bgcolor: "#f9a8d4",
            "&:hover": {
              bgcolor: "#ec4899",
            },
            minWidth: 120,
            textTransform: "none",
          }}
        >
          Search
        </Button>
      </Box>
    </>
  );
};

export default SearchBar;
