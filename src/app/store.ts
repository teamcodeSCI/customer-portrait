import historySlice from '@/features/history/historyDetailSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: historySlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
