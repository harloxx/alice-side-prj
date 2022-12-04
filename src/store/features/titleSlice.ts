import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const name = 'TitleSlice';

type titleState = {
  title: string;
};

const initialState: titleState = {
  title: '',
};

//추후 any type 수정 필요
export const titleSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
      console.log('state title 값', state.title);
    },
  },
});
export const { setTitle } = titleSlice.actions;
export default titleSlice.reducer;
