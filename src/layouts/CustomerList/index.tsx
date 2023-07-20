import React from 'react';
import style from './customerList.module.scss';

const CustomerList = () => {
  return (
    <div className={style['customerList']}>
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
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>20/07/2023</td>
                <td>Tiểu phẫu</td>
                <td>8:30</td>
                <td>Nguyễn Trà My</td>
                <td></td>
                <td>KN123</td>
                <td>Đã thanh toán</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
