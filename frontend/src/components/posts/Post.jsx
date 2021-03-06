import React, { useState } from "react";

import { Avatar } from "@mui/material";

import "../styles/Post.css";
import Comments from "../comments/Comments";

function Post({ userName, avatarURL, postURL, comment }) {
 
  return (
    <>
      <div>
        <div className="post">
          <div className="post_header">
            <div className="avatar">
              <Avatar alt="Remy Sharp" src={avatarURL} />
            </div>
            <div>
              <h3>{userName}</h3>
            </div>
          </div>
          <div className="post_div">
            <img className="post_img" src={postURL} alt="post1" />
          </div>
          {/* captio icons started */}
          <div className="caption_icons">
            <div>
              <svg
                aria-label="Like"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            </div>
            <div>
              <svg
                aria-label="Comment"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                aria-label="Share Post"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
          </div>
          {/* captio icons ended */}

          
        
          <Comments name={userName}/>
        </div>
      </div>
    </>
  );
}

export default Post;
