import { createSlice } from '@reduxjs/toolkit';
import { fetchWorry } from './worryApi';
import { RootState } from '@/app/store';

interface InitWorry {
  loaded: boolean;
  loading: boolean;
  worryList: any;
}
const initialState: InitWorry = {
  loaded: false,
  loading: false,
  worryList: [],
};

const worrySlice = createSlice({
  name: 'worry',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWorry.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchWorry.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.worryList = action.payload.data;
      })
      .addCase(fetchWorry.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default worrySlice;

export const worrySelector = (state: RootState) => state.worry.worryList;
export const loadedWorrySelector = (state: RootState) => state.worry.loaded;
export const loadingWorrySelector = (state: RootState) => state.worry.loading;
