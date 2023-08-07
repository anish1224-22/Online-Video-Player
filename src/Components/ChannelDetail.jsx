import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        if (data?.items && data.items.length > 0) {
          setChannelDetail(data.items[0]);
        }
      })
      .catch((error) => {

        console.error("Error fetching channel detail:", error);
      });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        if (data?.items) {
          setVideos(data.items);
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(145,46,191,1) 35%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
          height:'300px',
        }}
      >
        <ChannelCard channelDetail={channelDetail}/>
      </Box>
      <Box display='flex' p='2' sx={{marginTop:'10px'}}>
        <Box sx={{mr:{sm:'100px'}}}>
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
