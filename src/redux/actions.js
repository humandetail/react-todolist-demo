export const addItem = (item) => {
  return {
    type: 'ADD',
    data: item
  }
}

export const deleteItem = (id) => {
  return {
    type: 'DELETE',
    id
  }
}

export const updateItem = (item) => {
  return {
    type: 'UPDATE',
    data: item
  }
}