import React  from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Trending from "../pages/Trending/Trending";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import Search from "../pages/Search/Search";




function App() {
  return (

    <BrowserRouter>
     <Header />
     <div className = "app"> 
     <Container>
      <Routes>
        <Route path="/" Component={Trending} exact />
        <Route path="/movies" Component={Movies} />
        <Route path="/series" Component={Series} />
        <Route path="/search" Component={Search} />
      </Routes>
     </Container>


     </div>
     <Footer />
    </BrowserRouter>


     
  );
}

export default App;
