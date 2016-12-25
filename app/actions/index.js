export const ADD_TODO='ADD_TODO'
export const DELETE_TODO='DELETE_TODO'
export const UPDATE_TODO='UPDATE_TODO'

export function addTodo(text) {
    return{
        type:ADD_TODO,
        text
    }
}

export function deleteTodo(text) {
    return{
        type:DELETE_TODO,
        text
    }
}

export function updateTodo(text) {
    return{
        type:UPDATE_TODO,
        text
    }
}
