import styled from "styled-components";

export const SignUpWrapper = styled.div`
  position: absolute;
  top: 82px;
  left: 245px;
`;

export const SignUpForm = styled.form`
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

  p{
    margin-bottom: 30px;
    font-size: 10px;
    color: #E6E6E6;
    opacity: 0.5;
    text-align: center;
  }

  .social-media{
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;

    i{
      color: #ffffff;
      font-size: 20px;
    }
  }

  .privacy{
    margin: 0 auto 30px;

    a{
      text-decoration: underline;
    }
  }

  >a{
    color: #FFDD03;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

export const SignUpButton = styled.button`
border: none;
  border-radius: 20px;
  box-shadow: 18px 18px 25px #00000040;
  color: #FFDD03;
  width: 280px;
  height: 80px;
  background-color: transparent;
`;