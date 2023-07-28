import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCustomer = createAsyncThunk('customer/fetchCustomer', async () => {
  const body = { company_id: 4, partner_id: 631953 };
  const response = await fetch('https://erp.scigroup.com.vn/api/connect-customer-persona/get-partner', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.

    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    mode: 'no-cors', // no-cors, *cors, same-origin
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  });
  console.log(response);
  return response.json(); // parses JSON response into native JavaScript objects
});
