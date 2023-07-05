import React from 'react';
import style from './historyListItem.module.scss';

interface HistoryListItemProps {
  stt: number;
  id: string;
  bookingCode: string;
  consultationDay: string;
  implementationDate: string;
  receptionist: string;
}
const HistoryListItem = ({
  stt,
  id,
  bookingCode,
  consultationDay,
  implementationDate,
  receptionist,
}: HistoryListItemProps) => {
  return (
    <div className={style['item']}>
      <span className={style['stt']}>{stt + 1}</span>
      <span className={style['bookingCode']}>{bookingCode}</span>
      <span className={style['consultationDay']}>{consultationDay}</span>
      <span className={style['implementationDate']}>{implementationDate}</span>
      <span className={style['receptionist']}>{receptionist}</span>
      <span className={style['action']}>Xem chi tiết</span>
    </div>
  );
};

export default HistoryListItem;
