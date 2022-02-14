import React from 'react';
import Ball from '../../assets/images/Ball.png';
import Instagran from '../../assets/images/Instagran.png';
import Message from '../../assets/images/Message.png';
import Whatsapp from '../../assets/images/Whatsapp.png';
import FobbiWhite from '../../assets/images/FobbiWhite.png';
import './style.css';

export default function Footer() {
  return (
    <footer className="FooterHome">
      <div className="DivLogoFobbiBlack">
        <img className="LogoFobbiBlack" src={FobbiWhite} alt="Logo Black" />
      </div>
      <div className="DivSocialNetworksFobbi">
        <div className="DivSite">
          <div className="TextSite">WWW.FOBBI.COM.BR</div>
          <div className="BallSite">
            <img className="ImageBallSite" src={Ball} alt="Logo Ball" />
          </div>
        </div>
        <div className="DivSite">
          <div className="TextSite">FOBBIBR</div>
          <div>
            <img
              className="ImageBallSite"
              c
              src={Instagran}
              alt="Logo Instagran"
            />
          </div>
        </div>
        <div className="DivSite">
          <div className="TextSite">FALECONOSCO@FOBBI.COM</div>
          <div>
            <img className="ImageBallSite" src={Message} alt="Logo Message" />
          </div>
        </div>
        <div className="DivSite">
          <div className="TextSite">+55 (47) 9 9958 6742</div>
          <div>
            <img className="ImageBallSite" src={Whatsapp} alt="Logo Whatsapp" />
          </div>
        </div>
      </div>
    </footer>
  );
}
