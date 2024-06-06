
import React, { useState } from "react";
import axios from "axios";
import SingleContent from "../../components/singleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import "./Search.css";

function Search() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchText, setSearchText] = useState("");

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${page}`
      );
      setContent(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchSearch();
  };

  return (
    <div>
      <span className="pageTitle">Search</span>
      <form onSubmit={handleSearch} className="searchForm">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for movies or TV series..."
          className="searchInput"
        />
        <button type="submit" className="searchButton">Search</button>
      </form>
      <div className="trending">
        {content.map((contentItem) => (
          <SingleContent
            key={contentItem.id}
            id={contentItem.id}
            media_type={contentItem.media_type}
            poster={contentItem.poster_path}
            title={contentItem.name || contentItem.title}
            date={contentItem.first_air_date || contentItem.release_date}
            vote_average={contentItem.vote_average}
          />
        ))}
      </div>
      <CustomPagination setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default Search;
