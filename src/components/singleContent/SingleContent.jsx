import React from "react";
import { img_300, unavailable } from "../../config/Config";
import "./SingleContent.css";
import Badge from '@mui/material/Badge';


function SingleContent(props){
    return (
        <div className="media"> 
            <Badge badgeContent={props.vote_average !== undefined ? props.vote_average.toFixed(1) : "N/A"} color="primary"/>

            <img className="poster" src={props.poster ? `${img_300}${props.poster}`  : unavailable} alt={props.title} />
            <b className="title"> {props.title}</b>
            <span className="subTitle">
                {props.media_type === "tv"? "TV Series" : "Movie"}
            </span>
            <span className="subTitle">{props.date}</span>
        </div>
    );
}

export default SingleContent;
