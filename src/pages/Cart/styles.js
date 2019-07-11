import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 25px;

  footer {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      padding: 12px 20px;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    img {
      max-height: 120px;
    }

    strong {
      color: #333;
      display: block;
    }

    span {
      margin-top: 5px;
      display: block;
      font-weight: bold;
      font-size: 18px;
    }

    div {
      display: flex;
      align-items: center;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
      margin-top: 5px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
