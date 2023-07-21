import React from 'react';
import style from './loading.module.scss';

const Loading = () => {
  return (
    <div className={style['loading']}>
      <div className={style['box']}>
        <img width={50} height={50} src={`${process.env.PUBLIC_URL}/assets/icons/doctor.svg`} alt="" />
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
