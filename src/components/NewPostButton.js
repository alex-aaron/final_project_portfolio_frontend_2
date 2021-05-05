import React from 'react';
import { NavLink } from 'react-router-dom';

const NewPostButton = () => {
    return (
        <div className="new-post-button-container">
            <NavLink to="/new" exact>Create New Post</NavLink>
        </div>
    )
}

export default NewPostButton;