import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
          height: "100vh", // Set the height of the Stack container to fill the viewport height
        }}
      >
        <Box
          sx={{
            flex: "0 0 10rem",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
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
            {selectedCategory} <span style={{ color: "red",position:'sticky' }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </div>
  );
};

export default Feed;
