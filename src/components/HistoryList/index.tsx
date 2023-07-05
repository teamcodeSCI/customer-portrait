import React, { useState } from 'react';
import style from './historyList.module.scss';
import HistoryListItem from '../HistoryListItem';
import Search from '../Search';

const HistoryList = () => {
  const [search, setSearch] = useState<string>('');
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  return (
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
            <HistoryListItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
