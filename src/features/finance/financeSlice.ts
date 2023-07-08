import { createSlice } from '@reduxjs/toolkit';
import { fetchFinance } from './financeApi';
import { RootState } from '@/app/store';

interface InitFinance {
  loaded: boolean;
  loading: boolean;
  financeList: any;
}
const initialState: InitFinance = {
  loaded: false,
  loading: false,
  financeList: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFinance.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchFinance.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.financeList = action.payload.data;
      })
      .addCase(fetchFinance.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default financeSlice;

export const financeSelector = (state: RootState) => state.finance.financeList;
export const loadedFinanceSelector = (state: RootState) => state.finance.loaded;
export const loadingFinanceSelector = (state: RootState) => state.finance.loading;
