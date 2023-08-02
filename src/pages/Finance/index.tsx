import React from 'react';
import style from './finance.module.scss';

const Finance = () => {

  return (
    <div className="container">
      <div className={style['wrapper']}>
        <div className={style['img']}>
          <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`} alt="" />
        </div>
        <div className={style['box']}>
          {!false
            ? true &&
            [].map((item: any) => (
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
