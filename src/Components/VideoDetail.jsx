import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([null]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          flex={1}
          sx={{
            width: "100%",
            position: "sticky",
            aspectRatio: "16/9",
          }}
        >
          <ReactPlayer
            className="reactPlayer"
            controls
            url={`https://www.youtube.com/watch?v=${id}`}
            style={{ aspectRatio: "16/9" }}
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link
              to={`/channel/${videoDetail?.snippet?.channelId}`}
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <Typography variant={{ sm: "subtitle1", md: "h6" }}>
                {videoDetail?.snippet?.channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: "0.7" }}>
                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()}{" "}
                Views
              </Typography>
              <Typography variant="body1" sx={{ opacity: "0.7" }}>
                {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}{" "}
                Likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Related Videos
          </Typography>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
