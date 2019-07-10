import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingCart } from 'react-icons/md';
import logo from '../../assets/img/rocketshoes.svg';
import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 items</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
