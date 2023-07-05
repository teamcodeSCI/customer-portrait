import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
export const fetchHistory = createAsyncThunk('history/fetchHistory', async () => {
  return {
    status: true,
    message: 'Success',
    data: [
      {
        id: uuidv4(),
        service: 'Nâng mũi sụn sườn',
        status: 'Đã thực hiện',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
      {
        id: uuidv4(),
        service: 'Nâng mũi',
        status: 'Chưa thực hiện',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
      {
        id: uuidv4(),
        service: 'Cắt mí',
        status: 'Đã thực hiện',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
      {
        id: uuidv4(),
        service: 'Hút mỡ',
        status: 'Đang chờ',
        advise: '',
        reExamination: '',
        adviseDoctor: 'Nguyễn Hoàng Nam',
        performedDoctor: 'Nguyễn Hoàng Nam',
      },
      {
        id: uuidv4(),
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
