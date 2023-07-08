import React from 'react';
import style from './hobby.module.scss';
import { useAppSelector } from '@/app/hook';
import { hobbySelector, loadedHobbySelector, loadingHobbySelector } from '@/features/hobby/hobbySlice';

const Hobby = () => {
  const hobbyData = useAppSelector(hobbySelector);
  const loadedHobby = useAppSelector(loadedHobbySelector);
  const loadingHobby = useAppSelector(loadingHobbySelector);
  return (
    <div className="container">
      <div className={style['box']}>
        {!loadingHobby
          ? loadedHobby &&
            hobbyData.map((item: any) => (
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
  );
};

export default Hobby;
