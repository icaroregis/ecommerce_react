import React, { useState } from 'react';
import FobbiWhite from '../../assets/images/FobbiWhite.png';
import Carrinho from '../../assets/images/Carrinho.png';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.css';

export default function ReusableHeader() {
  const [active, setActive] = useState(false);

  return (
    <header className="ContainerHeaderHome">
      <Link className="ImageHeaderHome" to="/buscarpormarca">
        <img className="ImageHome" src={FobbiWhite} alt="Logo Fobbi" />
      </Link>

      <button onClick={() => setActive(!active)} className="toggle-menu">
        <div className="TitleToggleMenu">MENU</div>
        <div className="IconToggleMenu">
          {active ? (
            <AiOutlineClose className="AiOutlineClose" />
          ) : (
            <AiOutlineMenu className="AiOutlineClose" />
          )}
        </div>
      </button>

      <nav className={`ContainerNavHome ${active ? 'active' : ''}`}>
        <Link className="TitleHome" to="/buscarpormarca">
          <div className="RegularTitle">buscar por</div>
          <div className="RegularTitleBold">MARCA</div>
        </Link>

        <Link className="TitleHome" to="/buscarporproduto">
          <div className="RegularTitle">buscar por</div>
          <div className="RegularTitleBold">PRODUTO</div>
        </Link>

        <Link className="TitleHome" to="/requests">
          <div className="RegularTitleBold">MEUS PEDIDOS</div>
        </Link>

        <Link className="TitleHome" to="/registrationdata">
          <div className="RegularTitleBold">MEUS DADOS</div>
        </Link>

        <Link className="TitleHomeButton" to="/carrinho-compras">
          <div className="TitleCar">CARRINHO(S)</div>
          <img className="Carrinho" src={Carrinho} alt="Carrinho de Compras" />
        </Link>
      </nav>
    </header>
  );
}
