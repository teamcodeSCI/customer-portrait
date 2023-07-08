import { createSlice } from '@reduxjs/toolkit';
import { fetchPersonality } from './personalityApi';
import { RootState } from '@/app/store';

interface InitPersonality {
  loaded: boolean;
  loading: boolean;
  personalityList: any;
}
const initialState: InitPersonality = {
  loaded: false,
  loading: false,
  personalityList: [],
};

const personalitySlice = createSlice({
  name: 'personality',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPersonality.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPersonality.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.personalityList = action.payload.data;
      })
      .addCase(fetchPersonality.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default personalitySlice;

export const personalitySelector = (state: RootState) => state.personality.personalityList;
export const loadedPersonalitySelector = (state: RootState) => state.personality.loaded;
export const loadingPersonalitySelector = (state: RootState) => state.personality.loading;
