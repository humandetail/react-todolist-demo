
const defaultList = [];

export const handleList = (state = defaultList, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.data, ...state];
    case 'DELETE':
      return [...state.filter((item) => item.id !== action.id)];
    case 'UPDATE':
      return state.map((item) => {
        return item.id === action.data.id ? action.data : item;
      });
    default:
      return state;
  }
}