import React, { useState, useEffect } from 'react';
import ProductQuantificationSelectors from '../ProductQuantificationSelectors/ProductQuantificationSelectors';
import CustomizedModalInformation from '../../../components/BrandsAndProducts/CustumizedModalInfomation/CustumizedModalInformation';
import CustumizedModalCar from '../CustumizedModalCar/CustumizedModalCar';
import { useAppContext } from '../../../context/AppContextProvider';
import ImageClose from '../../../assets/images/imageClose.png';
import ScrewTwo from '../../../assets/images/screwTwo.png';
import Ciser from '../../../assets/images/Ciser.png';
import Modal from '@material-ui/core/Modal';
import { BsInfoLg } from 'react-icons/bs';
import Box from '@material-ui/core/Box';
import api from '../../../services/api';
import './style.css';

export default function CustomizedModal() {
  const [carrinho, setCarrinho] = useState({});
  const [total, setTotal] = useState(0);
  const [produtos, setProdutos] = useState([]);
  const handleClose = () => setOpenModal(false);
  const { openModal, setOpenModal, setOpenModalInfomation, setOpenModalCar } =
    useAppContext();
  const CNPJ = localStorage.getItem('CNPJ');
  const token = localStorage.getItem('token');
  const IdFornecedor = localStorage.getItem('supplierId');
  const idSubCategoriaSelecionada = localStorage.getItem(
    'idSubCategoriaSelecionada'
  );
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const convertToBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const formattedObject = {
    clienteCnpj: CNPJ,
    forncedorId: IdFornecedor,
    produtos: produtos,
  };

  console.log(formattedObject, 'teste de objeto');

  function OpenModalCar() {
    setOpenModalCar(true);

    api
      .post(() => {})
      .then((response) => {
        console.log(response.data);
      })
      .catch((response) => {
        console.log(response.message);
      });
  }

  function OpenModalInformation() {
    setOpenModalInfomation(true);
  }

  function controleEstoque(type, operation, price) {
    if (operation === 'inc') {
      if (!Object.keys(carrinho).some((item) => item === type)) {
        setCarrinho({ ...carrinho, [type]: 1 });
        setTotal(total + Number(price));
        return;
      }
      setCarrinho({ ...carrinho, [type]: carrinho[type] + 1 });
      setTotal(total + Number(price));
    }

    if (operation === 'dec') {
      if (!Object.keys(carrinho).some((item) => item === type)) {
        return;
      }
      const newValue = carrinho[type] - 1;

      if (newValue < 0) {
        setCarrinho({ ...carrinho, [type]: 0 });
        return;
      }

      setCarrinho({ ...carrinho, [type]: newValue });
      setTotal(total - Number(price));
    }
  }

  useEffect(() => {
    async function getIdSubcategoria() {
      await api
        .get(
          `fobbi-client/subCategoria/${idSubCategoriaSelecionada}/subcategoria/${CNPJ}/cliente`,
          config
        )
        .then((response) => setProdutos(response.data))
        .catch(() => {
          console.log('ERROR');
        });
    }
    getIdSubcategoria();
  }, [idSubCategoriaSelecionada]);

  return (
    <div>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="BoxModal"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="ContainerModalMaster">
            <div className="ContainerModalImages">
              <div className="ModalImages">
                <div>
                  <img
                    className="CiserModal"
                    src={Ciser}
                    alt="Logomarca do produto"
                  />
                </div>
                <div>
                  <img
                    className="ScrewModal"
                    src={ScrewTwo}
                    alt="Imagem do produto"
                  />
                </div>
              </div>

              <div className="TitleModalMaster">
                <h1 className="TitleModal">
                  PARAFUSO SEXTAVADO ROSCA INTEIRA UNC ZINCADO BRANCO
                </h1>
                <p>
                  Utilizado em máquinas e equipamentos industriais, móveis de
                  aço e outras aplicações diversas.
                </p>
              </div>
            </div>

            <div className="ImageCloseModalMaster" onClick={handleClose}>
              <img
                className="ImageCloseModal"
                src={ImageClose}
                alt="Imagem para fechar modal"
              />
            </div>
          </div>

          <div className="ContainerTable">
            <div className="HeadRow">
              <div className="HeadDataOne">PREÇO EMB</div>
              <div className="HeadDataTwo">DISPONÍVEL</div>
              <div className="HeadDataFour">QUANTIDADE</div>
              <div className="HeadDataSpecialid">TOTAL</div>
            </div>

            {produtos
              ? produtos.map((row, key) => {
                  return (
                    <div className="BodyRow" key={key}>
                      <div className="BodyDataOne">{'--'}</div>
                      <div className="BodyDataTwo">{row.titulo}</div>
                      <div className="BodyDataThree">{'--'}</div>
                      <div className="BodyDataFour">{'--'}</div>
                      <div className="BodyDataFive">{row.preco}</div>
                      <div className="BodyDataSix">{'--'}</div>
                      <ProductQuantificationSelectors
                        type={row.titulo}
                        price={row.preco}
                        action={controleEstoque}
                        total={
                          carrinho[row.titulo]
                            ? convertToBRL.format(
                                carrinho[row.titulo] * row.preco
                              )
                            : 'R$ 0,00'
                        }
                      />
                      <div
                        className="BodyDataEleven"
                        onClick={() => OpenModalInformation(row.titulo)}
                      >
                        <BsInfoLg />
                      </div>
                    </div>
                  );
                })
              : ''}
          </div>

          <div className="MasterContainerAddCar">
            <p className="TaxesAndDuties">
              *Impostos já incluídos (PIS, COFINS, ICMS, IPI E ISCM-ST)
            </p>
            <button className="ButtonAddCar" onClick={OpenModalCar}>
              <div className="DivAddCar">
                <p className="TitleAddCar">
                  ADICIONAR
                  <br />
                  AO CARRINHO
                </p>
              </div>

              <div className="DivDinner">
                <h1 className="TitleDinner">
                  {total ? convertToBRL.format(Number(total)) : `R$ ${0}`}
                </h1>
              </div>
            </button>
          </div>

          <CustomizedModalInformation />
          <CustumizedModalCar />
        </Box>
      </Modal>
    </div>
  );
}
