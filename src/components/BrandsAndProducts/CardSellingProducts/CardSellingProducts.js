import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/AppContextProvider';
import { useHistory } from 'react-router';
import api from '../../../services/api';
import './style.css';

export default function CardSellingProducts() {
  const [categoria, setCategoria] = useState([]);
  const { fetchProduct, setOpenModal, productsStoredState } = useAppContext();
  const IdFornecedor = localStorage.getItem('supplierId');
  const token = localStorage.getItem('token');
  const history = useHistory();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function redirectForModalProducts(id, descriptionProduct) {
    const nomeEditado = descriptionProduct.split(' ')[0];
    setOpenModal(true);
    const categSelecionada = categoria.find((item) => {
      return item.descricao === nomeEditado;
    });
    console.log(categSelecionada);
    localStorage.setItem('idSubCategoriaSelecionada', id);
    history.push(`/subcategoriamarca/${id}`);
  }

  useEffect(() => {
    api
      .get(`fobbi-client/categoria/${IdFornecedor}/fornecedor`, config)
      .then((response) => {
        setCategoria(response.data);
      })
      .catch(() => {
        console.log('ERROR');
      });
  }, [IdFornecedor]);

  return (
    <div className="TopSellingProductss">
      <div className="DivCardProductss">
        {productsStoredState.content &&
        productsStoredState.content.length > 0 ? (
          <>
            {productsStoredState.content.map((products) => {
              return (
                <div
                  className="CardProducts"
                  key={products.id}
                  onClick={() =>
                    redirectForModalProducts(products.id, products.descricao)
                  }
                >
                  <div className="DivTitleCardProducts">
                    <h1 className="TitleCardProducts">{products.descricao}</h1>
                  </div>

                  <div className="DivLogoProducts">
                    <img
                      className="LogoProducts"
                      src="https://imagens.facilcatalogos.com.br/subcategoria-images/images20.jpg?20220125093926"
                      alt="Logo do Produto"
                    />
                  </div>

                  <div className="DivPoductsDescription">
                    <img
                      className="PoductsDescription"
                      src="https://www.fobbi.com.br/imagens-alfa/abe198cc-b520-4741-a9bb-9c6e86725938.png"
                      alt="Logo da Marca"
                    />
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {fetchProduct.content
              ? fetchProduct.content.map((products) => {
                  return (
                    <div
                      className="CardProducts"
                      key={products.id}
                      onClick={() =>
                        redirectForModalProducts(
                          products.id,
                          products.descricao
                        )
                      }
                    >
                      <div className="DivTitleCardProducts">
                        <h1 className="TitleCardProducts">
                          {products.descricao}
                        </h1>
                      </div>

                      <div className="DivLogoProducts">
                        <img
                          className="LogoProducts"
                          src="https://imagens.facilcatalogos.com.br/subcategoria-images/images20.jpg?20220125093926"
                          alt="Logo do Produto"
                        />
                      </div>

                      <div className="DivPoductsDescription">
                        <img
                          className="PoductsDescription"
                          src="https://www.fobbi.com.br/imagens-alfa/abe198cc-b520-4741-a9bb-9c6e86725938.png"
                          alt="Logo da Marca"
                        />
                      </div>
                    </div>
                  );
                })
              : ''}
          </>
        )}
      </div>
    </div>
  );
}
