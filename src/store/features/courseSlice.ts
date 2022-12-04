import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calcArray from '../../utils/calcArray';
const name = 'CourseSlice';
type userState = {
  array: number[];
  arrayView: number[];
  start: number;
  end: number;
  current: number;
  count: number;
};

const initialState: userState = {
  array: [],
  arrayView: [],
  start: 1,
  end: -1,
  current: 0,
  count: 0,
};

//추후 any type 수정 필요
export const courseSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setInitialArray: (state, action) => {
      state.array = action.payload;
      console.log('state array 값', state.array);
      console.log('state count 값', state.count);
    },
    setArrayView: (state, action) => {
      state.arrayView = action.payload;
      console.log('state array view 값 : ', state.arrayView);
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setInit: (state, action) => {
      state.start = action.payload;
    },
    setEnd: (state, action) => {
      state.end = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});
export const {
  setInitialArray,
  setArrayView,
  setCurrent,
  setInit,
  setEnd,
  setCount,
} = courseSlice.actions;
export default courseSlice.reducer;
