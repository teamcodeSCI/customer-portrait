import React, { useState } from 'react';
import style from './app.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import History from './pages/History';
import CustomerInfo from './pages/CustomerInfo';
import Modal from './layouts/Modal';
import Desire from './pages/Desire';
import Hobby from './pages/Hobby';
import Finance from './pages/Finance';
import Family from './pages/Family';
import Target from './pages/Target';
import Personality from './pages/Personality';
import Worries from './pages/Worries';
import { Tooltip } from 'react-tooltip';

const profileData = {
  name: 'Đoàn Minh Đức',
  birth: '01/01/2000',
  address: 'Hoàn Kiếm, Hà Nội',
  phone: '0985147412',
  email: 'ducdm@scigroup.com.vn',
  job: '',
  status: 'Đang chờ',
};
const tooltipStyle = `list-style:none;padding:0;display:flex;flex-direction:column;gap:5px`;
function App() {
  const [isOpenHistory, setIsOpenHistory] = useState<boolean>(false);
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const [isOpenDesire, setIsOpenDesire] = useState<boolean>(false);
  const [isOpenHobby, setIsOpenHobby] = useState<boolean>(false);
  const [isOpenFinance, setIsOpenFinance] = useState<boolean>(false);
  const [isOpenWorries, setIsOpenWorries] = useState<boolean>(false);
  const [isOpenFamily, setIsOpenFamily] = useState<boolean>(false);
  const [isOpenTarget, setIsOpenTarget] = useState<boolean>(false);
  const [isOpenPersonality, setIsOpenPersonality] = useState<boolean>(false);

  const handleOpenHistory: React.MouseEventHandler = () => {
    setIsOpenHistory(!isOpenHistory);
  };
  const handleOpenProfile: React.MouseEventHandler = () => {
    setIsOpenProfile(!isOpenProfile);
  };
  const handleOpenDesire: React.MouseEventHandler = () => {
    setIsOpenDesire(!isOpenDesire);
  };
  const handleOpenHobby: React.MouseEventHandler = () => {
    setIsOpenHobby(!isOpenHobby);
  };
  const handleOpenFinance: React.MouseEventHandler = () => {
    setIsOpenFinance(!isOpenFinance);
  };
  const handleOpenWorries: React.MouseEventHandler = () => {
    setIsOpenWorries(!isOpenWorries);
  };
  const handleOpenFamily: React.MouseEventHandler = () => {
    setIsOpenFamily(!isOpenFamily);
  };
  const handleOpenTarget: React.MouseEventHandler = () => {
    setIsOpenTarget(!isOpenTarget);
  };
  const handleOpenPersonality: React.MouseEventHandler = () => {
    setIsOpenPersonality(!isOpenPersonality);
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
          <button
            onClick={handleOpenProfile}
            data-tooltip-id="profile-tooltip"
            data-tooltip-html={`<ul style="${tooltipStyle}">
                <li>Họ tên: ${profileData.name}</li>
                <li>Ngày sinh:  ${profileData.birth}</li>
                <li>Địa chỉ: ${profileData.address}</li>
                <li>Số điện thoại: ${profileData.phone}</li>
                <li>Email: ${profileData.email}</li>
                <li>Nghề nghiệp: ${profileData.job}</li>
                <li>Trạng thái: ${profileData.status}</li>
              </ul>`}
            data-tooltip-delay-show={0}
          >
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
          <Tooltip id="profile-tooltip" />
        </div>
        <div className={style['row']}>
          <button onClick={handleOpenWorries}>
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
          <button onClick={handleOpenDesire}>
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
          <button onClick={handleOpenPersonality}>
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
          <button onClick={handleOpenHobby}>
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
          <button onClick={handleOpenFamily}>
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
          <button onClick={handleOpenFinance}>
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
          <button onClick={handleOpenTarget}>
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
          <Modal page={<History />} title={'Lịch sử thăm khám'} closeModal={handleOpenHistory} />
        </AnimatePresence>
      )}
      {isOpenProfile && (
        <AnimatePresence>
          <Modal page={<CustomerInfo />} title={'Thông tin khách hàng'} closeModal={handleOpenProfile} />
        </AnimatePresence>
      )}
      {isOpenDesire && (
        <AnimatePresence>
          <Modal page={<Desire />} title={'Mong muốn'} closeModal={handleOpenDesire} />
        </AnimatePresence>
      )}
      {isOpenHobby && (
        <AnimatePresence>
          <Modal page={<Hobby />} title={'Sở thích'} closeModal={handleOpenHobby} />
        </AnimatePresence>
      )}
      {isOpenFinance && (
        <AnimatePresence>
          <Modal page={<Finance />} title={'Tài chính'} closeModal={handleOpenFinance} />
        </AnimatePresence>
      )}
      {isOpenTarget && (
        <AnimatePresence>
          <Modal page={<Target />} title={'Mục tiêu và nỗi lo cuộc sống'} closeModal={handleOpenTarget} />
        </AnimatePresence>
      )}
      {isOpenFamily && (
        <AnimatePresence>
          <Modal page={<Family />} title={'Gia đình/ tình trạng hôn nhân'} closeModal={handleOpenFamily} />
        </AnimatePresence>
      )}

      {isOpenPersonality && (
        <AnimatePresence>
          <Modal page={<Personality />} title={'Tính cách'} closeModal={handleOpenPersonality} />
        </AnimatePresence>
      )}
      {isOpenWorries && (
        <AnimatePresence>
          <Modal page={<Worries />} title={'Nỗi lo lắng'} closeModal={handleOpenWorries} />
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
