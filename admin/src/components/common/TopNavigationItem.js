import React from 'react'
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom'

function TopNavigationItem({to, children}) {
    return (
        <Route path={to} children={(props) => (
            <li className={props.match ? 'active': '' }>
                <Link to={to}>{children}</Link>
            </li>
        )}></Route>
    )
}

TopNavigationItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default TopNavigationItem
