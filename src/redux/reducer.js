let id = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD": {
      id++;
      return [
        ...state,
        {
          id,
          text: action.payload.text,
        },
      ];
    }

    case "DELETE": {
      const index = state.findIndex((n) => n.id === action.payload.id);

      state.splice(index, 1);

      return [...state];
    }

    case "CHANGE": {
      const item = state.find((n) => n.id === action.payload.id);

      item.done = !item.done;

      return [...state];
    }

    default:
      return state;
  }
};

export default reducer;
