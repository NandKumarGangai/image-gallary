import React from "react";
import "./style.css";

const ImageCard = ({
  image: { webformatURL, user, likes, downloads, views, tags },
}) => {
  return (
    <div className="ib-container">
      <div>
        <img src={webformatURL} className="image" alt="" />
      </div>
      <div className="ib-info-box">
        <div className="ib-info">
          <div className="">Photo by <h4>{user}</h4></div>
          {/* <ul>
            <li>
              <strong>Views: </strong>
              {views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {likes}
            </li>
          </ul> */}
        </div>
        {/* <div className="ib-tags">
          {tags.split(" ").map((tag, i) => (
            <span key={i} className="">
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ImageCard;
