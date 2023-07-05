import React, { useEffect } from 'react';
import style from './historyDetail.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import { historyListSelector, loadedHistorySelector, loadingHistorySelector } from '@/features/history/historySlice';
import { fetchHistory } from '@/features/history/historyApi';

const HistoryDetail = () => {
  const dispatch = useAppDispatch();
  const loadedHistory = useAppSelector(loadedHistorySelector);
  const loadingHistory = useAppSelector(loadingHistorySelector);
  const historyList = useAppSelector(historyListSelector);
  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);
  return (
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
  );
};

export default HistoryDetail;
