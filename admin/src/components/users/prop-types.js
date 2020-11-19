import PropTypes from 'prop-types';

const user = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
})

export default {
    ...PropTypes,
    user
}