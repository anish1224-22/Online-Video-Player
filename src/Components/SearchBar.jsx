import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <div className="searchBar" style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:"30%",
      backgroundColor:"white",
      borderRadius:"auto",
      margin:'auto'
    }}>
        <input
          placeholder="Search...."
          className="search-bar"
          onChange={(e) => {setSearchTerm(e.target.value)}}
          style={{border:"solid 1px grey",width:"90%"}}
        />
        <IconButton type="submit" sx={{color:"red",p:"10px"}} onClick={handleSubmit}>
          <Search />
        </IconButton>
    </div>
  );
};

export default SearchBar;
