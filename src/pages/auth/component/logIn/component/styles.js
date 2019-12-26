import styled from "styled-components";

export const LogInWrapper = styled.div`
  position: absolute;
  top: 82px;
  left: 576px;
`

export const LogInForm = styled.form`
  width: 280px;
  height: 308px;
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

    ::placeholder{
      color: #FFDD03 !important;
    }
  }

  p{
    margin-bottom: 20px;
  }

  div{
    margin-bottom: 20px;
  }
`

export const LogInButton = styled.button`
border: none;
  border-radius: 20px;
  box-shadow: 18px 18px 25px #00000040;
  color: #FFDD03;
  width: 280px;
  height: 80px;
  background-color: transparent;
`