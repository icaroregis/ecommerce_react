import React from 'react';
import Logo from '../../../components/Logo/Logo';
import LogoForgotPasswordFour from '../../../assets/images/LogoForgotPasswordFour.png';
import FobbiLogoBlack from '../../../assets/images/FobbiLogoBlack.png';
import Header from '../../../components/Header/Header';
import ContainerMaster from '../../../components/ContainerMaster/ContainerMaster';
import Button from '../../../components/Button/Button';
import { useHistory } from 'react-router';
import './style.css';

export default function ForgotPasswordFour() {
  const history = useHistory();

  function goToHomePage() {
    history.push('/');
  }

  return (
    <ContainerMaster backgroundColor="var(--background_light)" height="100vh">
      <div className="ContainerForgotPasswordFour">
        <div>
          <div className="ContainerLogoForgotPasswordFour">
            <Logo
              url={LogoForgotPasswordFour}
              alt="LogoSucessRegister"
              width="80px"
            />
          </div>

          <div className="HeaderForgotPasswordFour">
            <Header type="h1" text="SEU LOGIN E SENHA FORAM " />
            <Header type="h1" text="CADASTRADOS COM SUCESSO!" />
          </div>

          <div className="HeaderForgotPasswordFour">
            <p className="TextHeaderForgotPasswordFourOne">
              Agora você já pode voltar{' '}
            </p>
            <p className="TextHeaderForgotPasswordFourTwo">
              as suas compras :)
            </p>
          </div>

          <div className="ButtonForgotPasswordFour">
            <Button
              buttonName="OK"
              background="var(--grey8)"
              width="260px"
              onClick={goToHomePage}
            />
          </div>

          <div className="ContainerLogoForgotPasswordFour">
            <Logo url={FobbiLogoBlack} alt="LogoSucessRegister" width="110px" />
          </div>
        </div>
      </div>
    </ContainerMaster>
  );
}
