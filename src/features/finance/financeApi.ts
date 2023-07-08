import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFinance = createAsyncThunk('finance/fetchFinance', async () => {
  return {
    status: true,
    message: 'Success',
    data: [
      {
        date: '07/07/2023',
        desire: [
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Thích được khuyến mãi, mong muốn được giảm thêm 10%',
        ],
      },
      {
        date: '06/07/2023',
        desire: [
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Thích được khuyến mãi, mong muốn được giảm thêm 10%',
        ],
      },
      {
        date: '05/07/2023',
        desire: [
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Khách hàng mong muốn được làm dịch vụ BS. Rechard Huy',
          'Thích được khuyến mãi, mong muốn được giảm thêm 10%',
        ],
      },
    ],
  };
});
