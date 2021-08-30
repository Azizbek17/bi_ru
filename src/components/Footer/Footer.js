import React from 'react';


function Footer() {
    return (

        <footer>
        <div className="container contact_container">
          <div className="row">

            <div className="col-sm">
              <h3>НАШИ МАГАЗИНЫ:</h3>
              <p>Алматы
                Red Park, пр. Достык, 40
                +7(727) 291 06 92
                Red Park, пр. Райымбека, 115/23
                +7 (727) 339 92 71
                Нур-Султан
                Red Park, ул. Кунаева, 33
                +7 (7172) 91 97 03</p>
            </div>

            <div className="col-sm">
              <h3>МЫ В СОЦИАЛЬНЫХ СЕТЯХ:</h3>
              <div className="contact_icons">
                <img className="contact-icon" src='./img/instagram.svg'></img>
                <img className="contact-icon" src='./img/whatsapp.svg'></img>
                <img className="contact-icon" src='./img/facebook.svg'></img>
                <img className="contact-icon" src='./img/telegram.svg'></img>
                <img className="contact-icon" src='./img/wechat.svg'></img>
              </div>
            </div>

            <div className="col-sm">
              <h3>ПРИНИМЕМ К ОПЛАТЕ:</h3>
              <img src='./img/mastercard.png'></img>
              <img src='./img/maestro.png'></img>
              <br></br>
              <img src='./img/visa.png'></img>
              <img src='./img/paypal.png'></img>
            </div>

          </div>
        </div>
      </footer>

    );
}

export default Footer;