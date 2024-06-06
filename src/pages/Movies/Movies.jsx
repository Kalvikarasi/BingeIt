
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/singleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

import "../Trending/Trending.css";

function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
        );
        setContent(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Popular Movies</span>
      <div className="trending">
        {content.map((contentItem) => (
          <SingleContent
            key={contentItem.id}
            id={contentItem.id}
            media_type="movie"
            poster={contentItem.poster_path}
            title={contentItem.title}
            date={contentItem.release_date}
            vote_average={contentItem.vote_average}
          />
        ))}
      </div>
      <CustomPagination setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default Movies;
