import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const name = 'CourseSlice';
type userState = {
  start: number;
  end: number;
  current: number;
};

const initialState: userState = {
  start: 0,
  end: 1,
  current: 1,
};
export const courseSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    // setIndex: (state, action: any) => {
    //   state.start = action.paylod;
    // },
  },
});
export default courseSlice.reducer;
