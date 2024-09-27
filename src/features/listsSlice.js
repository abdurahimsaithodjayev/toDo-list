import { createSlice } from '@reduxjs/toolkit';

const listsSlice = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    addList: (state, action) => {
      state.push({ id: Date.now(), title: action.payload, items: [] });
    },
    addItem: (state, action) => {
      const { listId, item } = action.payload;
      const list = state.find((list) => list.id === listId);
      if (list) {
        list.items.push({ id: Date.now(), text: item });
      }
    },
    deleteList: (state, action) => {
      return state.filter((list) => list.id !== action.payload);
    },
    saveItem: (state, action) => {
      const { listId, itemId, newText } = action.payload;
      const list = state.find((list) => list.id === listId);
      const item = list.items.find((item) => item.id === itemId);
      if (item) {
        item.text = newText;
      }
    }
  },
});

export const { addList, addItem, deleteList, saveItem } = listsSlice.actions;
export default listsSlice.reducer;