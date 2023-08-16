import React from 'react';
import style from './customerInfo.module.scss';
import { useAppSelector } from '@/app/hook';
import { customerSelector } from '@/features/customer/customerSlice';
import { setAddress } from '@/utils/help';

const CustomerInfo = () => {
  const customer = useAppSelector(customerSelector);
  const data = customer.data.thong_tin_chung[0]
  let gender: string = ''
  if (data.gender === 'female') {
    gender = 'Nữ'
  } else if (data.gender === 'male') {
    gender = 'Nam'
  } else {
    gender = ''
  }

  return (
    <div className="container">
      <div className={style['box']}>
        <div className={style['img']}>
          <img width={828} height={828} src={data.images || `${process.env.PUBLIC_URL}/assets/images/no-image.jpg`} alt="" />
        </div>

        <div className={style['customerInfo']}>
          <p>{data.name}</p>
          <ul>
            <li>
              <b>Giới tính: </b>
              <span>{gender}</span>
            </li>
            <li>
              <b>Hộ chiếu: </b>
              <span>{data.pass_port}</span>
            </li>
            <li>
              <b>Ngày sinh: </b>
              <span>{data.birth_date}</span>
            </li>
            <li>
              <b>Số điện thoại 1: </b>
              <span>{data.phone}</span>
            </li>
            <li>
              <b>Số điện thoại 2: </b>
              <span>{data.mobile}</span>
            </li>
            <li>
              <b>Địa chỉ: </b>
              <span>{setAddress({
                street: data.street, district_name: data.district_name, state_name: data.state_name, country_name: data.country_name
              })}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CustomerInfo;
