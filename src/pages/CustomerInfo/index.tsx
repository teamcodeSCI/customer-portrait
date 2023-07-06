import React, { useRef } from 'react';
import style from './customerInfo.module.scss';
import { useAppDispatch } from '@/app/hook';
import { motion } from 'framer-motion';

interface CustomerInfoProps {
  handleOpenProfile: React.MouseEventHandler;
}
const CustomerInfo = ({ handleOpenProfile }: CustomerInfoProps) => {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
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
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={bgVariants}
      className={style['customerInfo']}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        style={{ height: '100%', paddingTop: 10 }}
      >
        <div className={style['controlBtn']} onClick={handleOpenProfile}>
          Thông tin khách hàng
        </div>
        <div className={style['box']} ref={ref}>
          <div className="container"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomerInfo;
