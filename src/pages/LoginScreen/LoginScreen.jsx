import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import LogoFobbi from '../../assets/images/logo-m-branco.png';
import Ativo6 from '../../assets/images/Ativo-6.1.png';
import Ativo5 from '../../assets/images/Ativo-5.1.png';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import ContainerMaster from '../../components/ContainerMaster/ContainerMaster';
import Input from '../../components/Input/Input';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import api from '../../services/api';
import './style.css';

export default function LoginScreen() {
  const [CNPJ, setCNPJ] = useState('');
  const history = useHistory();
  const [password, setPassword] = useState('');

  function userAuthentication(e) {
    e.preventDefault();
    if (!CNPJ || !password) {
      toast.error('Os campos email e senha são obrigatórios');
    } else {
      api
        .post('fobbi-client/auth', {
          cnpj: CNPJ,
          senha: password,
        })
        .then((r) => {
          if (r.status === 200) {
            localStorage.setItem('token', r.data.token);
            localStorage.setItem('CNPJ', CNPJ);
            history.push('/buscarpormarca');
          }
        })
        .catch((err) => {
          if (!err.response) {
            toast.error(
              'Oops, sistema fora do ar, tente novamente mais tarde.'
            );
            return;
          }
          if (err.response.status === 400) {
            toast.error('Oops, e-mail ou senha são inválidos');
          }
          if (err.response.status === 403) {
            toast.error('Oops, url da requisição possivelmente está errada');
          }
        });
    }
  }

  return (
    <ContainerMaster backgroundColor="var(--background_light)">
      <div className="LogoLoginScreen">
        <div className="ImageOneLoginScreen">
          <img className="Ativo6" src={Ativo6} alt="Imagem" />
        </div>

        <ToastContainer />

        <div className="ContainerLoginScreen">
          <div>
            <div className="Div-logo">
              <Logo url={LogoFobbi} alt="Fobbi" width="55px" />
            </div>

            <div className="Component-header">
              <Header type="h1" text="OLÁ! FAÇA  SEU  LOGIN" fontSize="20px" />
            </div>

            <form className="DivFormMaster">
              <div>
                <div className="DivForm">
                  <Input
                    required
                    label="LOGIN (CNPJ)"
                    value={CNPJ}
                    setValue={setCNPJ}
                    type="text"
                    placeholder="digite apenas números"
                  />
                </div>
                <div className="DivFormPassword">
                  <Input
                    required
                    label="SENHA"
                    value={password}
                    setValue={setPassword}
                    type="password"
                    id="password"
                    placeholder="digite sua senha"
                  />
                </div>
                <div className="buttonInput">
                  <Button
                    buttonName="entrar"
                    background="var(--green)"
                    width="300px"
                    onClick={(e) => userAuthentication(e)}
                  />
                </div>
              </div>
            </form>

            <div className="ForgotPassword">
              <div>
                <span className="TextOne">Esqueceu a senha?</span>
                <Link className="TextTwo" to="/senha">
                  {' '}
                  clique aqui.
                </Link>
              </div>
            </div>

            <div className="ForgotPassword">
              <div className="TextOne">Não tem conta na Fobbi?</div>
              <Link className="TextTwo" to="cliente/cadastro">
                cadastre-se aqui.
              </Link>
            </div>
          </div>
        </div>
        <div className="ImageTwoLoginScreen">
          <img className="Ativo5" src={Ativo5} alt="Imagem" />
        </div>
      </div>
    </ContainerMaster>
  );
}
