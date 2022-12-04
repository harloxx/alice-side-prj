import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const name = 'FilterSlice';

type filterState = {
  filter: Object;
};

const initialState: filterState = {
  filter: [],
};

//추후 any type 수정 필요
export const filterSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      console.log('state filter 값', state.filter);
    },
  },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
