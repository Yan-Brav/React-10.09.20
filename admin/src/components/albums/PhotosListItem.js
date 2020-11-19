import React from 'react'
import propTypes from './prop-types';

function PhotosListItem({ src, title}) {
    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={src} />
                    <span className="card-title">{title}</span>
                </div>
            </div>
        </div>
    )
}

PhotosListItem.propTypes = {
    photo: propTypes.photo
}

export default PhotosListItem
