
function addTodo(todo) {
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime().toString(),
        data: todo
      }
    }
}

function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      id: id
    }
  }
}

function updateTodo(id, newTodo) {
  return {
    type: 'UPDATE_TODO',
    payload: {
      id: id,
      newTodo: newTodo,
    }
  }
}

export {addTodo, deleteTodo, updateTodo};