import api from '../../api';

export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteTodo(id) {
    return function (dispatch) {
        api.delete(id).then(() =>
            dispatch({
                type: ACTION_DELETE,
                payload: id,
            })
        );
    };
}

export const ACTION_UPDATE_ITEM = 'ACTION_UPDATE_ITEM';
export function toggleTodo(id) {
    return function (dispatch, getState) {
        const todo = { ...getState().todos.find(item => item.id === id) }
        todo.isDone = !todo.isDone
        
        api.put(todo.id, todo).then((resp) =>
                dispatch({
                    type: ACTION_UPDATE_ITEM,
                    payload: resp.data,
                })
            );
            };
}

export const ACTION_CREATE_ITEM = 'ACTION_CREATE_ITEM';
export function createTodo(title) {
    return function (dispatch) {
        const todo = {
            title,
            isDone: false
        };
        
        api.post('', todo).then((resp) =>
            dispatch({
                type: ACTION_CREATE_ITEM,
                payload: resp.data,
            })
        );
    };
}

export const ACTION_SET_TODOS = 'ACTION_SET_TODOS';
export function setTodos(data) {
    return {
        type: ACTION_SET_TODOS,
        payload: data,
    };
}

export function fetchTodos() {
    return function (dispatch) {
        api.get().then((resp) => dispatch(setTodos(resp.data)));
    };
}
