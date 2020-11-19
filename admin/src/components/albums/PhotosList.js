import React from 'react'
import propTypes from './prop-types';
import PhotosListItem from './PhotosListItem'

function PhotosList({ photos }) {
    return (
        <div className="row">
            {photos.map(({id, title, thumbnailUrl}) => (
                <PhotosListItem
                    key={id}
                    src={thumbnailUrl}
                    title={title}
                />
            ))}
        </div>
    )
}

PhotosList.propTypes = {
    photos: propTypes.photos
}

export default PhotosList
