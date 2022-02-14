import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContextProvider';
import ReusableCard from '../../ReusableCard/ReusableCard';
import api from '../../../services/api';
import './style.css';

export default function CardSellingCompaniesThree() {
  const { brandData, setBrandData } = useAppContext();
  const token = localStorage.getItem('token');
  const { id } = useParams();
  const IdFornecedor = localStorage.getItem('supplierId');
  localStorage.setItem('id', id);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const convertToBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  function redirectNull(e) {
    e.preventDefault();
  }

  useEffect(() => {
    api
      .get(`fobbi-client/fornecedor/${IdFornecedor}`, config)
      .then((r) => {
        setBrandData(r.data);
      })
      .catch(() => {
        console.log('teste ERROR');
      });
  }, []);

  return (
    <div className="ContainerFather">
      <ReusableCard
        onClick={redirectNull}
        src={'https://www.fobbi.com.br/imagens-alfa/' + IdFornecedor + '.png'}
      />

      <div className="DescriptionForCard">
        <h1 className="DescriptionCardH1">{brandData.nomeFornecedor}</h1>
        <p className="DescriptionCardP">{brandData.descricao}</p>
        <p className="DescriptionCardP">
          pedido mínimo:{' '}
          <span className="DescrptionSpan">
            {convertToBRL.format(brandData.valorPedidoMinimo)}
          </span>
        </p>
        <p>
          entrega:{' '}
          <span className="DescrptionSpan">{brandData.prazoEntrega} dias</span>
        </p>
      </div>
    </div>
  );
}
