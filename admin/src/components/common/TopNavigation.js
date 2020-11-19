import React from 'react'
import TopNavigationItem from './TopNavigationItem';

function TopNavigation() {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <TopNavigationItem to="/users">Users</TopNavigationItem>
            <TopNavigationItem to="/albums">Albums</TopNavigationItem>
            <TopNavigationItem to="/about">About</TopNavigationItem>
        </ul>
    )
}

export default TopNavigation
