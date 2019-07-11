import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 450px;
    width: 350px;
    border-radius: 5px;
    padding: 20px;
    margin: 15px 10px;
    max-width: 318px;
    overflow: hidden;

    img {
      align-self: center;
      max-width: 100%;
      transition: transform 0.2s;
      margin-bottom: 18px;
      &:hover {
        transform: scale(1.15);
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0px 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: all 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 6px;
        }
      }

      span {
        text-align: center;
        flex: 1;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;
