import { createSlice } from '@reduxjs/toolkit';
import { fetchDesire } from './desireApi';
import { RootState } from '@/app/store';
interface InitDesire {
  loaded: boolean;
  loading: boolean;
  desireList: any;
}
const initialState: InitDesire = {
  loaded: false,
  loading: false,
  desireList: [],
};
const desireSlice = createSlice({
  name: 'desire',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDesire.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchDesire.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.desireList = action.payload.data;
      })
      .addCase(fetchDesire.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default desireSlice;

export const desireSelector = (state: RootState) => state.desire.desireList;
export const loadedDesireSelector = (state: RootState) => state.desire.loaded;
export const loadingDesireSelector = (state: RootState) => state.desire.loading;
