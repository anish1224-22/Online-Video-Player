import './App.css';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import VideoDetail from './Components/VideoDetail';
import ChannelDetail from './Components/ChannelDetail';
import SearchFeed from './Components/SearchFeed';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Box style={{backgroundColor:"#000"}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' exact element={<VideoDetail/>}/>
          <Route path='/channel/:id' exact element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
