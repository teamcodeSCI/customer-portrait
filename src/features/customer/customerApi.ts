import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCustomer = createAsyncThunk('customer/fetchCustomer', async () => {
  return {
    status: true,
    message: 'Success',
    data: {
      name: 'Đoàn Minh Đức',
      birth: '01/01/2000',
      address: 'Hoàn Kiếm, Hà Nội',
      phone: '0985147412',
      email: 'ducdm@scigroup.com.vn',
      job: '',
      status: 'Đang chờ',
    },
  };
});
