import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import ReusableCard from '../../components/ReusableCard/ReusableCard';
import ReusableHeader from '../../components/ReusableHeader/ReusableHeader';
import Ciser from '../../assets/images/Ciser.png';
import Screw from '../../assets/images/screwTwo.png';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import ImageClose from '../../assets/images/imageClose.png';
import Message from '../../assets/images/Message.png';
import Box from '@material-ui/core/Box';
import FobbiLogoBlack from '../../assets/images/FobbiLogoBlack.png';
import Modal from '@material-ui/core/Modal';
import './style.css';

export default function ShoppingCartIndividual() {
  const [boxOne, setBoxOne] = useState(false);
  const [boxTwo, setBoxTwo] = useState(false);
  const [boxThree, setBoxThree] = useState(false);
  const [empresa, setEmpresa] = useState('Telas Arteja');
  const [open, setOpen] = useState(false);

  const rows = [
    {
      productDescription:
        'PARAFUSO SEXTAVADO ROSCA UNC 3/16 X 1 ZINCADO BRANCO EMB 500 PÇS',

      unitaryValue: 58.6,
      total: 118.7,
    },
    {
      productDescription:
        'PARAFUSO SEXTAVADO ROSCA UNC 3/16 X 1 ZINCADO BRANCO EMB 500 PÇS',

      unitaryValue: 58.6,
      total: 118.7,
    },
    {
      productDescription:
        'PARAFUSO SEXTAVADO ROSCA UNC 3/16 X 1 ZINCADO BRANCO EMB 500 PÇS',

      unitaryValue: 58.6,
      total: 118.7,
    },
    {
      productDescription:
        'PARAFUSO SEXTAVADO ROSCA UNC 3/16 X 1 ZINCADO BRANCO EMB 500 PÇS',

      unitaryValue: 58.6,
      total: 118.7,
    },
  ];

  function openModalShoppingCart(e) {
    e.preventDefault();
    setOpen(true);
  }

  function closeModalShoppingCart(e) {
    e.preventDefault();
    setOpen(false);
  }

  function indirectCommunication() {
    console.log('teste');
  }

  return (
    <div className="ContainerShoppingCartIndividual">
      <ReusableHeader />
      <section className="SectionCardProvider">
        <ReusableCard src={Ciser} onClick={indirectCommunication} />
      </section>

      <section className="InformationsCardProvider">
        <div className="ContainerInformationsCardProvider">
          <div className="DivsPresentations">
            <div className="DivStepOne">
              <h1 className="StepOne">
                PASSO 1 - CONFIRA OS PRODUTOS SELECIONADOS
              </h1>
            </div>

            <div className="DivStepTwo">
              <p className="TextStepTwo">PEDIDO MÍNIMO: R$ 600,00</p>
              <p className="TextStepTwoo">
                Faltam R$ 15,80 para fechar seu pedido
              </p>
            </div>
          </div>

          {rows.map((item) => {
            return (
              <div className="DivDescriptionProducts">
                <div className="ScrewDescription">
                  <img
                    className="ScrewPicture"
                    src={Screw}
                    alt="Imagem do produto"
                  />
                  <p className="DescriptionScrewPicture">
                    {item.productDescription}
                  </p>
                </div>

                <div className="ProductPrice">
                  <div className="DivTotalOfProducts">
                    <div className="DivTotalOfProductsOne">
                      R$ {item.unitaryValue}
                    </div>
                    <div className="DivTotalOfProductsTwo">
                      <div className="DecIncSome">
                        <div>-</div>
                        <div className="DigitNumber">2</div>
                        <div>+</div>
                      </div>
                    </div>
                    <div className="DivTotalOfProductsThree"></div>
                  </div>

                  <div>R$ {item.total}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="ContainerLinkDirect">
          <Link className="DivLinkDirect">
            <div className="DivBsArrowLeft">
              <BsArrowLeft className="BsArrowLeft" />
            </div>
            <div className="TextBsArrowLeft">
              SELECIONAR MAIS ITENS DO CATÁLOGO CISER
            </div>
          </Link>

          <div className="TextPriceAndTotal">
            <div className="Total">
              <p className="TextTotal">TOTAL</p>
              <p>R$ 235,11</p>
            </div>
            <div className="FreeShipping">FRETE GRÁTIS</div>
          </div>
        </div>

        <div className="DivTributesAndTaxes">
          <p className="LetterSpacing">Impostos já inclusos no valor total</p>
          <p className="LetterSpacing">PIS, COFINS, ICMS, IPI E ICMS - ST</p>
        </div>

        <div className="ContainerInformationsCardProvider">
          <div className="DivsPresentations">
            <div className="DivStepOne">
              <h1 className="StepOnee">
                PASSO 2 - SELECIONE A FORMA DE PAGAMENTO
              </h1>
            </div>
          </div>

          <div className="DivInputcheckbox">
            <div className="DivTicketOnSight">
              <input
                type="checkbox"
                className="InputTicketOnSight"
                checked={boxOne}
                onChange={({ target }) => setBoxOne(target.checked)}
              />
              <p className="TicketOnSight">BOLETO À VISTA</p>
              <p>1 dia útil após a emissão</p>
              <p>(3% de desconto)</p>
            </div>

            <div className="DivTicketOnSight">
              <input
                type="checkbox"
                className="InputTicketOnSight"
                checked={boxTwo}
                onChange={({ target }) => setBoxTwo(target.checked)}
              />
              <p className="TicketOnSight">BOLETO À PRAZO (1X)</p>
              <p>28 dias após a emissão</p>
            </div>

            <div className="DivTicketOnSight">
              <input
                type="checkbox"
                className="InputTicketOnSight"
                checked={boxThree}
                onChange={({ target }) => setBoxThree(target.checked)}
              />
              <p className="TicketOnSight">BOLETO À PRAZO (2X)</p>
              <p>28 e 35 dias</p>
              <p>(acima de R$ 1000)</p>
            </div>
          </div>
        </div>

        <div className="TestDiv" />

        <div className="ContainerInformationsCardProvider">
          <div className="DivsPresentations">
            <div className="DivStepOne">
              <h1 className="StepOnee">
                PASSO 3 - CONFIRME SEUS DADOS PARA ENTREGA
              </h1>
            </div>
          </div>

          <form className="CompanyInformation">
            <div className="ContainerInputs">
              <div className="IndividualInputField">
                <label htmlFor="empresa" className="TitleLabelInput">
                  EMPRESA
                </label>
                <input
                  className="InputOrganization"
                  id="empresa"
                  type="text"
                  value={empresa}
                  onChange={({ target }) => setEmpresa(target.value)}
                />
              </div>

              <div className="IndividualInputField">
                <label htmlFor="" className="TitleLabelInput">
                  ENDEREÇO
                </label>
                <input type="text" className="InputAddress" />
              </div>

              <div className="IndividualInputField">
                <label htmlFor="" className="TitleLabelInput">
                  NÚMERO
                </label>
                <input type="text" className="InputNumber" />
              </div>

              <div className="IndividualInputField">
                <label htmlFor="" className="TitleLabelInput">
                  COMPLEMENTO
                </label>
                <input type="text" className="InputOrganization" />
              </div>
            </div>

            <div className="ContainerInputs">
              <div className="IndividualInputField">
                <label htmlFor="empresa" className="TitleLabelInput">
                  CNPJ
                </label>
                <input className="InputOrganization" id="empresa" type="text" />
              </div>

              <div className="IndividualInputField">
                <label htmlFor="" className="TitleLabelInput">
                  BAIRRO
                </label>
                <input type="text" className="InputAddress" />
              </div>

              <div className="IndividualInputField">
                <label htmlFor="" className="TitleLabelInput">
                  CEP
                </label>
                <input type="text" className="InputNumber" />
              </div>

              <div className="ContainerCityAndUF">
                <div className="IndividualInputField">
                  <label htmlFor="" className="TitleLabelInput">
                    CIDADE
                  </label>
                  <input type="text" className="InputCity" />
                </div>

                <div className="IndividualInputField">
                  <label htmlFor="" className="TitleLabelInput">
                    UF
                  </label>
                  <input type="text" className="InputUF" />
                </div>
              </div>
            </div>

            <div className="DivButtonCompanyInformation">
              <button
                className="ButtonCompanyInformation"
                onClick={(e) => openModalShoppingCart(e)}
              >
                AVANÇAR
              </button>
            </div>
          </form>
        </div>
      </section>

      <div>
        <Modal
          className="ModalShoppingCart"
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className="BoxModalShoppingCart"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 2,
            }}
          >
            <div
              className="CloseModalShoppingCart"
              onClick={(e) => closeModalShoppingCart(e)}
            >
              <img
                className="ImageCloseModalShoppingCart"
                src={ImageClose}
                alt="Imagem para fechar modal"
              />
            </div>
            <div className="ImageCloseModalMasterShoppingCart">
              <div className="CicleShoppingCart">
                <img className="CircleEmail" src={Message} alt="Logo email" />
              </div>
            </div>
            <div className="ItsAlmostThere">ESTÁ QUASE LÁ!</div>
            <p className="TextInformationOrder">
              PARA FINALIZAR SUA COMPRA,
              <br />
              ACESSE SEU E-MAIL, CONFIRA O<br />
              DOCUMENTO DETALHADO DO <br />
              PEDIDO E CLIQUE NO BOTÃO
              <br />
              "CONFIRMAR PEDIDO"
            </p>

            <p className="TextOrderButton">número do pedido</p>
            <div className="OrderButton">P000036</div>

            <p className="TextOrderButton">documento enviado para</p>
            <div className="OrderButton">******@gmail.com</div>

            <p className="E-mail">
              não recebeu o e-mail?{' '}
              <strong className="E-mailStrong">REENVIAR</strong>
            </p>

            <p className="DivTextEmail">
              em caso de não recebimento deste e-mail,
              <br />
              entre em contato conosco pelo:
            </p>

            <p className="EmailBusiness">suporte@fobbi.com.br</p>

            <div className="DivImageFobbiLogoBlack">
              <img
                className="ImageFobbiLogoBlack"
                src={FobbiLogoBlack}
                alt="Logo Fobbi"
              />
            </div>
          </Box>
        </Modal>
      </div>

      <section className="SectionFooterShoppingCartIndividual">
        <Footer />
      </section>
    </div>
  );
}
