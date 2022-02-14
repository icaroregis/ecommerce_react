import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function useAppContext() {
  return useContext(Context);
}

export default function AppContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalInformation, setOpenModalInfomation] = useState(false);
  const [openModalCar, setOpenModalCar] = useState(false);
  const [tableGrandTotal, setTableGrandTotal] = useState(0);
  const [activeColor, setActiveColor] = useState(true);
  const [openCard, setOpenCard] = useState(true);
  const [subcategorias, setSubCategorias] = useState([]);
  const [selected, setSelected] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [idSubCategoria, setIdSubCategoria] = useState('');
  const [fetchProduct, setFetchProduct] = useState([]);
  const [productsStoredState, setProductsStoredState] = useState([]);
  const [brandData, setBrandData] = useState({});

  return (
    <Context.Provider
      value={{
        openModal,
        setOpenModal,
        openModalInformation,
        setOpenModalInfomation,
        openModalCar,
        setOpenModalCar,
        tableGrandTotal,
        setTableGrandTotal,
        activeColor,
        setActiveColor,
        openCard,
        setOpenCard,
        subcategorias,
        setSubCategorias,
        selected,
        setSelected,
        categorias,
        setCategorias,
        idSubCategoria,
        setIdSubCategoria,
        fetchProduct,
        setFetchProduct,
        productsStoredState,
        setProductsStoredState,
        brandData,
        setBrandData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
