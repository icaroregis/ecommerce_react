import React from 'react';
import { Link } from 'react-router-dom';
import CardSellingCompaniesThree from '../../../components/BrandsAndProducts/CardSellingCompaniesThree/CardSellingCompaniesThree';
import Carrossel from '../../../components/Carrossel/Carrossel';
import Footer from '../../../components/Footer/Footer';
import SidebarMenu from '../../../components/BrandsAndProducts/SideBarMenu/SidebarMenu';
import ReusableHeader from '../../../components/ReusableHeader/ReusableHeader';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './style.css';

export default function SearchSubBrandResult() {
  const id = localStorage.getItem('id');
  return (
    <section>
      <ReusableHeader />
      <section className="BrandSearchSessionResult">
        <CardSellingCompaniesThree />
      </section>

      <Link className="LinkBrandResult" to={`/categoriamarca/${id}`}>
        <AiOutlineArrowLeft className="AiOutlineArrowLeft" />

        <div className="ParagraphSubBrandResult">
          VOLTAR PARA PÁGINA ANTERIOR
        </div>
      </Link>

      <section className="SellingCompaniesTwo">
        <SidebarMenu />
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
