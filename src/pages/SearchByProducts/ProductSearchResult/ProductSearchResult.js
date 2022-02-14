import React, { useState } from 'react';
import CardSellingProductsTwo from '../../../components/BrandsAndProducts/CardSellingProductsTwo/CardSellingProductsTwo';
import Carrossel from '../../../components/Carrossel/Carrossel';
import Footer from '../../../components/Footer/Footer';
import ReusableHeader from '../../../components/ReusableHeader/ReusableHeader';
import SearchInput from '../../../components/SearchInput/SearchInput';
import './style.css';

export default function ProductSearchResult() {
  const [fetchProduct, setFetchProduct] = useState('Parafuso sextavado');

  return (
    <section>
      <ReusableHeader />
      <SearchInput
        id="brand"
        label="busca por PRODUTO"
        value={fetchProduct}
        setValue={setFetchProduct}
        type="text"
        placeholder="digite a marca que procura"
      />

      <div className="DivTitleSearchByProduct">
        <h1 className="TitleSearchByProduct">RESULTADO DA SUA PESQUISA</h1>
      </div>

      <section>
        <CardSellingProductsTwo />
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
