import React from 'react';

function ListItem({ item, onItemToggle, onItemDelete }) {
    return (
        <div 
            className={"task-item u-full-width " + (item.isDone ? 'done' : '')}
            onClick={() => onItemToggle(item.id)}>
                    {item.title}
                    <span 
                        className="delete-btn"
                        onClick={(e) => {e.stopPropagation(); onItemDelete(item.id)}}
                        >✘</span>
                </div>
    );
}

export default ListItem;
