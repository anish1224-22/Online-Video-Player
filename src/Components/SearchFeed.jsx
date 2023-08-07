import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams()
  useEffect(() => {
    setVideos([]);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <div style={{ overflow: "hidden" }}>
        <Box
          p={2}
          sx={{
            overflowY: "auto",
            height: "100%", 
            flex: 1, 
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white",marginLeft:'40%',marginRight:'30%'}}
          >
            Search Results for <span style={{ color: "red",position:'sticky' }}>"{searchTerm}" </span>
            Videos
          </Typography>
          <Videos videos={videos} />
        </Box>
    </div>
  );
};

export default SearchFeed;
