import React from 'react';
import style from './finance.module.scss';
import { useAppSelector } from '@/app/hook';
import { financeSelector, loadedFinanceSelector, loadingFinanceSelector } from '@/features/finance/financeSlice';

const Finance = () => {
  const financeData = useAppSelector(financeSelector);
  const loadedFinance = useAppSelector(loadedFinanceSelector);
  const loadingFinance = useAppSelector(loadingFinanceSelector);
  return (
    <div className="container">
      <div className={style['wrapper']}>
        <div className={style['img']}>
          <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`} alt="" />
        </div>
        <div className={style['box']}>
          {!loadingFinance
            ? loadedFinance &&
              financeData.map((item: any) => (
                <div key={item.date} className={style['item']}>
                  <p>{item.date}</p>
                  <ul>
                    {item.desire.map((item: any, idx: number) => (
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

export default Finance;
