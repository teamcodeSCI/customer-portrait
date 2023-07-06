import React, { useEffect, useState, useRef } from 'react';
import style from './history.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import { historyListSelector, loadedHistorySelector, loadingHistorySelector } from '@/features/history/historySlice';
import { fetchHistory } from '@/features/history/historyApi';
import Search from '@/components/Search';
import HistoryListItem from '@/components/HistoryListItem';
import { motion } from 'framer-motion';

interface HistoryProps {
  isOpenHistory: boolean;
  handleOpenHistory: any;
}
const History = ({ isOpenHistory, handleOpenHistory }: HistoryProps) => {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const loadedHistory = useAppSelector(loadedHistorySelector);
  const loadingHistory = useAppSelector(loadingHistorySelector);
  const historyList = useAppSelector(historyListSelector);

  const [search, setSearch] = useState<string>('');
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  const modalVariants = {
    hidden: {
      y: '10%',
    },
    visible: {
      y: 0,
    },
  };
  const bgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden" variants={bgVariants} className={style['history']}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        style={{ height: '100%', paddingTop: 10 }}
      >
        <div className={style['controlBtn']} onClick={handleOpenHistory}>
          Lịch sử Thăm khám
        </div>
        <div className={style['box']} ref={ref}>
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
      </motion.div>
    </motion.div>
  );
};

export default History;
