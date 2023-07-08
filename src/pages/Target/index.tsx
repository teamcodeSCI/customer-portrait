import React from 'react';
import style from './target.module.scss';
import { useAppSelector } from '@/app/hook';
import { loadedTargetSelector, loadingTargetSelector, targetSelector } from '@/features/target/targetSlice';

const Target = () => {
  const targetData = useAppSelector(targetSelector);
  const loadedTarget = useAppSelector(loadedTargetSelector);
  const loadingTarget = useAppSelector(loadingTargetSelector);
  return (
    <div className="container">
      <div className={style['box']}>
        {!loadingTarget
          ? loadedTarget &&
            targetData.map((item: any) => (
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

export default Target;
