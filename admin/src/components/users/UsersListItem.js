import React from 'react'
import Button from '@material-ui/core/Button';
import propTypes from './prop-types';



function UsersListItem({ user, onDelete, onClick }) {
    function onDeleteClick(e){
        e.stopPropagation();
        onDelete(user.id);
    }
    
    return (
        <tr onClick={onClick.bind(null, user.id)}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Button variant="contained" color="primary"  onClick={onDeleteClick}>Delete</Button>
            </td>
        </tr>
    )
}
UsersListItem.propTypes = {
    user: propTypes.user.isRequired,
    onDelete: propTypes.func.isRequired,
    onClick: propTypes.func.isRequired
}

export default UsersListItem
