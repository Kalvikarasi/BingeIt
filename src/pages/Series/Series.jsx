
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/singleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

import "../Trending/Trending.css";

function Series() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
        );
        setContent(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching TV series:", error.message);
      }
    };

    fetchSeries();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Popular TV Series</span>
      <div className="trending">
        {content.map((contentItem) => (
          <SingleContent
            key={contentItem.id}
            id={contentItem.id}
            media_type="tv"
            poster={contentItem.poster_path}
            title={contentItem.name}
            date={contentItem.first_air_date}
            vote_average={contentItem.vote_average}
          />
        ))}
      </div>
      <CustomPagination setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default Series;
