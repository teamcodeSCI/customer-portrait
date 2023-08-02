import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchDetailHistory = createAsyncThunk('history/fetchDetailHistory', async () => {
  const response = await fetch(
    `https://erp.scigroup.com.vn/api/connect-customer-persona/history-medical-exam?type=walkin&erp_id=309984`,
  );
  return await response.json();
});
