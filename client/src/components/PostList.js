import React from "react";
import { Link } from "react-router-dom";

const PostList = (props) => {
  const posts = props.posts;

  return (
    <>
      {posts.map((item, index) => {
        const { title, content, author, dateCreated } = item;

        return (
          <>
            <div className="stories__detail">
              <h3 className="stories__block-heading mb-3 pb-1">{title}</h3>

              <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-center mb-3">
                <a href="#" className="app__link d-inline-flex mr-1">
                  {author}
                </a>
                <span className="stories__date">{dateCreated}</span>
              </div>

              <p className="clamp-3 md__para mb-3 mb-sm-2">{content}</p>

              <div className="text-right">
                <a className="app__link d-inline-flex">Read More</a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PostList;
