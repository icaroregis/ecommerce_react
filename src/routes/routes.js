import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen/LoginScreen';
import ForgotPasswordOne from '../pages/ForgotPassword/ForgotPasswordOne/ForgotPasswordOne';
import ForgotPasswordTwo from '../pages/ForgotPassword/ForgotPasswordTwo/ForgotPasswordTwo';
import ForgotPasswordThree from '../pages/ForgotPassword/ForgotPasswordThree/ForgotPasswordThree';
import ForgotPasswordFour from '../pages/ForgotPassword/ForgotPaswordFour/ForgotPaswordFour';
import UserRegistration from '../pages/UserRegistration/UserRegistration';
import SuccessRegister from '../pages/SuccessRegister/SuccessRegister';
import Home from '../pages/Home/Home';
import SearchByProduct from '../pages/SearchByProducts/SearchByProduct/SearchByProduct';
import SearchByBrand from '../pages/SearchByBrands/SearchByBrand/SearchByBrand';
import ProductSearchResult from '../pages/SearchByProducts/ProductSearchResult/ProductSearchResult';
import SearchBrandResult from '../pages/SearchByBrands/SearchBrandResult/SearchBrandResult';
import SearchSubBrandResult from '../pages/SearchByBrands/SearchSubBrandResult/SearchSubBrandResult';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import ShoppingCartIndividual from '../pages/ShoppingCartIndividual/ShoppingCartIndividual';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LoginScreen} />
      <Route path="/cliente/cadastro" component={UserRegistration} />
      <Route path="/cliente/cadastrofinalizado" component={SuccessRegister} />

      <Route path="/senha" component={ForgotPasswordOne} />
      <Route path="/novasenha" component={ForgotPasswordTwo} />
      <Route path="/senhaelogin" component={ForgotPasswordThree} />
      <Route
        path="/senhalogin/cadastrofinalizado"
        component={ForgotPasswordFour}
      />

      <Route path="/home" component={Home} />
      <Route path="/buscarpormarca" component={SearchByBrand} />

      <Route path="/resultado/marca" component={SearchBrandResult} />
      <Route path="/categoriamarca/:id" component={SearchBrandResult} />
      <Route path="/subcategoriamarca/:id" component={SearchSubBrandResult} />

      <Route path="/buscarporproduto" component={SearchByProduct} />
      <Route path="/resultado/produto" component={ProductSearchResult} />

      <Route path="/carrinho-compras" component={ShoppingCart} />
      <Route path="/carrinho-individual" component={ShoppingCartIndividual} />
    </Switch>
  );
}
