import React from 'react';
import CardSellingCompaniesThree from '../../../components/BrandsAndProducts/CardSellingCompaniesThree/CardSellingCompaniesThree';
import CardSellingCompaniesTwo from '../../../components/BrandsAndProducts/CardSellingCompaniesTwo/CardSellingCompaniesTwo';
import ReusableHeader from '../../../components/ReusableHeader/ReusableHeader';
import { useAppContext } from '../../../context/AppContextProvider';
import Carrossel from '../../../components/Carrossel/Carrossel';
import Footer from '../../../components/Footer/Footer';
import './style.css';

export default function SearchBrandResult() {
  const { brandData } = useAppContext();

  return (
    <section>
      <ReusableHeader />
      <section className="BrandSearchSessionResult">
        <CardSellingCompaniesThree />
      </section>

      <div className="DivTitleBrandSearchSessionTwo">
        <h1 className="TitleBrandSearchSession">
          CONFIRA O CATÁLOGO DE PRODUTOS {brandData.nomeFornecedor}
        </h1>
      </div>

      <section className="SellingCompanies">
        <CardSellingCompaniesTwo />
      </section>

      <section className="UnbeatableOffers">
        <h1 className="TitleBrandSearchSession">OFERTAS IMBATÍVEIS</h1>

        <div className="CarrosselUnbeatableOffers">
          <Carrossel />
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </section>
  );
}
