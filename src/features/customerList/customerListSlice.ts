import { createSlice } from '@reduxjs/toolkit';
import { fetchCustomerList } from './customerListApi';
import { RootState } from '@/app/store';

interface CustomerListInit {
  id: number;
  date: string;
  department: string;
  time: string;
  name: string;
  customerId: number;
  service: string;
  account: string;
  status: string;
  kip: string;
  bspt: string;
  ekip: string;
}
interface InitCustomerList {
  loaded: boolean;
  loading: boolean;
  customerList: CustomerListInit[];
}
const initialState: InitCustomerList = {
  loaded: false,
  loading: false,
  customerList: [],
};
const customerListSlice = createSlice({
  name: 'customerList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCustomerList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCustomerList.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.customerList = action.payload.data;
      })
      .addCase(fetchCustomerList.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default customerListSlice;

export const customerListSelector = (state: RootState) => state.customerList.customerList;
export const loadedCustomerListSelector = (state: RootState) => state.customerList.loaded;
export const loadingCustomerListSelector = (state: RootState) => state.customerList.loading;
