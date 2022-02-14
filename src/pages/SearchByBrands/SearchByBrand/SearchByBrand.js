import React, { useState, useEffect } from 'react';
import ReusableHeader from '../../../components/ReusableHeader/ReusableHeader';
import ReusableCard from '../../../components/ReusableCard/ReusableCard';
import SearchInput from '../../../components/SearchInput/SearchInput';
import Carrossel from '../../../components/Carrossel/Carrossel';
import Footer from '../../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import './style.css';

export default function SearchByBrand() {
  const [supplierBrand, setSuplierBrand] = useState('');
  const [descriptionBranch, setDescripitionBranch] = useState([]);
  const history = useHistory();
  const cnpj = localStorage.getItem('CNPJ');
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const marcaFiltrada = descriptionBranch.filter((item) => {
    return item.nomeFornecedor
      .toLocaleLowerCase()
      .includes(supplierBrand.toLocaleLowerCase());
  });

  function redirectToPageByIdentifier(id) {
    localStorage.setItem('supplierId', id);
    history.push(`/categoriamarca/${id}`);
  }

  useEffect(() => {
    api
      .get(`fobbi-client/fornecedor/${cnpj}/cliente`, config)
      .then((r) => {
        setDescripitionBranch(r.data);
      })
      .catch(() => {
        console.log('testando erro');
      });
  }, []);

  return (
    <section>
      <ReusableHeader />
      <section className="BrandSearchSession">
        <SearchInput
          id="brand"
          value={supplierBrand}
          setValue={setSuplierBrand}
          type="text"
          label="buscar por marca"
          placeholder="digite a marca que procura"
        />
      </section>

      <div className="DivTitleBrandSearchSession">
        <h1 className="TitleBrandSearchSession">QUEM VENDE NA FOBBI</h1>
      </div>

      <section className="SellingCompanies">
        <div className="DivMasterSellingCompanies">
          {marcaFiltrada.map((brand) => {
            return (
              <ReusableCard
                key={brand.id}
                onClick={() => redirectToPageByIdentifier(brand.id)}
                src={
                  'https://www.fobbi.com.br/imagens-alfa/' + brand.id + '.png'
                }
              />
            );
          })}
        </div>
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
