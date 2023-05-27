import styled from "styled-components";

export const NavStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 87%;
  
  h3 {
    font-size: 1em;
  }
  .containt-button {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 90%;
    margin: 1rem auto;
    padding: 1rem 0;
    border-radius: 5px;

    h4 {
      color: black;
      font-weight: bold;
      font-size: 1.5em;
    }
    .button {
      background: #0d6efd;
      width: 80%;
      margin: auto;
      text-align: center;
      color: whitesmoke;
      padding: .3rem 0;
      border-radius: 5px;
      font-size: .8rem;
      cursor: pointer;
      text-decoration: none;
    }
    .button-logout-mobile {
      display: none;
    }
  }

`