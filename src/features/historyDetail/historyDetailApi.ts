import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchDetailHistory = createAsyncThunk('history/fetchDetailHistory', async () => {
  return {
    status: true,
    message: 'Success',
    data: [
      {
        id: '1',
        history_id: '1',
        service: 'Nâng mũi sụn sườn',
        status: 'Đã thực hiện',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
      {
        id: '2',
        history_id: '1',
        service: 'Nâng mũi',
        status: 'Chưa thực hiện',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
      {
        id: '3',
        history_id: '1',
        service: 'Cắt mí',
        status: 'Đã thực hiện',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
      {
        id: '4',
        history_id: '1',
        service: 'Hút mỡ',
        status: 'Đang chờ',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
      {
        id: '5',
        history_id: '1',
        service: 'Cấy mỡ',
        status: 'Đã thực hiện',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
    ],
  };
});
