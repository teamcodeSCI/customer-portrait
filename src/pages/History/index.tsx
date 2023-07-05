import React, { useEffect, useState } from 'react';
import style from './history.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import { historyListSelector, loadedHistorySelector, loadingHistorySelector } from '@/features/history/historySlice';
import { fetchHistory } from '@/features/history/historyApi';
import Search from '@/components/Search';
import HistoryListItem from '@/components/HistoryListItem';

interface HistoryProps {
  isOpenHistory: boolean;
  handleOpenHistory: any;
}
const History = ({ isOpenHistory, handleOpenHistory }: HistoryProps) => {
  const dispatch = useAppDispatch();
  const loadedHistory = useAppSelector(loadedHistorySelector);
  const loadingHistory = useAppSelector(loadingHistorySelector);
  const historyList = useAppSelector(historyListSelector);

  const [search, setSearch] = useState<string>('');
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
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
          <div className={style['search']}>
            <Search onChange={handleSearch} value={search} />
          </div>
          <div className={style['table']}>
            <div className={style['main']}>
              <div className={style['header']}>
                <span className={style['stt']}>STT</span>
                <span className={style['bookingCode']}>Mã booking</span>
                <span className={style['consultationDay']}>Ngày tư vấn</span>
                <span className={style['implementationDate']}>Ngày thực hiện</span>
                <span className={style['receptionist']}>Lễ tân tư vấn</span>
                <span className={style['action']}>Hành động</span>
              </div>
              <div className={style['content']}>
                {!loadingHistory
                  ? loadedHistory &&
                    historyList.map((item, idx) => (
                      <HistoryListItem
                        key={item.id}
                        id={item.id}
                        stt={idx}
                        bookingCode={item.bookingCode}
                        consultationDay={item.consultationDay}
                        implementationDate={item.implementationDate}
                        receptionist={item.receptionist}
                      />
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
