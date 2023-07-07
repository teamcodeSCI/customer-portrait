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
      <div className={style['box']}>
        <div className={style['img']}>
          <img width={828} height={828} src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`} alt="" />
        </div>
        {!customerLoading
          ? customerLoaded && (
              <div className={style['customerInfo']}>
                <p>{customer.name}</p>
                <ul>
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
                    <span>{customer.job || '...'}</span>
                  </li>
                  <li>
                    <b>Trạng thái: </b>
                    <span>{customer.status}</span>
                  </li>
                </ul>
              </div>
            )
          : ''}
      </div>
    </div>
  );
};

export default CustomerInfo;
