import React, { useEffect, useRef } from 'react';
import style from './historyDetail.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import {
  historyDetailListSelector,
  loadedHistoryDetailSelector,
  loadingHistoryDetailSelector,
} from '@/features/historyDetail/historyDetailSlice';
import { fetchDetailHistory } from '@/features/historyDetail/historyDetailApi';
import { useOutside } from '@/utils/help';
import { motion } from 'framer-motion';

interface HistoryDetailProps {
  handleOpenDetail: React.MouseEventHandler;
}
const HistoryDetail = ({ handleOpenDetail }: HistoryDetailProps) => {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const loadedHistoryDetail = useAppSelector(loadedHistoryDetailSelector);
  const loadingHistoryDetail = useAppSelector(loadingHistoryDetailSelector);
  const historyListDetail = useAppSelector(historyDetailListSelector);
  const modalVariants = {
    hidden: {
      y: '10%',
    },
    visible: {
      y: 10,
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
  useOutside(ref, handleOpenDetail);
  useEffect(() => {
    dispatch(fetchDetailHistory());
  }, [dispatch]);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={bgVariants}
      className={style['historyDetail']}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        className={style['box']}
        ref={ref}
      >
        <div className="container">
          <button className={style['close']} onClick={handleOpenDetail}>
            ✕
          </button>
          <div className={style['info']}>
            <span className={style['date']}>
              <b>Ngày tư vấn:</b> 30/06/2023
            </span>
            <span className={style['date']}>
              <b>Ngày thực hiện:</b> 30/06/2023
            </span>
            <span className={style['bookingCode']}>
              <b>Mã booking:</b> Booking-009
            </span>
            <span className={style['receptionist']}>
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
                {!loadingHistoryDetail
                  ? loadedHistoryDetail &&
                    historyListDetail.map((item, idx) => (
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
      </motion.div>
    </motion.div>
  );
};

export default HistoryDetail;
