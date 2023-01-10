import styled from 'styled-components';
import { Input } from 'antd';
import LogoImage from '../../assets/image/logimage.jpg';
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

Wrapper.Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
Wrapper.Left = styled.div`
  flex: 1;
  height: 100%;
  background-color: #3067cb;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    display: none;
  }
`;

Wrapper.LoginGIF = styled.div`
  background-image: url(${LogoImage});
  width: 70%;
  height: 70%;
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
`;
Wrapper.Right = styled.div`
  flex: 1;
  background-color: #fff;
`;
Wrapper.RightContainer = styled.div`
  width: 65%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1150px) {
    width: 90%;
  }
`;
Wrapper.Icon = styled.img`
  width: 80px;
  height: 80px;
  padding: 5px;
  border: 1p solid rgb(245, 245, 245);
  border-radius: 50%;
`;
Wrapper.Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: rgb(57, 56, 77);
`;
Wrapper.Desc = styled.div`
  margin-top: 10px;
  color: rgb(178, 176, 184);
  text-align: center;
  width: 80%;
  font-weight: 300;
`;
Wrapper.Input = styled(Input)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.PasswordInput = styled(Input.Password)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.Button = styled.div`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  border-radius: 12px;
  background-color: rgb(48, 104, 203);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;
