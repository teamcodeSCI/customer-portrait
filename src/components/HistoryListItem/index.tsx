import React from 'react';
import style from './historyListItem.module.scss';

const HistoryListItem = () => {
  return (
    <div className={style['item']}>
      <span className={style['stt']}>STT</span>
      <span className={style['bookingCode']}>Mã booking</span>
      <span className={style['consultationDay']}>Ngày tư vấn</span>
      <span className={style['implementationDate']}>Ngày thực hiện</span>
      <span className={style['receptionist']}>Lễ tân tư vấn</span>
      <span className={style['action']}>Xem chi tiết</span>
    </div>
  );
};

export default HistoryListItem;
