import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';





export default function Footer() {
  
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() =>{
    if (value === 0) navigate("/");
    else if(value === 1) navigate("/movies");
    else if(value === 2) navigate("/series");
    else if(value === 3) navigate("/search");
    
  },[value,navigate]);



  return (
    <Box sx={{ 
      width: '100%',
      position:"fixed",
      backgroundColor:'#1c1c1c',
      bottom:0, 
      boxSizing: 'border-box',
      zIndex:1001
      
     }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{backgroundColor:'#1c1c1c', borderTop: '3px solid #e50914' }}
        
       
      >
        <BottomNavigationAction  style={{color:'white'}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction  style={{color:'white'}} label="Movies" icon={<MovieFilterIcon />} />
        <BottomNavigationAction  style={{color:'white'}} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction  style={{color:'white'}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
