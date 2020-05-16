let id = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO": {
        id++;
        return [
            ...state,
            {
                id,
                text = action.payload.text,  
            },
        ]
    }

    case "DELETE_TODO": {
        const index = state.findIndex(n => n.id === action.payload.id);
        
        state.splice(index, 1);

        return [
            ...state,
        ]
    }

    case "CHANGE_TODO_STATE": {
        const item = state.find(n => n.id === action.payload.id);

        item.done = !item.done;

        return [
            ...state,
        ]
    }

    default:
      return state;
  }
}

export default reducer;
