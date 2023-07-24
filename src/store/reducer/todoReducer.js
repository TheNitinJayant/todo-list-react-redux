import InitialState from "../InitialState";

const todoReducer = (state = InitialState, action) => {

    switch(action.type){
        case "ADD_TODO" : {
            let todo = action.payload;

            let newState = {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: todo.id,
                        todo: todo.data
                    }
                ]
            }

            return newState;
        }
        case "UPDATE_TODO" : {
            let todoId = action.payload.id;
            let newTodo = action.payload.newTodo;

            let newState = {
                ...state,
                todos: state.todos.map((todo)=>{
                    if(todo.id===todoId){
                        console.log("Found updating")
                        return {
                            id: todoId,
                            todo: newTodo,
                        }
                    }
                    return todo;
                })
            }

            return newState;
        }
        case "DELETE_TODO" : {
            let todoId = action.payload.id;
            let newState = {
                ...state,
                todos: state.todos.filter((todo)=>todo.id!=todoId)
            }
            return newState;
        }
        default : return state;
    }
}

export default todoReducer;