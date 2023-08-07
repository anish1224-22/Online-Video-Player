import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '3a8c6f7609msh352fd5564842f01p1e2496jsn6845bfe37345',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url)=>{
   const {data} =await axios.get(`${BASE_URL}/${url}`,options);
   return data;
  }