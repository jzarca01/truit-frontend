import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Gallery = ({items}) => {
    if (!items) return;

    const gallery = items.map((obj, i) => {
      return (
        <Link to={`venues/${obj.id}`} key={obj.id}>
          <div className="thumbnail">
            <img src={obj.img} alt={obj.title} className={'source'} />
            <div className="title">{obj.title}</div>
          </div>
        </Link>
      );
    });

    return <div className="gallery">{gallery}</div>;
  }

export default Gallery;
