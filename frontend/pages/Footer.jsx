import React from 'react';
import styles from './Footer.module.scss';
import { FaTwitter, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__row}>
          <div className={styles.footer__column}>
            <h2 className={styles.footer__title}>Vegefoods</h2>
            <p className={styles.footer__text}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
            <div className={styles.footer__social}>
              <a href="#" className={styles.footer__socialLink}>
                <FaTwitter className={styles.footer__icon} />
              </a>
              <a href="#" className={styles.footer__socialLink}>
                <FaFacebook className={styles.footer__icon} />
              </a>
              <a href="#" className={styles.footer__socialLink}>
                <FaInstagram className={styles.footer__icon} />
              </a>
            </div>
          </div>
          
          <div className={styles.footer__column}>
            <h2 className={styles.footer__title}>Menu</h2>
            <ul className={styles.footer__menu}>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>Shop</a></li>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>About</a></li>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>Journal</a></li>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>Contact Us</a></li>
            </ul>
          </div>
          
          <div className={styles.footer__column}>
            <h2 className={styles.footer__title}>Help</h2>
            <ul className={styles.footer__menu}>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>Shipping Information</a></li>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>Returns & Exchange</a></li>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>Terms & Conditions</a></li>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>Privacy Policy</a></li>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>FAQs</a></li>
              <li className={styles.footer__menuItem}><a href="#" className={styles.footer__link}>Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footer__column}>
            <h2 className={styles.footer__title}>Have a Questions?</h2>
            <ul className={styles.footer__contact}>
              <li className={styles.footer__contactItem}>
                <FaLocationDot className={styles.footer__contactIcon} />
                <span className={styles.footer__contactText}>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className={styles.footer__contactItem}>
                <BsTelephone className={styles.footer__contactIcon} />
                <span className={styles.footer__contactText}>+2 392 3929 210</span>
              </li>
              <li className={styles.footer__contactItem}>
                <MdEmail className={styles.footer__contactIcon} />
                <span className={styles.footer__contactText}>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <p className={styles.footer__copyrightText}>
          Copyright ©2025 All rights reserved | This template is made with <FaHeart/> by <a href="#" className={styles.footer__copyrightLink}>Colorlib</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;