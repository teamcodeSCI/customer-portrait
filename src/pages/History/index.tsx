import React, { useEffect, useState } from 'react';
import style from './history.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import { historyListSelector, loadedHistorySelector, loadingHistorySelector } from '@/features/history/historySlice';
import { fetchHistory } from '@/features/history/historyApi';
import Search from '@/components/Search';
import HistoryListItem from '@/components/HistoryListItem';

interface SearchState {
  booking: string;
  date: string;
}
const History = () => {
  const dispatch = useAppDispatch();
  const loadedHistory = useAppSelector(loadedHistorySelector);
  const loadingHistory = useAppSelector(loadingHistorySelector);
  const historyList = useAppSelector(historyListSelector);

  const [search, setSearch] = useState<SearchState>({ booking: '', date: '' });
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);
  return (
    <div className="container">
      <div className={style['control']}>
        <div className={style['search']}>
          <Search type="text" onChange={handleSearch} name="booking" value={search.booking} />
        </div>
        <div className={style['search']}>
          <Search type="date" onChange={handleSearch} name="date" value={search.date} />
        </div>
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
  );
};

export default History;
