import React, { useState } from 'react';
import Logo from '../../../components/Logo/Logo';
import LogoFobbi from '../../../assets/images/logo-m-branco.png';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { useHistory } from 'react-router';
import './style.css';

export default function ForgotPasswordThree() {
  const history = useHistory();
  const [CNPJ, setCNPJ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function goToPageForgotPaswordFour() {
    history.push('/senhalogin/cadastrofinalizado');
  }

  return (
    <div className="ForgotPasswordThreeMaster">
      <div className="ContainerForgotPasswordThree">
        <div>
          <div className="DivForgotPasswordThree">
            <Logo url={LogoFobbi} alt="Fobbi" width="55px" />
          </div>

          <div className="HeaderForgotPasswordThree">
            <Header type="h1" text="RECUPERAR LOGIN E SENHA" fontSize="18px" />
            <Header
              type="h1"
              text="POR FAVOR, INFORME SEUS DADOS:"
              fontSize="18px"
            />
          </div>

          <form className="FormPasswordThree">
            <div>
              <div className="InputForgotPasswordThree">
                <Input
                  required
                  label="CNPJ*"
                  value={CNPJ}
                  setValue={setCNPJ}
                  type="text"
                  placeholder="digite apenas números"
                />
              </div>

              <div className="InputForgotPasswordThree">
                <Input
                  required
                  label="E-MAIL"
                  value={email}
                  setValue={setEmail}
                  type="text"
                  placeholder="digite apenas números"
                />
              </div>

              <div className="InputForgotPasswordThree">
                <Input
                  required
                  label="DIGITE SUA NOVA SENHA"
                  value={password}
                  setValue={setPassword}
                  type="text"
                  placeholder="digite apenas números"
                />
              </div>

              <div className="InputForgotPasswordThree">
                <Input
                  required
                  label="CONFIRME SUA NOVA SENHA"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  type="text"
                  placeholder="digite apenas números"
                />
              </div>

              <div className="ButtonForgotPasswordThree">
                <Button
                  buttonName="CONFIRMAR"
                  background="var(--green)"
                  width="300px"
                  onClick={goToPageForgotPaswordFour}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
