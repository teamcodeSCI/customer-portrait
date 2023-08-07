import React, { useState } from 'react';
import style from './historyListItem.module.scss';
import HistoryDetail from '@/pages/HistoryDetail';
import { AnimatePresence } from 'framer-motion';

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
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const handleOpenDetail: React.MouseEventHandler = () => {
    setIsOpenDetail(!isOpenDetail);
  };

  return (
    <div className={style['item']}>
      <span className={style['stt']}>{stt + 1}</span>
      <span className={style['bookingCode']}>{bookingCode}</span>
      <span className={style['consultationDay']}>{consultationDay}</span>
      <span className={style['implementationDate']}>{implementationDate}</span>
      <span className={style['receptionist']}>{receptionist}</span>
      <span className={style['action']} >
        Xem chi tiết
      </span>
      <AnimatePresence>{isOpenDetail && <HistoryDetail handleOpenDetail={handleOpenDetail} />}</AnimatePresence>
    </div>
  );
};

export default HistoryListItem;
