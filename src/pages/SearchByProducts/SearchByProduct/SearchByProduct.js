import React, { useEffect, useState } from 'react';
import CardSellingProducts from '../../../components/BrandsAndProducts/CardSellingProducts/CardSellingProducts';
import ReusableHeader from '../../../components/ReusableHeader/ReusableHeader';
import { useAppContext } from '../../../context/AppContextProvider';
import Carrossel from '../../../components/Carrossel/Carrossel';
import Footer from '../../../components/Footer/Footer';
import api from '../../../services/api';
import './style.css';

export default function SearchByProduct() {
  const [searchField, setSearchField] = useState('');
  const { setFetchProduct, setProductsStoredState } = useAppContext();
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function FilterProducts(e) {
    e.preventDefault();
    const endpoint = 'fobbi-client/subCategoria/searchTerm?';
    const complementEndpoint = `page=0&searchTerm=${searchField}&size=10`;
    api
      .get(`${endpoint} ${complementEndpoint}`, config)
      .then((response) => {
        setProductsStoredState(response.data);
      })
      .catch((response) => {
        console.log(response.message);
      });
  }

  useEffect(() => {
    api
      .get('fobbi-client/subCategoria/busca', config)
      .then((response) => {
        setFetchProduct(response.data);
      })
      .catch((message) => {
        console.log(message);
      });
  }, []);

  return (
    <section>
      <ReusableHeader />
      <form
        className="ContainerSearchByProduct"
        onSubmit={(e) => FilterProducts(e)}
      >
        <div className="LabelSearchInput">
          <label htmlFor="brand">buscar por produto</label>
        </div>

        <input
          className="InputSearchBrand"
          id="brand"
          value={searchField}
          onChange={({ target }) => setSearchField(target.value)}
          type="text"
          placeholder="digite a produto que procura"
        />
        <div className="BorderSearchBrand" />
      </form>

      <div className="DivTitleSearchByProduct">
        <h1 className="TitleSearchByProduct">
          PRINCIPAIS CATEGORIAS DE PRODUTOS VENDIDOS NA SUA REGIÃO
        </h1>
      </div>

      <section>
        <CardSellingProducts />
      </section>

      <section className="DivSearchByProductCarrossel">
        <h1 className="TitleSearchByProductCarrossel">OFERTAS IMBATÍVEIS</h1>

        <div className="SearchByProductCarrossel">
          <Carrossel />
        </div>
      </section>

      <Footer />
    </section>
  );
}
