import { createSlice } from '@reduxjs/toolkit';
import { fetchHobby } from './hobbyApi';
import { RootState } from '@/app/store';

interface InitHobby {
  loaded: boolean;
  loading: boolean;
  hobbiesList: any;
}
const initialState: InitHobby = {
  loaded: false,
  loading: false,
  hobbiesList: [],
};

const hobbySlice = createSlice({
  name: 'hobby',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHobby.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHobby.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.hobbiesList = action.payload.data;
      })
      .addCase(fetchHobby.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default hobbySlice;

export const hobbySelector = (state: RootState) => state.hobby.hobbiesList;
export const loadedHobbySelector = (state: RootState) => state.hobby.loaded;
export const loadingHobbySelector = (state: RootState) => state.hobby.loading;
