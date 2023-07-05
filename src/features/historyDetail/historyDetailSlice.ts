import { createSlice } from '@reduxjs/toolkit';
import { fetchDetailHistory } from './historyDetailApi';
import { RootState } from '@/app/store';

interface InitHistory {
  loaded: boolean;
  loading: boolean;
  historyList: HistoryList[];
}
interface HistoryList {
  id: string;
  history_id: string;
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
const historyDetailSlice = createSlice({
  name: 'historyDetail',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailHistory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchDetailHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.historyList = action.payload.data;
      })
      .addCase(fetchDetailHistory.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default historyDetailSlice;
export const historyDetailListSelector = (state: RootState) => state.historyDetail.historyList;
export const loadedHistoryDetailSelector = (state: RootState) => state.historyDetail.loaded;
export const loadingHistoryDetailSelector = (state: RootState) => state.historyDetail.loading;
