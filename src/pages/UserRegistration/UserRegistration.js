import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import LogoFobbi from '../../assets/images/logo-m-branco.png';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import ContainerMaster from '../../components/ContainerMaster/ContainerMaster';
import './style.css';

export default function UserRegistration() {
  const history = useHistory();
  const [alternative, setAlternative] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [buyersName, setBuyersName] = useState('');
  const [email, setEmail] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [storeSize, setStoreSize] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function registrationCompleted() {
    history.push('/cliente/cadastrofinalizado');
  }

  return (
    <ContainerMaster backgroundColor="var(--background_light)" height="100%">
      <div className="ContainerUserRegistration">
        <div className="DivlogoRegistration">
          <Logo url={LogoFobbi} alt="Fobbi" width="55px" />
        </div>

        <div className="ComponentHeaderRegistration">
          <Header type="h1" text="POR FAVOR, INFORME OS " fontSize="20px" />
          <div className="Spacing" />
          <Header type="h1" text="SEGUINTES DADOS:" fontSize="20px" />
        </div>

        <div className="SpacingTwo" />

        <form className="DivFormMasterRegistration">
          <div>
            <Input
              label="CNPJ"
              value={CNPJ}
              setValue={setCNPJ}
              type="text"
              placeholder="digite apenas números"
            />

            <div className="SpacingInput" />

            <Input
              label="NOME DO COMPRADOR/ RESPONSÁVEL"
              value={buyersName}
              setValue={setBuyersName}
              type="text"
              placeholder="digite o nome do comprador"
            />

            <div className="SpacingInput" />

            <Input
              label="E-MAIL"
              value={email}
              setValue={setEmail}
              type="email"
              placeholder="digite seu melhor e-mail"
            />

            <div className="SpacingInput" />

            <Input
              label="CELULAR PARA CONTATO"
              value={cellPhone}
              setValue={setCellPhone}
              type="number"
              placeholder="digite apenas números"
            />

            <div className="SpacingInput" />

            <p className="TitleChecked">ESSE NÚMERO TAMBÉM É WHATSAPP?</p>
            <div className="DivChecked">
              <div className="DivStyleChecked">
                <input
                  id="optionyes"
                  className="InputRadio"
                  onChange={({ target }) => setAlternative(target.value)}
                  checked={alternative === 'sim'}
                  type="radio"
                  value="sim"
                />
                <label className="LabelYes" id="optionyes">
                  SIM
                </label>
              </div>

              <div className="DivStyleChecked">
                <input
                  id="optionno"
                  className="InputRadio"
                  onChange={({ target }) => setAlternative(target.value)}
                  checked={alternative === 'não'}
                  type="radio"
                  value="não"
                />
                <label className="LabelYes" id="optionno">
                  NÃO
                </label>
              </div>
            </div>

            <div className="SpacingInput" />

            <Input
              label="QUAL O TAMANHO DA SUA LOJA (m²)?"
              value={storeSize}
              setValue={setStoreSize}
              type="email"
              placeholder="digite apenas números"
            />

            <div className="SpacingInput" />

            <Input
              label="QUANTOS FUNCIONÁRIOS VOCÊ TEM?"
              value={numberOfEmployees}
              setValue={setNumberOfEmployees}
              type="email"
              placeholder="digite apenas números"
            />

            <div className="SpacingInput" />

            <Input
              label="DIGITE UMA SENHA"
              value={password}
              setValue={setPassword}
              type="email"
              placeholder="digite sua senha"
            />

            <div className="SpacingInput" />

            <Input
              label="CONFIRME SUA SENHA"
              value={confirmPassword}
              setValue={setConfirmPassword}
              type="email"
              placeholder="confirme sua senha"
            />

            <div className="SpacingButton" />

            <Button
              buttonName="CADASTRAR"
              background="var(--green)"
              width="300px"
              onClick={registrationCompleted}
            />

            <div className="SpacingButtonTwo" />
          </div>
        </form>
      </div>
    </ContainerMaster>
  );
}
