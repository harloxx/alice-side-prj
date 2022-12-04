import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const name = 'PageSlice';

type pageState = {
  offset: number;
  current: number;
  count: number;
};

const initialState: pageState = {
  offset: 0,
  current: 0,
  count: 20,
};

//추후 any type 수정 필요
export const pageSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload;
      console.log('state title 값', state.offset);
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
      console.log('state title 값', state.current);
    },
  },
});
export const { setOffset } = pageSlice.actions;
export default pageSlice.reducer;
