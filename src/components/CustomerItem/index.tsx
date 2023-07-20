import React from 'react';
import { Link } from 'react-router-dom';

import style from './customerItem.module.scss';

const CustomerItem = () => {
  return (
    <tr className={style['customerItem']}>
      <td className={style['stt']}>1</td>
      <td>20/07/2023</td>
      <td>Tiểu phẫu</td>
      <td>8:30</td>
      <td className={style['customer']}>
        <Link to={`/profile/${'1'}`}>Nguyễn Trà My</Link>
      </td>
      <td></td>
      <td>KN123</td>
      <td>Đã thanh toán</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default CustomerItem;
