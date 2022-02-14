import React from 'react';
import { useAppContext } from '../../../context/AppContextProvider';
import CustomizedModal from '../CustomizedModal/CustomizedModal';
import './style.css';

export default function CardSellingProductsForModal() {
  const { setOpenModal, selected, categorias } = useAppContext();

  const subcategoriaSelecionada = categorias.find((item) => {
    return item.descricao === selected;
  });

  function handleOpen(id) {
    localStorage.setItem('idSubCategoriaSelecionada', id);
    setOpenModal(true);
  }

  return (
    <div className="TopSellingProducts">
      <div className="DivCardProducts">
        {subcategoriaSelecionada
          ? subcategoriaSelecionada.subCategorias.map((properties) => {
              return (
                <div
                  className="CardProducts"
                  key={properties.id}
                  onClick={() => handleOpen(properties.id)}
                >
                  <div>
                    <img
                      src="https://imagens.facilcatalogos.com.br/subcategoria-images/images20.jpg?20220125093926"
                      alt="..."
                      className="LogoProductIcon"
                    />
                  </div>

                  <div className="DivTitleCardProducts">
                    <h1 className="TitleCardProducts">
                      {properties.descricao}
                    </h1>
                  </div>

                  <div className="DivLogoProducts"></div>

                  <div className="DivPoductsDescription"></div>
                </div>
              );
            })
          : 'Sem subcategorias para exibir'}
      </div>

      <section>
        <CustomizedModal />
      </section>
    </div>
  );
}
