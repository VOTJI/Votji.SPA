import styled from "styled-components";

export const LogInWrapper = styled.div`
  position: absolute;
  top: 82px;
  left: 660px;
`;

export const LogInForm = styled.form`
  width: 280px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 18px 18px 25px #00000040;
  margin-bottom: 40px;

  input{
    display: block;
    border: none;
    border-bottom: 1px solid;
    padding-bottom: 5px;
    margin-bottom: 20px;
    width: 100%;
    background-color: transparent;
    color: #FFDD03;
    outline: none !important;
    opacity: 0.2;
    font-size: 12px;

    ::placeholder{
      color: #FFDD03 !important;
    }
  }

  >a{
    color: #FFDD03;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 50px;
    font-size: 12px;
  }

  p{
    font-size: 12px;
    color: #E6E6E6;
    margin-bottom: 35px;
    opacity: 0.7;

    a{
      color: #FFDD03;
    }
  }

`;

export const LogInButton = styled.button`
  border: none;
  border-radius: 20px;
  box-shadow: 18px 18px 25px #00000040;
  color: #FFDD03;
  width: 280px;
  height: 80px;
  background-color: transparent;
  outline: none !important;
`;