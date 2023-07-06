import React, { useState } from 'react';
import style from './app.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import History from './pages/History';

function App() {
  const [isOpenHistory, setIsOpenHistory] = useState<boolean>(false);
  const handleOpenHistory = () => {
    setIsOpenHistory(!isOpenHistory);
  };
  return (
    <div className={style['app']}>
      <div className={style['box']}>
        <div className={style['profile']}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: 'linear' }}>
            <img width={828} height={828} src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`} alt="" />
          </motion.div>
        </div>
        <div className={style['row']}>
          <button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className={style['icon']}
            >
              <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/user.svg`} alt="" />
            </motion.div>
            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <span>Thông tin khách hàng</span>
            </motion.div>
          </button>
        </div>
        <div className={style['row']}>
          <button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6 }}
              className={style['icon']}
            >
              <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/sad.svg`} alt="" />
            </motion.div>
            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 3.2 }}
            >
              <span>Nỗi lo lắng</span>
            </motion.div>
          </button>
          <button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className={style['icon']}
            >
              <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/star.svg`} alt="" />
            </motion.div>
            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <span>Mong muốn</span>
            </motion.div>
          </button>
        </div>
        <div className={style['row']}>
          <button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 }}
              className={style['icon']}
            >
              <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/heart.svg`} alt="" />
            </motion.div>
            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 3 }}
            >
              <span>Tính cách</span>
            </motion.div>
          </button>
          <button></button>
          <button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className={style['icon']}
            >
              <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/like.svg`} alt="" />
            </motion.div>
            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <span>Sở thích</span>
            </motion.div>
          </button>
        </div>
        <div className={style['row']}>
          <button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 }}
              className={style['icon']}
            >
              <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/users.svg`} alt="" />
            </motion.div>

            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 2.8 }}
            >
              <span>Gia đình/ tình trạng hôn nhân</span>
            </motion.div>
          </button>
          <button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className={style['icon']}
            >
              <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`} alt="" />
            </motion.div>
            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              <span>Tài chính</span>
            </motion.div>
          </button>
        </div>
        <div className={style['row']}>
          <button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
              className={style['icon']}
            >
              <img width={40} height={40} src={`${process.env.PUBLIC_URL}/assets/icons/check.svg`} alt="" />
            </motion.div>
            <motion.div
              initial={{ translateY: -20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 2.6 }}
            >
              <span>Mục tiêu và nỗi lo cuộc sống</span>
            </motion.div>
          </button>
        </div>
      </div>
      <div className={style['controlBtn']} onClick={handleOpenHistory}>
        Lịch sử Thăm khám
        {!isOpenHistory && (
          <img width={30} height={30} src={`${process.env.PUBLIC_URL}/assets/icons/arrowUp.svg`} alt="" />
        )}
      </div>
      {isOpenHistory && (
        <AnimatePresence>
          <History handleOpenHistory={handleOpenHistory} isOpenHistory={isOpenHistory} />
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
