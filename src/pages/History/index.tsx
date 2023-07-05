import React from 'react';
import style from './history.module.scss';

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
          ? { background: 'rgba(0,0,0,0.5)', bottom: 0 }
          : { background: 'none', bottom: 'calc(-100vh + 50px)' }
      }
    >
      <div className={style['controlBtn']} onClick={handleOpenHistory}>
        <span>Lịch sử</span>
        <img
          style={isOpenHistory ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }}
          width={30}
          height={30}
          src={`${process.env.PUBLIC_URL}/assets/icons/arrowUp.svg`}
          alt=""
        />
      </div>
      <div className={style['box']}></div>
    </div>
  );
};

export default History;
