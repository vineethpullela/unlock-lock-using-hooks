import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(to bottom, #161617, #3c2940);
  height: 100vh;
`

export const Image = styled.img`
  height: 100px;
  @media screen and (min-width: 768px) {
    height: 200px;
  }
`

export const LockText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 992px) {
    font-size: 26px;
  }
`
export const LockButton = styled.button`
  padding: 8px;
  border-radius: 6px;
  color: #ffffff;
  border: none;
  background-color: #06b6d4;
  width: 100px;
  margin-top: 6%;
  font-family: 'Roboto';
  text-align: Center;
`
