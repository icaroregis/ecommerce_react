import React from 'react';
import ContainerMaster from '../../components/ContainerMaster/ContainerMaster';
import Logo from '../../components/Logo/Logo';
import LogoSucessRegister from '../../assets/images/LogoSucessRegister.png';
import FobbiLogoBlack from '../../assets/images/FobbiLogoBlack.png';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function SuccessRegister() {
  const history = useHistory();

  function GoToNextPage() {
    history.push('/');
  }

  return (
    <ContainerMaster backgroundColor="var(--background_light)" height="100vh">
      <div className="ContainerSucessRegister">
        <div>
          <div className="ContainerLogoSucessRegister">
            <Logo
              url={LogoSucessRegister}
              alt="LogoSucessRegister"
              width="110px"
            />
          </div>

          <div className="HeaderSucessRegister">
            <Header type="h1" text="ESTÁ QUASE LÁ!" />
          </div>
          <div className="DivPragrafo">
            <div className="Paragrafo">Agora você só precisa</div>
            <div className="Paragrafo">acessar seu e-mail e clicar em</div>
            <div className="Paragrafo">"CONFIRMAR CADASTRO"</div>
          </div>

          <div className="DivButtonSucessRegister">
            <Button
              buttonName="OK"
              background="var(--grey8)"
              width="260px"
              onClick={GoToNextPage}
            />
          </div>

          <div className="ContainerLogoSucessRegister">
            <Logo url={FobbiLogoBlack} alt="LogoSucessRegister" width="110px" />
          </div>
        </div>
      </div>
    </ContainerMaster>
  );
}
