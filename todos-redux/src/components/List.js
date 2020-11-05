import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/actions/todos';

function List({ todos, onItemToggle, onItemDelete, onItemEdit }) {
    return (
        <div className="task-list u-full-width">
            {todos.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    onItemToggle={onItemToggle}
                    onItemDelete={onItemDelete}
                />
            ))}
        </div>
    );
}



function mapStateToProps({todos}) {
    return {
        todos
    };
}

const mapDispatchToProps = {
    onItemDelete: deleteTodo,
    onItemToggle: toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
