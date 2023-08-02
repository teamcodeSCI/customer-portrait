import customerSlice from '@/features/customer/customerSlice';
import customerListSlice from '@/features/customerList/customerListSlice';
import historySlice from '@/features/history/historySlice';
import historyDetailSlice from '@/features/historyDetail/historyDetailSlice';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  customer: customerSlice.reducer,
  customerList: customerListSlice.reducer,
  history: historySlice.reducer,
  historyDetail: historyDetailSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
