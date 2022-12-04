import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//import storage from 'redux-persist/lib/storage';
//import { combineReducers } from 'redux';
//import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import courseReducer from './features/courseSlice';
import titleReducer from './features/titleSlice';
import pageReducer from './features/pageSlice';
import filterReducer from './features/filterSlice';

// const reducers = combineReducers({
//   course: courseReducer,
//   title: titleReducer,
//   page: pageReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

//const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });

export const store = configureStore({
  reducer: {
    course: courseReducer,
    title: titleReducer,
    page: pageReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
