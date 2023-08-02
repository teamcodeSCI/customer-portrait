import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCustomer = createAsyncThunk(
  'customer/fetchCustomer',
  async ({ companyId, partnerId }: { companyId: number; partnerId: number }) => {
    const response = await fetch(
      `https://erp.scigroup.com.vn/api/connect-customer-persona/get-partner?company_id=${companyId}&partner_id=${partnerId}`,
    );
    return await response.json(); // parses JSON response into native JavaScript objects
  },
);
