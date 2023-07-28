import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import style from './profile.module.scss';

import { useAppDispatch, useAppSelector } from '@/app/hook';
import { customerSelector, loadedCustomerSelector } from '@/features/customer/customerSlice';
import { desireSelector, loadedDesireSelector } from '@/features/desire/desireSlice';
import { hobbySelector, loadedHobbySelector } from '@/features/hobby/hobbySlice';
import { financeSelector, loadedFinanceSelector } from '@/features/finance/financeSlice';
import { loadedTargetSelector, targetSelector } from '@/features/target/targetSlice';
import { familySelector, loadedFamilySelector } from '@/features/family/familySlice';
import { loadedPersonalitySelector, personalitySelector } from '@/features/personality/personalitySlice';
import { loadedWorrySelector, worrySelector } from '@/features/worry/worrySlice';
import { fetchCustomer } from '@/features/customer/customerApi';
import { fetchDesire } from '@/features/desire/desireApi';
import { fetchHobby } from '@/features/hobby/hobbyApi';
import { fetchFinance } from '@/features/finance/financeApi';
import { fetchTarget } from '@/features/target/targetApi';
import { fetchFamily } from '@/features/family/familyApi';
import { fetchPersonality } from '@/features/personality/personalityApi';
import { fetchWorry } from '@/features/worry/worryApi';
import Card from '@/components/Card';
import History from '@/pages/History';
import CustomerInfo from '@/pages/CustomerInfo';
import Modal from '@/layouts/Modal';
import Worries from '@/pages/Worries';
import Desire from '@/pages/Desire';
import Personality from '@/pages/Personality';
import Hobby from '@/pages/Hobby';
import Family from '@/pages/Family';
import Finance from '@/pages/Finance';
import Target from '@/pages/Target';
const Profile = () => {
  const dispatch = useAppDispatch();
  const [isOpenHistory, setIsOpenHistory] = useState<boolean>(false);
  const profileData = useAppSelector(customerSelector);
  const loadedProfile = useAppSelector(loadedCustomerSelector);

  const desireData = useAppSelector(desireSelector);
  const loadedDesire = useAppSelector(loadedDesireSelector);

  const hobbyData = useAppSelector(hobbySelector);
  const loadedHobby = useAppSelector(loadedHobbySelector);

  const financeData = useAppSelector(financeSelector);
  const loadedFinance = useAppSelector(loadedFinanceSelector);

  const targetData = useAppSelector(targetSelector);
  const loadedTarget = useAppSelector(loadedTargetSelector);

  const familyData = useAppSelector(familySelector);
  const loadedFamily = useAppSelector(loadedFamilySelector);

  const personalityData = useAppSelector(personalitySelector);
  const loadedPersonality = useAppSelector(loadedPersonalitySelector);

  const worryData = useAppSelector(worrySelector);
  const loadedWorry = useAppSelector(loadedWorrySelector);

  let profileArr: any = loadedProfile && Object.values(profileData).map((e) => e);

  const handleOpenHistory: React.MouseEventHandler = () => {
    setIsOpenHistory(!isOpenHistory);
  };

  useEffect(() => {
    dispatch(fetchCustomer());
    // dispatch(fetchDesire());
    // dispatch(fetchHobby());
    // dispatch(fetchFinance());
    // dispatch(fetchTarget());
    // dispatch(fetchFamily());
    // dispatch(fetchPersonality());
    // dispatch(fetchWorry());
  }, [dispatch]);
  return (
    <div className={style['app']}>
      <div className={style['box']}>
        <div className={style['profile']}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: 'linear' }}>
            <img width={828} height={828} src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`} alt="" />
          </motion.div>
        </div>
        <div className={style['row']}>
          <Card
            title="Thông tin khách hàng"
            img={`${process.env.PUBLIC_URL}/assets/icons/user.svg`}
            page={<CustomerInfo />}
            expandData={profileArr}
            delay={0.2}
          />
        </div>
        <div className={style['row']}>
          <Card
            title="Nỗi lo lắng"
            img={`${process.env.PUBLIC_URL}/assets/icons/sad.svg`}
            page={<Worries />}
            expandData={loadedWorry && worryData[0].desire}
            delay={1.6}
          />
          <Card
            title="Mong muốn"
            img={`${process.env.PUBLIC_URL}/assets/icons/star.svg`}
            page={<Desire />}
            expandData={loadedDesire && desireData[0].desire}
            delay={0.4}
          />
        </div>
        <div className={style['row']}>
          <Card
            title="Tính cách"
            img={`${process.env.PUBLIC_URL}/assets/icons/heart.svg`}
            page={<Personality />}
            expandData={loadedPersonality && personalityData[0].desire}
            delay={1.4}
          />
          <div className={style['position']}></div>
          <Card
            title="Sở thích"
            img={`${process.env.PUBLIC_URL}/assets/icons/like.svg`}
            page={<Hobby />}
            expandData={loadedHobby && hobbyData[0].desire}
            delay={0.6}
          />
        </div>
        <div className={style['row']}>
          <Card
            title="Gia đình/tình trạng hôn nhân"
            img={`${process.env.PUBLIC_URL}/assets/icons/users.svg`}
            page={<Family />}
            expandData={loadedFamily && familyData[0].desire}
            delay={1.2}
          />
          <Card
            title="Tài chính"
            img={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
            page={<Finance />}
            expandData={loadedFinance && financeData[0].desire}
            delay={0.8}
          />
        </div>
        <div className={style['row']}>
          <Card
            title="Mục tiêu và nỗi lo cuộc sống"
            img={`${process.env.PUBLIC_URL}/assets/icons/check.svg`}
            page={<Target />}
            expandData={loadedTarget && targetData[0].desire}
            delay={1}
          />
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
    </div>
  );
};

export default Profile;
