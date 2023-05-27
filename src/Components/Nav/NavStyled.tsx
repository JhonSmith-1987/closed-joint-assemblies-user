import styled from "styled-components";

export const HeaderStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10%;
  padding: 2.5rem 0;
  color: #6b7378;

  .content-img {
    display: flex;
    align-items: center;
    justify-content: center;
    background: whitesmoke;
    border-radius: 50%;
    border: 1px solid #1c3150;
    padding: .3rem;

    img {
      display: block;
      height: 50px;
    }
  }
  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  span {
    font-size: .8rem;
  }
  button {
    background: #6b7378;
    color: whitesmoke;
    padding: .3rem .7rem;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

`