import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import style from './modal.module.scss';
const Modal = ({ page, title, closeModal }: any) => {
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
    <motion.div initial="hidden" animate="visible" exit="hidden" variants={bgVariants} className={style['modal']}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        style={{ height: '100%', paddingTop: 10 }}
      >
        <div className={style['controlBtn']} onClick={closeModal}>
          {title}
        </div>
        <div className={style['box']} ref={ref}>
          {page}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
