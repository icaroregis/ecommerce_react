import React, { useEffect } from 'react';
import { ProSidebar, Menu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import CardSellingProductsForModal from '../../BrandsAndProducts/CardSellingProductsForModal/CardSellingProductsForModal';
import MenuItemSideBarMenu from '../MenuItemSideBarMenu/MenuItemSideBarMenu';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContextProvider';
import api from '../../../services/api';
import './style.css';

export default function SidebarMenu() {
  const { setSelected, categorias, setCategorias, setSubCategorias } =
    useAppContext();
  const { id: categoriaId } = useParams();
  const token = localStorage.getItem('token');
  const IdFornecedor = localStorage.getItem('supplierId');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    if (categoriaId) {
      api
        .get(`fobbi-client/categoria/${IdFornecedor}/fornecedor`, config)
        .then((response) => {
          const categ = response.data;
          const categSelecionada = categ.find((item) => {
            return item.id === categoriaId;
          });
          setSubCategorias(categSelecionada);
          setCategorias(response.data);
          setSelected(categSelecionada.descricao);
        })
        .catch(() => {
          console.log('ERROR');
        });
    }
  }, [categoriaId]);

  return (
    <div className="ContentSidebar">
      <ProSidebar>
        <Menu iconShape="square" className="ProSideBar">
          {categorias.map((item) => {
            return (
              <MenuItemSideBarMenu
                id={item.id}
                key={item.descricao}
                name={item.descricao}
              />
            );
          })}
        </Menu>
      </ProSidebar>
      <div className="DivCards">
        <CardSellingProductsForModal />
      </div>
    </div>
  );
}
