import React from 'react';
import style from './family.module.scss';
import { useAppSelector } from '@/app/hook';
import { familySelector, loadedFamilySelector, loadingFamilySelector } from '@/features/family/familySlice';

const Family = () => {
  const familyData = useAppSelector(familySelector);
  const loadedFamily = useAppSelector(loadedFamilySelector);
  const loadingFamily = useAppSelector(loadingFamilySelector);
  return (
    <div className="container">
      <div className={style['wrapper']}>
        <div className={style['img']}>
          <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/users.svg`} alt="" />
        </div>
        <div className={style['box']}>
          {!loadingFamily
            ? loadedFamily &&
              familyData.map((item: any) => (
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

export default Family;
