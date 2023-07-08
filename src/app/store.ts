import customerSlice from '@/features/customer/customerSlice';
import desireSlice from '@/features/desire/desireSlice';
import familySlice from '@/features/family/familySlice';
import financeSlice from '@/features/finance/financeSlice';
import historySlice from '@/features/history/historySlice';
import historyDetailSlice from '@/features/historyDetail/historyDetailSlice';
import hobbySlice from '@/features/hobby/hobbySlice';
import personalitySlice from '@/features/personality/personalitySlice';
import targetSlice from '@/features/target/targetSlice';
import worrySlice from '@/features/worry/worrySlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  historyDetail: historyDetailSlice.reducer,
  history: historySlice.reducer,
  customer: customerSlice.reducer,
  desire: desireSlice.reducer,
  hobby: hobbySlice.reducer,
  finance: financeSlice.reducer,
  target: targetSlice.reducer,
  family: familySlice.reducer,
  personality: personalitySlice.reducer,
  worry: worrySlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
