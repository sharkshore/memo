import {ADD_TODO, UPDATE_TODO, DELETE_TODO} from '../actions'

const inittodos = [
    {
        text: '跑步',
        status: 0
    },
    {
        text: '写字',
        status: 1
    }
];

export default function todos(state = inittodos, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.text
            ]
        case DELETE_TODO:
            return state.map(todo =>
                todo.text == action.text.text ? {
                    text: todo.text,
                    status: 2
                } : todo
            );
        case UPDATE_TODO:
            return state.map(todo =>
                todo.text == action.text.text ? {
                    text: todo.text,
                    status: 1
                } : todo
            );
        default:
            return state;
    }
}
