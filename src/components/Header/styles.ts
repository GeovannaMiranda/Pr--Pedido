import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;
    //letras do carrinho
    strong {
      display: block;
      color: #000;
    }

    span {
      font-size: 12px;
      color: #000;
    }
  }
  @media screen and(max-width: 600px){
    display: flex;
    align-items: center;
    text-decoration: none;
  
    div {
      text-align: right;
      margin-right: 10px;
  
      strong {
        display: block;
        color: #000;
      }
  
      span {
        font-size: 12px;
        color: #000;
      }
    }
  }
`;
