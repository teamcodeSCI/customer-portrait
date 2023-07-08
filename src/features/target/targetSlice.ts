import { createSlice } from '@reduxjs/toolkit';
import { fetchTarget } from './targetApi';
import { RootState } from '@/app/store';

interface InitTarget {
  loaded: boolean;
  loading: boolean;
  targetList: any;
}
const initialState: InitTarget = {
  loaded: false,
  loading: false,
  targetList: [],
};

const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTarget.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTarget.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.targetList = action.payload.data;
      })
      .addCase(fetchTarget.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default targetSlice;

export const targetSelector = (state: RootState) => state.target.targetList;
export const loadedTargetSelector = (state: RootState) => state.target.loaded;
export const loadingTargetSelector = (state: RootState) => state.target.loading;
