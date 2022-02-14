import React from 'react';
import Footer from '../../components/Footer/Footer';
import ReusableHeader from '../../components/ReusableHeader/ReusableHeader';
import ShoppingCartCards from '../../components/ShoppingCartCards/ShoppingCartCards';
import './style.css';

export default function ShoppingCart() {
  return (
    <div className="ContainerShoppingCart">
      <ReusableHeader />
      <section className="CartCards">
        <ShoppingCartCards />
      </section>

      <section className="SectionFooter">
        <Footer />
      </section>
    </div>
  );
}
