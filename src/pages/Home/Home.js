import React, { useState } from 'react';
import ReusableHeader from '../../components/ReusableHeader/ReusableHeader';
import Ciser from '../../assets/images/Ciser.png';
import Docol from '../../assets/images/Docol.png';
import Vector from '../../assets/images/Vector.png';
import Footer from '../../components/Footer/Footer';
import Carrossel from '../../components/Carrossel/Carrossel';
import SearchInput from '../../components/SearchInput/SearchInput';
import './style.css';
import ReusableCard from '../../components/ReusableCard/ReusableCard';

export default function Home() {
  const [searchMark, setSearchMark] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="ContainerMasterHome">
      <section className="PresentationContainerHome">
        <div className="TitlePresentationBold">
          Bem vindo a Fobbi, o seu representante digital.
        </div>
        <div className="TitlePresentation">
          Aqui você abastece sua loja sem precisar passar por processos
          burocráticos de cadastro e cotação. Oferecemos as
          <br />
          melhores marcas, com os menores preços do mercado
        </div>

        <SearchInput
          required
          id="brand"
          value={searchMark}
          setValue={setSearchMark}
          type="text"
          placeholder="digite a marca ou categoria de produto que procura..."
        />
      </section>

      <section className="ContainerBodyHome">
        <div className="SubContainerBodyHome">
          CONFIRA ALGUMAS DE NOSSAS MARCAS PARCEIRAS
        </div>
        <div className="PartnerBrands">
          <ReusableCard src={Ciser} />
          <ReusableCard src={Docol} />
        </div>

        <div className="UnbeatablePrices">PREÇOS IMBATÍVEIS</div>

        <div className="DivCarousel ">
          <Carrossel />
        </div>
      </section>

      <section className="SessionContactUs">
        <div className="SubSessionContactUs">
          <div className="NewsAndPromotions">
            <div className="TextImageSession">
              <img
                className="LogoSessionContactUs"
                src={Vector}
                alt="Logo-Email"
              />
            </div>
            <div className="DescriptionImage">
              <p className="TextNewsletter">newsletter</p>
            </div>
            <div className="TextNewsAndPromotions">
              QUER RECEBER NOSSAS NOVIDADES
              <br />E PROMOÇÕES EM PRIMEIRA MÃO ?
            </div>
          </div>

          <form className="ReceiveNews">
            <div className="StyleInputReceiveNews">
              <input
                className="InputReceiveNews"
                value={name}
                onChange={({ target }) => setName(target.value)}
                type="text"
                placeholder="NOME"
              />
            </div>
            <div className="StyleInputReceiveNews">
              <input
                className="InputReceiveNews"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type="email"
                placeholder="EMAIL"
              />
            </div>

            <div className="DivButtonReceiveNews">
              <button onClick={() => {}} className="ButtonReceiveNews">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
