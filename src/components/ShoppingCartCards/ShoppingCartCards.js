import React from 'react';
import Ciser from '../../assets/images/Ciser.png';
import Carrinho from '../../assets/images/Carrinho.png';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function ShoppingCartCards() {
  const history = useHistory();
  const dataCards = [
    {
      marca: 'CISER',
      pedidoMinimo: '600',
      entrega: 'ATÉ 5 DIAS ÚTEIS',
      frete: 'GRÁTIS',
      produtosSelecionados: 4,
      volumes: 8,
      total: 950,
      obs: 'Faltam R$ 15,80 para atingir o pedido mínimo',
    },
    {
      marca: 'DOCOL',
      pedidoMinimo: '500',
      entrega: 'ATÉ 7 DIAS ÚTEIS',
      frete: 'GRÁTIS',
      produtosSelecionados: 2,
      volumes: 10,
      total: 1100,
      obs: 'Faltam R$ 25,80 para atingir o pedido mínimo',
    },
    {
      marca: 'TIGRE',
      pedidoMinimo: '900',
      entrega: 'ATÉ 10 DIAS ÚTEIS',
      frete: 'GRÁTIS',
      produtosSelecionados: 1,
      volumes: 15,
      total: 1500,
      obs: 'Faltam R$ 35,80 para atingir o pedido mínimo',
    },
  ];

  function getByShoppingCart() {
    history.push('/carrinho-individual');
  }

  return (
    <>
      <div className="TitleCart">
        <h1>SEU(S) CARRINHO(S) DE COMPRA(S)</h1>
      </div>

      <div className="DivCarts">
        {dataCards.map((item, index, array) => {
          return (
            <div className="DivCart">
              <div className="SmallDiv">
                <div className="DivSquare">
                  <img
                    className="LogoCiserSquare"
                    src={Ciser}
                    alt="Imagem da Logomarca do Fornecedor"
                  />
                </div>

                <div className="DivShoppingCart">
                  <img
                    className="LogoCarrinho"
                    src={Carrinho}
                    alt="Imagem do Carrinho de Compras"
                  />
                </div>
              </div>
              <div className="BigDiv">
                <div className="DescriptionPartOne">
                  <p className="StyleFontSupplier">FORNECEDOR</p>
                  <p>MARCA: {item.marca}</p>
                  <p>PEDIDO MÍNIMO: R$ 600</p>
                  <p>ENTREGA: ATÉ 5 DIAS ÚTEIS</p>
                  <p>FRETE: GRÁTIS</p>
                </div>

                <div className="DescriptionPartTwo">
                  <p className="StyleFontSupplier">SEU CARRINHO</p>
                  <p>PRODUTOS SELECIONADOS: 4</p>
                  <p>VOLUMES: 8</p>
                  <p>TOTAL: R$ 584,20</p>
                  <p className="TitleAlert">
                    Faltam R$ 15,80 para atingir o pedido mínimo
                  </p>
                </div>

                <div className="ButtonSubmitCart">
                  <button className="ButtonCart" onClick={getByShoppingCart}>
                    CONFERIR PEDIDO
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
