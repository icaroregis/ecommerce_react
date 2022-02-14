import React from 'react';
import Logo from '../../../components/Logo/Logo';
import LogoFobbi from '../../../assets/images/logo-m-branco.png';
import Header from '../../../components/Header/Header';
import ContainerMaster from '../../../components/ContainerMaster/ContainerMaster';
import RoundedSidesButton from '../../../components/RoundedSidesButton/RoundedSidesButton';
import './style.css';

export default function ForgotPasswordTwo() {
  return (
    <ContainerMaster backgroundColor="var(--background_light)" height="100vh">
      <div className="ContainerForgotPasswordAndLogin">
        <div>
          <div className="DivForgotPasswordAndLogin">
            <Logo url={LogoFobbi} alt="Fobbi" width="55px" />
          </div>

          <div className="HeaderForgotPasswordAndLogin">
            <Header
              type="h1"
              text="PRONTO! UM E-MAIL COM INSTRUÇÕES PARA CADASTRO DE UMA NOVA SENHA FOI ENVIADO PARA:"
              fontSize="16px"
            />
          </div>

          <div className="ButtonForgotPasswordAndLogin">
            <RoundedSidesButton buttonName="**********__@gmail.com" />
          </div>

          <div className="HeaderForgotPasswordAndLogin">
            <Header
              type="h1"
              text="NÃO TEM MAIS ACESSO OU NÃO RECORDA DESSE E-MAIL?"
              fontSize="16px"
            />
          </div>
          <div className="DivEmail">
            <p className="textEmail">entre em contato pelo e-mail:</p>
            <p className="textEmailTwo">faleconosco@fobbi.com.br</p>
          </div>
        </div>
      </div>
    </ContainerMaster>
  );
}
