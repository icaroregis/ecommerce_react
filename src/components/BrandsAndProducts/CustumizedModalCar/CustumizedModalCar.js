import React, { useContext } from 'react';
import CheckCircle from '../../../assets/images/check-circle.png';
import { BiRightArrowAlt } from 'react-icons/bi';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import FobbiLogoBlack from '../../../assets/images/FobbiLogoBlack.png';
import { useAppContext } from '../../../context/AppContextProvider';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function CustumizedModalCar() {
  const { openModalCar, setOpenModalCar } = useAppContext();
  const history = useHistory();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  function CloseModalCar() {
    setOpenModalCar(false);
  }

  function goForShoppingCart() {
    history.push('/carrinho-compras');
  }

  return (
    <>
      <Modal
        hideBackdrop
        open={openModalCar}
        onClose={CloseModalCar}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }} className="BoxModalCar">
          <div className="DivCheckCircle">
            <img className="CheckCircle" src={CheckCircle} alt="Circle" />
          </div>

          <div className="DivTitleCarAdd">
            <p className="TitleCarAdd">
              SEUS PRODUTOS FORAM
              <br /> ADICIONADOS AO CARRINHO
            </p>
          </div>

          <div className="DivMasterGoCar">
            <div className="DivGoCar" onClick={goForShoppingCart}>
              <p>IR AO CARRINHO</p>
            </div>

            <div>
              <BiRightArrowAlt className="ArrowBackCar" />
            </div>
          </div>

          <div className="DivButtonKeepBuying">
            <button className="ButtonKeepBuying" onClick={CloseModalCar}>
              CONTINUAR COMPRANDO
            </button>
          </div>

          <div className="DivLogoKeepBuying">
            <img
              className="LogoKeepBuying"
              src={FobbiLogoBlack}
              alt="Logo Fobbi"
            />
          </div>
        </Box>
      </Modal>
    </>
  );
}
