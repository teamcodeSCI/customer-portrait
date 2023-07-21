import React, { useEffect } from 'react';
import style from './customerList.module.scss';
import CustomerItem from '@/components/CustomerItem';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import { fetchCustomerList } from '@/features/customerList/customerListApi';
import {
  customerListSelector,
  loadedCustomerListSelector,
  loadingCustomerListSelector,
} from '@/features/customerList/customerListSlice';
import Loading from '@/components/Loading';

const CustomerList = () => {
  const dispatch = useAppDispatch();
  const loaded = useAppSelector(loadedCustomerListSelector);
  const loading = useAppSelector(loadingCustomerListSelector);
  const customerList = useAppSelector(customerListSelector);
  useEffect(() => {
    dispatch(fetchCustomerList());
  }, [dispatch]);
  return (
    <div className={style['customerList']}>
      <div className="container" style={{ zIndex: 1 }}>
        <div className={style['header']}>Theo dõi và phân công thực hiện nhiệm vụ</div>
        <div className={style['table']}>
          {loading ? (
            <Loading />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Ngày</th>
                  <th>
                    Phòng/ Bộ <br /> phận
                  </th>
                  <th>
                    Thời gian <br /> thực hiện
                  </th>
                  <th>Tên khách hàng</th>
                  <th>Dịch vụ</th>
                  <th>Account</th>
                  <th>Trạng thái</th>
                  <th>Kíp mê</th>
                  <th>BSPT</th>
                  <th>Ekip mổ</th>
                </tr>
              </thead>
              <tbody>
                {loaded &&
                  customerList.map((item: any, idx: number) => <CustomerItem key={item.id} {...item} stt={idx + 1} />)}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
