import React, { useEffect } from 'react';
import style from './history.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import { fetchHistory } from '@/features/history/historyApi';
import { historyListSelector, loadedHistorySelector, loadingHistorySelector } from '@/features/history/historySlice';

interface HistoryProps {
  isOpenHistory: boolean;
  handleOpenHistory: any;
}
const History = ({ isOpenHistory, handleOpenHistory }: HistoryProps) => {
  const dispatch = useAppDispatch();
  const loadedHistory = useAppSelector(loadedHistorySelector);
  const loadingHistory = useAppSelector(loadingHistorySelector);
  const historyList = useAppSelector(historyListSelector);
  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);
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
        <div className="container">
          <div className={style['info']}>
            <span>
              <b>Ngày tư vấn:</b> 30/06/2023
            </span>
            <span>
              <b>Ngày thực hiện:</b> 30/06/2023
            </span>
            <span>
              <b>Mã booking:</b> Booking-009
            </span>
            <span>
              <b>Lễ tân tư vấn:</b> Thu Trang
            </span>
          </div>
          <div className={style['table']}>
            <div className={style['main']}>
              <div className={style['header']}>
                <span className={style['stt']}>STT</span>
                <span className={style['service']}>Dịch vụ</span>
                <span className={style['status']}>Tình trạng hiện tại</span>
                <span className={style['advise']}>Nội dung tư vấn</span>
                <span className={style['reExamination']}>Nội dung tái khám</span>
                <span className={style['adviseDoctor']}>Bác sĩ tư vấn</span>
                <span className={style['performedDoctor']}>Bác sĩ thực hiện</span>
              </div>
              <div className={style['content']}>
                {!loadingHistory
                  ? loadedHistory &&
                    historyList.map((item, idx) => (
                      <div key={item.id} className={style['item']}>
                        <span className={style['stt']}>{idx + 1}</span>
                        <span className={style['service']}>{item.service}</span>
                        <span className={style['status']}>{item.status}</span>
                        <span className={style['advise']}>{item.advise}</span>
                        <span className={style['reExamination']}>{item.reExamination}</span>
                        <span className={style['adviseDoctor']}>{item.adviseDoctor}</span>
                        <span className={style['performedDoctor']}>{item.performedDoctor}</span>
                      </div>
                    ))
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
