import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContextProvider';
import CardForCarousel from '../CardForCarosel/CardForCarousel';
import Carousel from 'react-elastic-carousel';
import { useHistory } from 'react-router';
import api from '../../services/api';
import './style.css';

export default function Carrossel() {
  const [unbeatableOffers, setUnbeatableOffers] = useState([]);
  const { setOpenModal } = useAppContext();
  const history = useHistory();
  const token = localStorage.getItem('token');
  const CNPJ = localStorage.getItem('CNPJ');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 820, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
  ];

  function directForModal(id) {
    console.log(id);
    setOpenModal(true);
    localStorage.setItem('idSubCategoriaSelecionada', id);
    history.push(`/subcategoriamarca/${id}`);
  }

  useEffect(() => {
    api
      .get(`fobbi-client/cliente/${CNPJ}/ofertas`, config)
      .then((response) => {
        setUnbeatableOffers(response.data);
      })
      .catch((message) => {
        console.log(message);
      });
  }, []);

  return (
    <Carousel className="testeCarrossel" breakPoints={breakPoints}>
      {unbeatableOffers.map((description) => {
        return (
          <CardForCarousel
            key={description.id}
            onClick={() => directForModal(description.id)}
          >
            <div className="IdAndLogo">
              <div className="idProduct">{description.titulo}</div>
              <div>
                <img
                  className="LogoCiserr"
                  src="https://www.fobbi.com.br/imagens-alfa/abe198cc-b520-4741-a9bb-9c6e86725938.png"
                  alt={description.fornecedor.nome}
                />
              </div>
            </div>

            <div className="DivFaucet">
              <img
                className="ImagesCarrossel"
                src="https://imagens.facilcatalogos.com.br/subcategoria-images/images20.jpg?20220125093926"
                alt="..."
              />
            </div>

            <div className="PriceAndDescription">
              <div className="DescriptionProduct">
                {description.descriptionProduct}
              </div>
              <div className="PriceProduct">
                {description.preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </div>
            </div>
          </CardForCarousel>
        );
      })}
    </Carousel>
  );
}
