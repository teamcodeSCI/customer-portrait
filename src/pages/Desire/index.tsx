import React from 'react';
import style from './desire.module.scss';
import { useAppSelector } from '@/app/hook';
import { customerSelector, loadedCustomerSelector, loadingCustomerSelector } from '@/features/customer/customerSlice';


const Desire = () => {
  const data = useAppSelector(customerSelector);
  const loaded = useAppSelector(loadedCustomerSelector);
  const loading = useAppSelector(loadingCustomerSelector);
  return (
    <div className="container">
      <div className={style['wrapper']}>
        <div className={style['img']}>
          <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/star.svg`} alt="" />
        </div>
        <div className={style['box']}>
          {!loading
            ? loaded && data.data.mong_muon.map((item: any) => (
              <div key={item.date} className={style['item']}>
                <p>{item.date}</p>
                <ul>
                  {item.data.map((item: any, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))
            : ''}
        </div>
      </div>
    </div>
  );
};

export default Desire;
