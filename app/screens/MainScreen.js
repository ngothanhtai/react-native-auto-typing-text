import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import AutotypingText from '../components/AutotypingText';

class MainScreen extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'powderblue',
        paddingTop: 30,
      }}
      >
        <AutotypingText
          text={`Từ 1/1/2018, lao động nữ nghỉ hưu khi đóng đủ 15 năm BHXH hưởng lương hưu bằng 45% mức bình quân tiền lương tháng đóng BHXH. Từ năm thứ 16 trở đi, mức hưởng BHXH tăng thêm 2%; đóng đủ 30 năm được hưởng lương hưu tối đa 75% thay vì 25 năm như hiện nay.\nHiện lao động nam đóng 15 năm BHXH hưởng lương hưu 45% bình quân tiền lương tháng đóng BHXH. Từ 1/1/2018, để hưởng mức trên, lao động nam phải đóng đủ 16 năm; tới 2022 phải tham gia 20 năm BHXH mới được hưởng mức 45%. Muốn hưởng lương hưu ở mức tối đa 75%, lao động nam phải đóng bảo hiểm 35 năm, thay vì 30 năm như hiện nay.

Lao động nam nghỉ hưu trong năm 2018 đóng đủ 31 năm BHXH hưởng lương hưu tối đa 75% bình quân tiền lương tháng đóng BHXH. Nếu lao động nam nghỉ hưu từ năm 2019, 2020, 2021 và 2022 trở đi phải đóng tương ứng từ 32 đến 35 năm BHXH mới được hưởng 75%.

Muốn hưởng lương hưu tối đa 75%, người lao động đóng BHXH thêm 5 năm nữa so với hiện nay. Mỗi năm nghỉ hưu trước tuổi theo quy định thì bị trừ 2%.`}
          charMovingTime={10}
          style={{
            fontSize: 14,
            color: 'black',
            backgroundColor: 'grey',
            padding: 20,
          }}
          onComplete={() => { console.log('done'); }}
        />
      </View>
    );
  }

}

export default MainScreen;
