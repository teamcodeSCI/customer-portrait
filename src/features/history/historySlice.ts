import { createSlice } from '@reduxjs/toolkit';
import { fetchHistory } from './historyApi';
import { RootState } from '@/app/store';

interface InitHistory {
  loaded: boolean;
  loading: boolean;
  historyList: HistoryList[];
}
interface HistoryList {
  id: string;
  service: string;
  status: string;
  advise: string;
  reExamination: string;
  adviseDoctor: string;
  performedDoctor: string;
}

const initialState: InitHistory = {
  loaded: false,
  loading: false,
  historyList: [],
};
const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHistory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.historyList = action.payload.data;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default historySlice;
export const historyListSelector = (state: RootState) => state.history.historyList;
export const loadedHistorySelector = (state: RootState) => state.history.loaded;
export const loadingHistorySelector = (state: RootState) => state.history.loading;
