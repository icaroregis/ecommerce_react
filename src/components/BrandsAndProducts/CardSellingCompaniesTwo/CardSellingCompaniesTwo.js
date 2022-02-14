import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import './style.css';

export default function CardSellingCompaniesTwo() {
  const [categoria, setCategoria] = useState([]);
  const history = useHistory();
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function goForMenuSideBar(id) {
    history.push(`/subcategoriamarca/${id}`);
  }

  useEffect(() => {
    api
      .get(`fobbi-client/categoria/${id}/fornecedor`, config)
      .then((r) => {
        setCategoria(r.data);
      })
      .catch(() => {
        console.log('ERROR');
      });
  }, []);

  return (
    <div className="SellingCompaniesCircle">
      {categoria.map((brand) => {
        return (
          <div
            className="ContainerCardCircle"
            key={brand.id}
            onClick={() => goForMenuSideBar(brand.id)}
          >
            <div className="DivSellingCompaniesCircle" key={brand.id}>
              <img
                src="https://imagens.facilcatalogos.com.br/categoria-images/image19.png"
                alt="..."
                width="100%"
              />
            </div>
            <p className="DescriptionCicleSellingCompanies">
              {brand.descricao}
            </p>
          </div>
        );
      })}
    </div>
  );
}
