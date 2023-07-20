import React from 'react';
import { Link } from 'react-router-dom';
import style from './customerItem.module.scss';
interface CustomerItemProps {
  stt: number;
  id: number;
  date: string;
  department: string;
  time: string;
  name: string;
  customerId: number;
  service: string;
  account: string;
  status: string;
  kip: string;
  bspt: string;
  ekip: string;
}
const CustomerItem = (props: CustomerItemProps) => {
  return (
    <tr className={style['customerItem']}>
      <td className={style['stt']}>{props.stt}</td>
      <td>{props.date}</td>
      <td>{props.department}</td>
      <td>{props.time}</td>
      <td className={style['customer']}>
        <Link to={`/profile/${props.customerId}`}>{props.name}</Link>
      </td>
      <td>{props.service}</td>
      <td>{props.account}</td>
      <td>{props.status}</td>
      <td>{props.kip}</td>
      <td>{props.bspt}</td>
      <td>{props.ekip}</td>
    </tr>
  );
};

export default CustomerItem;
