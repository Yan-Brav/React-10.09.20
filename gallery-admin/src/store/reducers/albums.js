// import {
//     ACTION_SET_TODOS,
//     ACTION_DELETE,
//     ACTION_CREATE_ITEM,
//     ACTION_UPDATE_ITEM,
// } from '../actions/todos';

// const initialState = {
//     todos: [],
// };


// function updateTodo(todos, todo) {
//     return todos.map((item) => (item.id === todo.id ? todo : item));
// }

// function createTodo(todos, todo) {
//     return [...todos, todo];
// }

// export default function (state = initialState, { type, payload }) {
//     switch (type) {
//         case ACTION_SET_TODOS:
//             return { ...state, todos: payload };
//         case ACTION_DELETE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((item) => item.id !== payload),
//             };
        
//         case ACTION_UPDATE_ITEM:
//             return {
//                 ...state,
//                 todos: updateTodo(state.todos, payload),
//             };
//         case ACTION_CREATE_ITEM:
//             return {
//                 ...state,
//                 todos: createTodo(state.todos, payload),
//             };
//         default:
//             return state;
//     }
// }
