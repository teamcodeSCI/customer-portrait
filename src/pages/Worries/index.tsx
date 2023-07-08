import React from 'react';
import style from './worries.module.scss';
import { useAppSelector } from '@/app/hook';
import { loadedWorrySelector, loadingWorrySelector, worrySelector } from '@/features/worry/worrySlice';

const Worry = () => {
  const worryData = useAppSelector(worrySelector);
  const loadedWorry = useAppSelector(loadedWorrySelector);
  const loadingWorry = useAppSelector(loadingWorrySelector);
  return (
    <div className="container">
      <div className={style['wrapper']}>
        <div className={style['img']}>
          <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/sad.svg`} alt="" />
        </div>
        <div className={style['box']}>
          {!loadingWorry
            ? loadedWorry &&
              worryData.map((item: any) => (
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

export default Worry;
