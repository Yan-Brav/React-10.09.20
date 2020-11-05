import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import {
    createTodo,
} from '../store/actions/todos';

function Form({ createTodo }) {
    const [title, setTitle] = useState('');
    function onValueChange(e) {
        setTitle(e.target.value)
    }

    function onFormSubmit(e){
        e.preventDefault();

        createTodo(title);
        setTitle('')
    }

    return (
        <form id="addTaskForm" onSubmit={onFormSubmit}>
            <div className="row">
                <div className="ten columns">
                    <input
                        type="text"
                        id="taskNameInput"
                        className="u-full-width"
                        value={title}
                        onChange={onValueChange}
                    />
                </div>
                <div className="two columns">
                    <input type="submit" className="u-full-width" value="Add" />
                </div>
            </div>
        </form>
    );
}


const mapDispatchToProps = {
    createTodo
};

export default connect(null, mapDispatchToProps)(Form);
