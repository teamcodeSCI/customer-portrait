import React from 'react';
import style from './desire.module.scss';
import { useAppSelector } from '@/app/hook';
import { desireSelector, loadedDesireSelector, loadingDesireSelector } from '@/features/desire/desireSlice';

const Desire = () => {
  const desireData = useAppSelector(desireSelector);
  const loadedDesire = useAppSelector(loadedDesireSelector);
  const loadingDesire = useAppSelector(loadingDesireSelector);
  return (
    <div className="container">
      <div className={style['wrapper']}>
        <div className={style['img']}>
          <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/star.svg`} alt="" />
        </div>
        <div className={style['box']}>
          {!loadingDesire
            ? loadedDesire &&
              desireData.map((item: any) => (
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

export default Desire;
