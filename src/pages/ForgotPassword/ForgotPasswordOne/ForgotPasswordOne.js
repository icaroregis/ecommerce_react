import React, { useState } from 'react';
import Logo from '../../../components/Logo/Logo';
import LogoFobbi from '../../../assets/images/logo-m-branco.png';
import Header from '../../../components/Header/Header';
import ContainerMaster from '../../../components/ContainerMaster/ContainerMaster';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router';
import './style.css';

export default function ForgotPasswordOne() {
  const history = useHistory();
  const [CNPJ, setCNPJ] = useState('');

  function handleNextPage(e) {
    e.preventDefault();
    !CNPJ
      ? toast.error('O campo CNPJ é obrigatório.')
      : history.push('/novasenha');
  }

  return (
    <>
      <ToastContainer />
      <ContainerMaster backgroundColor="var(--background_light)" height="100vh">
        <div className="ContainerForgotPassword">
          <div>
            <div className="DivForgotPassword">
              <Logo url={LogoFobbi} alt="Fobbi" width="55px" />
            </div>

            <div className="HeaderForgotPassword">
              <Header
                type="h1"
                text="EM CASOS DE ESQUECIMENTO DE SENHA É NECESSÁRIO CADASTRAR UMA NOVA SENHA. INFORME OS SEGUINTES DADOS:"
                fontSize="16px"
              />
            </div>

            <form className="DivFormForgotPasswordMaster">
              <div>
                <div className="InputForgotPassword">
                  <Input
                    label="CNPJ"
                    value={CNPJ}
                    setValue={setCNPJ}
                    type="text"
                    placeholder="digite apenas números"
                  />
                </div>

                <div className="buttonInputForgotPassword">
                  <Button
                    buttonName="CONFIRMAR"
                    onClick={(e) => handleNextPage(e)}
                    background="var(--green)"
                    width="300px"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </ContainerMaster>
    </>
  );
}
