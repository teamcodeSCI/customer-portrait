import React, { useState } from 'react';
import style from './card.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from '@/layouts/Modal';
interface CardProps {
  title: string;
  page: JSX.Element;
  expandData: any;
  img: string;
}
const Card = ({ title, page, expandData, img }: CardProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleOpenModal: React.MouseEventHandler = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <div className={style['card']}>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={handleOpenModal}
      >
        <img width={40} height={40} src={img} alt="" />

        <div className={style['content']}>
          <span>{title}</span>
          {typeof expandData === 'object' ? (
            <ul>
              {expandData.map((item: any, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{expandData}</p>
          )}
        </div>
      </motion.button>
      {isOpenModal && (
        <AnimatePresence>
          <Modal page={page} title={title} closeModal={handleOpenModal} />
        </AnimatePresence>
      )}
    </div>
  );
};

export default Card;
