import React from 'react';
import style from './customerInfo.module.scss';
import { useAppSelector } from '@/app/hook';
import { customerSelector, loadedCustomerSelector, loadingCustomerSelector } from '@/features/customer/customerSlice';

const CustomerInfo = () => {
  const customer = useAppSelector(customerSelector);
  const customerLoaded = useAppSelector(loadedCustomerSelector);
  const customerLoading = useAppSelector(loadingCustomerSelector);
  return (
    <div className="container">
      {!customerLoading
        ? customerLoaded && (
            <ul className={style['customerInfo']}>
              <li>
                <b>Họ và tên: </b>
                <span>{customer.name}</span>
              </li>
              <li>
                <b>Ngày sinh: </b>
                <span>{customer.birth}</span>
              </li>
              <li>
                <b>Số điện thoại: </b>
                <span>{customer.phone}</span>
              </li>
              <li>
                <b>Email: </b>
                <span>{customer.email}</span>
              </li>
              <li>
                <b>Địa chỉ: </b>
                <span>{customer.address}</span>
              </li>
              <li>
                <b>Nghề nghiệp: </b>
                <span>{customer.job}</span>
              </li>
              <li>
                <b>Trạng thái: </b>
                <span>{customer.status}</span>
              </li>
            </ul>
          )
        : ''}
    </div>
  );
};

export default CustomerInfo;
