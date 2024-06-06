import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/singleContent/SingleContent";
import "./Trending.css";

import CustomPagination from "../../components/Pagination/CustomPagination";


function Trending (){
    const [page, setPage] = useState(1);
    const [content,setContent] =useState([]);

    const [totalPages, setTotalPages] = useState(0);

   
    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
                );
                console.log(data);
                setContent(data.results);
                setTotalPages(data.total_pages);
            } catch (error) {
                console.error("Error fetching trending data:", error.message);
            }
        };

        fetchTrending();
    }, [page]);

    

    return (
        <div>
            <span className="pageTitle">Trending</span> 
            <div className="trending">
            
            {
                content.map((contentItem)=>{
                    return (
                    <SingleContent 
                       key={contentItem.id}
                       id= {contentItem.id}
                       media_type={contentItem.media_type}
                       poster = {contentItem.poster_path}
                       title ={contentItem.name || contentItem.title}
                       date ={contentItem.first_air_date || contentItem.release_date}
                       vote_average ={contentItem.vote_average}

                     />
                    );
                })
            }

           
        </div>
        <CustomPagination setPage={setPage} totalPages={totalPages} />
       
    </div>

    );
}

export default Trending;