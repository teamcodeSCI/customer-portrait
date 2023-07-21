import React from 'react';
import style from './customerList.module.scss';
import CustomerItem from '@/components/CustomerItem';
import Loading from '@/components/Loading';

const data: any[] = [
  {
    id: 1,
    date: '20/07/2023',
    department: 'Tiểu phẫu',
    time: '8:20',
    name: 'Nguyễn Trà My',
    customerId: 1,
    service: '',
    account: 'KN123',
    status: 'Đã thanh toán',
    kip: '',
    bspt: '',
    ekip: '',
  },
  {
    id: 2,
    date: '20/07/2023',
    department: 'Tiểu phẫu',
    time: '8:20',
    name: 'Nguyễn Trà My',
    customerId: 2,
    service: '',
    account: 'KN123',
    status: 'Đã thanh toán',
    kip: '',
    bspt: '',
    ekip: '',
  },
  {
    id: 3,
    date: '20/07/2023',
    department: 'Tiểu phẫu',
    time: '8:20',
    name: 'Nguyễn Trà My',
    customerId: 3,
    service: '',
    account: 'KN123',
    status: 'Đã thanh toán',
    kip: '',
    bspt: '',
    ekip: '',
  },
  {
    id: 4,
    date: '20/07/2023',
    department: 'Tiểu phẫu',
    time: '8:20',
    name: 'Nguyễn Trà My',
    customerId: 4,
    service: '',
    account: 'KN123',
    status: 'Đã thanh toán',
    kip: '',
    bspt: '',
    ekip: '',
  },
  {
    id: 5,
    date: '20/07/2023',
    department: 'Tiểu phẫu',
    time: '8:20',
    name: 'Nguyễn Trà My',
    customerId: 5,
    service: '',
    account: 'KN123',
    status: 'Đã thanh toán',
    kip: '',
    bspt: '',
    ekip: '',
  },
];

const CustomerList = () => {
  return (
    <div className={style['customerList']}>
      <Loading />
      <div className="container" style={{ zIndex: 1 }}>
        <div className={style['header']}>Theo dõi và phân công thực hiện nhiệm vụ</div>
        <div className={style['table']}>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Ngày</th>
                <th>
                  Phòng/ Bộ <br /> phận
                </th>
                <th>
                  Thời gian <br /> thực hiện
                </th>
                <th>Tên khách hàng</th>
                <th>Dịch vụ</th>
                <th>Account</th>
                <th>Trạng thái</th>
                <th>Kíp mê</th>
                <th>BSPT</th>
                <th>Ekip mổ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any, idx: number) => (
                <CustomerItem key={item.id} {...item} stt={idx + 1} />
              ))}
            </tbody>
          </table>
        </div>
        :L
      </div>
    </div>
  );
};

export default CustomerList;
