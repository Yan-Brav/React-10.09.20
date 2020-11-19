import PropTypes from 'prop-types';

const album = PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
});

const photo = PropTypes.shape({
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
})

export default {
    ...PropTypes,
    album,
    albums: PropTypes.arrayOf(album),
    photo,
    photos: PropTypes.arrayOf(photo)
}