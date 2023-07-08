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
      <div className={style['wrapper']}>
        <div className={style['img']}>
          <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/like.svg`} alt="" />
        </div>
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
    </div>
  );
};

export default Hobby;
