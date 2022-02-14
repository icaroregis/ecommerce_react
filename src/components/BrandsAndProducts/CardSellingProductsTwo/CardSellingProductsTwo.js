import React, { useEffect, useState } from 'react';
import Screw from '../../../assets/images/Screw.png';
import Ciser from '../../../assets/images/Ciser.png';
import './style.css';

export default function CardSellingProductsTwo() {
  const [itemsPorPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);

  const productCategories = [
    {
      id: 1,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 2,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 3,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 4,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 5,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 6,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 7,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 8,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 9,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 10,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 11,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 12,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 13,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 14,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 15,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 16,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 17,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 18,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 19,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 20,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 21,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 22,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 23,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 24,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 25,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 26,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 27,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 28,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 29,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 30,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 31,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 32,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 33,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 34,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 35,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 36,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 37,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 38,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 39,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 40,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 41,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 42,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 43,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 44,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 45,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 46,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 47,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 48,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 49,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 50,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 51,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 52,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 53,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 54,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 55,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 56,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 57,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 58,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 59,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
    {
      id: 60,
      productDescription: 'PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO',
      alt: 'Categorias de Produtos',
    },
  ];

  const pages = Math.ceil(productCategories.length / itemsPorPage);
  const startIndex = currentPage * itemsPorPage;
  const endIndex = startIndex + itemsPorPage;
  const currentItems = productCategories.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPorPage]);

  return (
    <div className="TopSellingProducts">
      <div className="DivCardProducts">
        {currentItems.map((products) => {
          return (
            <div className="CardProducts" key={products.id}>
              <div className="DivTitleCardProducts">
                <h1 className="TitleCardProducts">
                  {products.productDescription}
                </h1>
              </div>

              <div className="DivLogoProducts">
                <img className="LogoProducts" src={Screw} alt={products.alt} />
              </div>

              <div className="DivPoductsDescription">
                {/* <div>{products.id}</div> */}
                <img
                  className="PoductsDescription"
                  src={Ciser}
                  alt={products.alt}
                />
              </div>
            </div>
          );
        })}
      </div>

      <section>
        <div div className="ContainerButtons">
          <div style={{ marginRight: '4px' }}>
            <button
              className="ButtonsProducts"
              value={currentPage}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Anterior
            </button>
          </div>

          {Array.from(Array(pages), (item, index) => {
            return (
              <div style={{ marginRight: '4px' }}>
                <button
                  className="ButtonsProducts"
                  key={index}
                  style={
                    index === currentPage ? { backgroundColor: 'gray' } : null
                  }
                  value={index}
                  onClick={({ target }) => setCurrentPage(Number(target.value))}
                >
                  {index + 1}
                </button>
              </div>
            );
          })}
          <div style={{ marginRight: '4px' }}>
            <button
              className="ButtonsProducts"
              value={currentPage}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Próximo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
