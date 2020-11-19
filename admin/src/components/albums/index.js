import React, { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom';
import config from './config';

import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

function Albums() {
    const match = useRouteMatch();
    const history = useHistory();
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(config.albumsUrl)
            .then( res => res.json() )
            .then(setData);
    }, [])
    
    useEffect(() => {
        if (match.params.id){
            fetch(`${config.photosUrl}?albumId=${match.params.id}`)
                .then( res => res.json())
                .then(setPhotos);
        }
    }, [match.params.id])

    function setData(albumsList){
        setAlbums(albumsList);

        if (!match.params.id && albumsList.length){
            history.push(`/albums/${albumsList[0].id}`)
        }
    }

    return (
        <div className="row">
            <div className="col s4">
                <AlbumsList 
                    albums={albums} 
                />
            </div>
            <div className="col s8">
                <PhotosList
                    photos={photos}
                />
            </div>
        </div>
    )
}

export default Albums
