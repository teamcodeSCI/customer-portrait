import { createSlice } from '@reduxjs/toolkit';
import { fetchFamily } from './familyApi';
import { RootState } from '@/app/store';

interface InitFamily {
  loaded: boolean;
  loading: boolean;
  familyList: any;
}
const initialState: InitFamily = {
  loaded: false,
  loading: false,
  familyList: [],
};

const familySlice = createSlice({
  name: 'family',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFamily.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchFamily.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.familyList = action.payload.data;
      })
      .addCase(fetchFamily.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default familySlice;

export const familySelector = (state: RootState) => state.family.familyList;
export const loadedFamilySelector = (state: RootState) => state.family.loaded;
export const loadingFamilySelector = (state: RootState) => state.family.loading;
