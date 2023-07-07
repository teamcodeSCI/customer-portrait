import { createSlice } from '@reduxjs/toolkit';
import { fetchCustomer } from './customerApi';
import { RootState } from '@/app/store';
interface InitCustomer {
  loaded: boolean;
  loading: boolean;
  customer: any;
}
const initialState: InitCustomer = {
  loaded: false,
  loading: false,
  customer: null,
};
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCustomer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.customer = action.payload.data;
      })
      .addCase(fetchCustomer.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default customerSlice;

export const customerSelector = (state: RootState) => state.customer.customer;
export const loadedCustomerSelector = (state: RootState) => state.customer.loaded;
export const loadingCustomerSelector = (state: RootState) => state.customer.loading;
