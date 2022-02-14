import React from 'react';
import { useAppContext } from '../../../context/AppContextProvider';
import ScrewTwo from '../../../assets/images/screwTwo.png';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import { BsXLg } from 'react-icons/bs';
import './style.css';

export default function CustumizedModalInformation() {
  const { openModalInformation, setOpenModalInfomation } = useAppContext();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  function CloseModalInformation() {
    setOpenModalInfomation(false);
  }

  return (
    <>
      <Modal
        hideBackdrop
        open={openModalInformation}
        onClose={CloseModalInformation}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <div>
            <div>
              <div className="IconCloseModal">
                <div
                  className="DivIconCloseModal"
                  onClick={CloseModalInformation}
                >
                  <BsXLg className="IconBsxlg" />
                </div>
              </div>

              <div className="DivInformationsModal">
                <div className="DivImageModal">
                  <img
                    className="ImageModal"
                    src={ScrewTwo}
                    alt="Imagem do produto"
                  />
                </div>

                <p className="TextInformationModal">
                  Bitola: 3/16
                  <br />
                  Comprimento: 1
                  <br />
                  Tamanho chave: CHAVE 5/16
                  <br />
                  Passo rosca: 24 F.P.P.
                  <br />
                  Acabamento: ZINCADO BRANCO
                  <br />
                  Embalagem: CAIXA DE PAPELÃO
                  <br />
                  Sistema da rosca: UNC
                  <br />
                  Forma da rosca: INTEIRA
                  <br />
                  Modelo: PARAFUSO
                  <br />
                  Tipo de cabeça: SEXTAVADA
                  <br />
                  Material: AÇO BAIXO CARBONO
                  <br />
                  Norma mecânica: SAE J429
                  <br />
                  Classe resistência: GRAU 1
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
