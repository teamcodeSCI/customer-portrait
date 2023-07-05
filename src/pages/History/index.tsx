import React from 'react';
import style from './history.module.scss';
// import HistoryDetail from '@/components/HistoryDetail';
import HistoryList from '@/components/HistoryList';

interface HistoryProps {
  isOpenHistory: boolean;
  handleOpenHistory: any;
}
const History = ({ isOpenHistory, handleOpenHistory }: HistoryProps) => {
  return (
    <div
      className={style['history']}
      style={
        isOpenHistory
          ? { background: 'rgba(0,0,0,0.5)', bottom: 0, top: 0 }
          : { background: 'none', bottom: 'calc(-100vh + 50px)' }
      }
    >
      <div className={style['controlBtn']} onClick={handleOpenHistory}>
        Lịch sử Thăm khám
        {!isOpenHistory && (
          <img width={30} height={30} src={`${process.env.PUBLIC_URL}/assets/icons/arrowUp.svg`} alt="" />
        )}
      </div>
      <div className={style['box']}>
        <HistoryList />
      </div>
    </div>
  );
};

export default History;
