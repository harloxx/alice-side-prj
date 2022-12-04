import { createSlice } from '@reduxjs/toolkit';

const name = 'FilterSlice';

type filterState = {
  filter: Object;
};

const initialState: filterState = {
  filter: [],
};

export const filterSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
