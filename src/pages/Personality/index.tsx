import React from 'react';
import style from './personality.module.scss';
import { useAppSelector } from '@/app/hook';
import {
  loadedPersonalitySelector,
  loadingPersonalitySelector,
  personalitySelector,
} from '@/features/personality/personalitySlice';

const Personality = () => {
  const personalityData = useAppSelector(personalitySelector);
  const loadedPersonality = useAppSelector(loadedPersonalitySelector);
  const loadingPersonality = useAppSelector(loadingPersonalitySelector);
  return (
    <div className="container">
      <div className={style['wrapper']}>
        <div className={style['img']}>
          <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/sad.svg`} alt="" />
        </div>
        <div className={style['box']}>
          {!loadingPersonality
            ? loadedPersonality &&
              personalityData.map((item: any) => (
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

export default Personality;
