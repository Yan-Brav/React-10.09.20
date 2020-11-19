import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UsersList from './UsersList';
import UserDetails from './UserDetails';

function Users() {
    const { url } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${url}/:id`} render={({match}) => {
                    return <UserDetails id={match.params.id} />
                }} />
                <Route path={`${url}`} render={() => {
                    return <UsersList />
                }} />
                
            </Switch>
        </div>
    )
}

export default Users
