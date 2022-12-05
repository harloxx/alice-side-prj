import { createSlice } from '@reduxjs/toolkit';

const name = 'SearchSlice';

type searchState = {
  search: string;
};

const initialState: searchState = {
  search: '',
};

export const searchSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
