import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch, useHistory} from 'react-router-dom';
import config from './config';
import UsersListItem from './UsersListItem'

function UsersList() {
    const {url} = useRouteMatch();
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(config.usersUrl)
            .then(res => res.json())
            .then(setUsers)
    }, [])

    function onDelete(id){
       fetch(`${config.usersUrl}/${id}`, {
           method: 'DELETE'
       })

       setUsers(users.filter(user => user.id !== id));
    }
    function onClick(id){
        history.push(`${url}/${id}`)
    }

    return (
        <>
            <div className="fixed-action-btn">
                <Link to={`${url}/new`} className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>

            <table className="highlight">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UsersListItem key={user.id} user={user} onDelete={onDelete} onClick={onClick}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UsersList
