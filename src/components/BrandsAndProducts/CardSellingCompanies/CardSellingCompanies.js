import React, { useEffect, useState } from 'react';
import ReusableCard from '../../ReusableCard/ReusableCard';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import './style.css';

export default function CardSellingCompanies() {
  const [descriptionBranch, setDescripitionBranch] = useState([]);
  const history = useHistory();
  const cnpj = localStorage.getItem('CNPJ');
  const token = localStorage.getItem('token');

  function redirectToPageByIdentifier(id) {
    localStorage.setItem('supplierId', id);
    history.push(`/categoriamarca/${id}`);
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

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
    <div className="DivMasterSellingCompanies">
      {descriptionBranch.map((brand) => {
        return (
          <ReusableCard
            key={brand.id}
            onClick={() => redirectToPageByIdentifier(brand.id)}
            src={'https://www.fobbi.com.br/imagens-alfa/' + brand.id + '.png'}
          />
        );
      })}
    </div>
  );
}
