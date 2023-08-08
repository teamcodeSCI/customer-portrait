import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import style from './profile.module.scss';

import { useAppDispatch, useAppSelector } from '@/app/hook';
import { customerSelector, loadedCustomerSelector } from '@/features/customer/customerSlice';
import { fetchCustomer } from '@/features/customer/customerApi';

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
import { useSearchParams } from 'react-router-dom';
import { gender } from '@/utils/help';
const Profile = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams()
  const companyId = searchParams.get('company_id')
  const partnerId = searchParams.get('partner_id')
  const [isOpenHistory, setIsOpenHistory] = useState<boolean>(false);

  const data = useAppSelector(customerSelector);

  const loaded = useAppSelector(loadedCustomerSelector);

  const profile = loaded && data.data.thong_tin_chung[0]
  const desire = loaded && data.data.mong_muon.length !== 0 ? data.data.mong_muon[0].data : []
  const hobby = loaded && data.data.so_thich.length !== 0 ? data.data.so_thich[0].data : []
  const finance = loaded && data.data.tai_chinh.length !== 0 ? data.data.tai_chinh[0].data : []
  const target = loaded && data.data.muc_tieu.length !== 0 ? data.data.muc_tieu[0].data : []
  const family = loaded && data.data.gia_dinh.length !== 0 ? data.data.gia_dinh[0].data : []
  const personality = loaded && data.data.tinh_cach.length !== 0 ? data.data.tinh_cach[0].data : []
  const worry = loaded && data.data.noi_lo_lang.length !== 0 ? data.data.noi_lo_lang[0].data : []

  const profileArr = Object.values(profile).map((e: any) => gender(e));


  const handleOpenHistory: React.MouseEventHandler = () => {
    // setIsOpenHistory(!isOpenHistory);
  };

  useEffect(() => {
    dispatch(fetchCustomer({ companyId: Number(companyId), partnerId: Number(partnerId) }));
  }, [dispatch, companyId, partnerId]);
  return (
    <div className={style['app']}>
      <div className={style['box']}>
        <div className={style['profile']}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: 'linear' }}>
            <img width={828} height={828} src={profile.images || `${process.env.PUBLIC_URL}/assets/images/no-image.jpg`} alt="" />
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
            expandData={worry}
            delay={1.6}
          />
          <Card
            title="Mong muốn"
            img={`${process.env.PUBLIC_URL}/assets/icons/star.svg`}
            page={<Desire />}
            expandData={desire}
            delay={0.4}
          />
        </div>
        <div className={style['row']}>
          <Card
            title="Tính cách"
            img={`${process.env.PUBLIC_URL}/assets/icons/heart.svg`}
            page={<Personality />}
            expandData={personality}
            delay={1.4}
          />
          <div className={style['position']}></div>
          <Card
            title="Sở thích"
            img={`${process.env.PUBLIC_URL}/assets/icons/like.svg`}
            page={<Hobby />}
            expandData={hobby}
            delay={0.6}
          />
        </div>
        <div className={style['row']}>
          <Card
            title="Gia đình/tình trạng hôn nhân"
            img={`${process.env.PUBLIC_URL}/assets/icons/users.svg`}
            page={<Family />}
            expandData={family}
            delay={1.2}
          />
          <Card
            title="Tài chính"
            img={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
            page={<Finance />}
            expandData={finance}
            delay={0.8}
          />
        </div>
        <div className={style['row']}>
          <Card
            title="Mục tiêu và nỗi lo cuộc sống"
            img={`${process.env.PUBLIC_URL}/assets/icons/check.svg`}
            page={<Target />}
            expandData={target}
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
