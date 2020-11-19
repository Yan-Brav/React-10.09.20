import React from 'react'
import { NavLink } from 'react-router-dom';
import propTypes from './prop-types';

function AlbumsList({ albums }) {
    return (
        <div className="collection">
            {albums.map(({id, title}) => (
                <NavLink 
                    key={id}
                    to={`/albums/${id}`} 
                    className="collection-item" 
                    activeClassName="active"
                >{title}</NavLink>
            ))}
        </div>
    )
}

AlbumsList.propTypes = {
    albums: propTypes.albums
}

export default AlbumsList
