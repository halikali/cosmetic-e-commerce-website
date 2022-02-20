import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__container'>
            <div className='footer__col'>
                <div className='footer__logo'><a href='#'>LOGO</a></div>
                <div className='footer__item'>55 Gallaxy Enque, <br></br> 2568 steet, 23568 NY</div>
                <div className='footer__item'><strong>Phone:</strong> (444) 00 00 </div>
                <div className='footer__item'><strong>Email:</strong> info@cosmetic.com </div>
            </div>
            <div className='footer__col'>
                <div className='footer__title'><strong>INFORMATION</strong></div>
                <div className='footer__item'><a href='#'>About us</a></div>
                <div className='footer__item'><a href='#'>Contact Us</a></div>
                <div className='footer__item'><a href='#'>Career</a></div>
                <div className='footer__item'><a href='#'>My Account</a></div>
                <div className='footer__item'><a href='#'>Orders and Returns</a></div>
            </div>
            <div className='footer__col'>
                <div className='footer__title'><strong>CATEGORIES</strong></div>
                <div className='footer__item'><a href='#'>Makeup</a></div>
                <div className='footer__item'><a href='#'>Hair</a></div>
                <div className='footer__item'><a href='#'>Body</a></div>
                <div className='footer__item'><a href='#'>Perfumes</a></div>
                <div className='footer__item'><a href='#'>Fashion</a></div>
            </div>
            <div className='footer__col'>
                <div className='footer__logo'><strong>SOCIAL MEDIA</strong></div>
                <div className='footer__item'><a href='#'><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a></div>
                <div className='footer__item'><a href='#'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></div>
                <div className='footer__item'><a href='#'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></div>
                <FontAwesomeIcon icon={'facebook'} />
            </div>
        </div>
       <div className='copyright'>© 2022 All Rights Reserved. Cosmetic E-Commerce by <strong>Ali Tunç & Şafak Birkan</strong></div> 
      </footer>
    );
  }
}
