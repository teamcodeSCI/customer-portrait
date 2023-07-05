import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHistory = createAsyncThunk('history/fetchHistory', async () => {
  return {
    status: true,
    message: 'Success',
    data: [
      {
        id: '1',
        bookingCode: 'Booking-001',
        consultationDay: 'Đã thực hiện',
        implementationDate: '',
        receptionist: '',
      },
      {
        id: '2',
        bookingCode: 'Booking-002',
        consultationDay: 'Đã thực hiện',
        implementationDate: '',
        receptionist: '',
      },
      {
        id: '3',
        bookingCode: 'Booking-003',
        consultationDay: 'Đã thực hiện',
        implementationDate: '',
        receptionist: '',
      },
      {
        id: '4',
        bookingCode: 'Booking-004',
        consultationDay: 'Đã thực hiện',
        implementationDate: '',
        receptionist: '',
      },
      {
        id: '5',
        bookingCode: 'Booking-005',
        consultationDay: 'Đã thực hiện',
        implementationDate: '',
        receptionist: '',
      },
    ],
  };
});
