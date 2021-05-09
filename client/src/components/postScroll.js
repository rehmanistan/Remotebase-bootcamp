import React, { useState, useEffect } from "react";

export default function PostScroll(props) {
  return (
    <div className="stories__block bg-white">
      <div className="stories__img d-flex align-items-center justify-content-center flex-shrink-0">
        <img src="/images/stories-img.png" alt="Img" className="w-100 h-100" />
      </div>
      <div className="stories__detail">
        <h3 className="stories__block-heading mb-3 pb-1">{props.title}</h3>
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-center mb-3">
          <a href="#" className="app__link d-inline-flex mr-1">
            {props.author}
          </a>
          <span className="stories__date">{props.dateCreated}</span>
        </div>
        <p className="clamp-3 md__para mb-3 mb-sm-2">{props.content}</p>
        <div className="text-right">
          <a className="app__link d-inline-flex">Read More</a>
        </div>
      </div>
    </div>
  );
}
