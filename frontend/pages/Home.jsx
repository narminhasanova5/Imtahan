import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { FaPaperPlane, FaPhone, FaShippingFast } from "react-icons/fa";
import {
  MdOutlineNoFood,
  MdShoppingCart,
  MdSupportAgent,
} from "react-icons/md";
import { PiCalendarStar } from "react-icons/pi";
import App from "../src/App";
import NewsletterForm from "./NewsLetterForm";
import Footer from "./Footer";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section className={styles.contact}>
        <div className={styles.number}>
          <span>
            <FaPhone style={{ color: "white", fontSize: "10px" }} /> +1235
          </span>
          <span>2355</span>
          <span> 98</span>
        </div>
        <div className={styles.email}>
          <FaPaperPlane /> <span>YOUREMAIL@EMAIL.COM</span>
        </div>
        <div className={styles.businnes}>
          <span>3-5</span>
          <span>BUSINESS DAYS DELIVERY & FREE RETURNS</span>
        </div>
      </section>

      <section
        className={`${styles.navbar_wrapper} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.header2}>
          <div>
            <h1>VEGEFOODS</h1>
          </div>
          <div className={styles.navbar}>
            <a href="/">
              <h4>HOME</h4>
            </a>
            <a href="">
              <h4>SHOP</h4>
            </a>
            <a href="">
              <h4>ABOUT</h4>
            </a>
            <a href="">
              <h4>BLOG</h4>
            </a>
            <a href="">
              <h4>CONTACT</h4>
            </a>
            <a href="/admin">
              <h4>ADMINPANEL</h4>
            </a>
            <a href="/wish"><h4>WISHLIST</h4></a>
            <a href="/basket">
              <MdShoppingCart />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.banner_area}>
          <h1>100% Fresh & Organic Foods</h1>
          <h4>We deliver organic vegetables & fruits</h4>
          <button>VIEW DETAILS</button>
        </div>
      </section>
      <section>
        <div className={styles.container1}>
          <div className={styles.shipping}>
            <button className={styles.icon}>
              <FaShippingFast />
            </button>
            <h3>FREE SHIPPING</h3>
            <h4>ON ORDER OVER $100</h4>
          </div>
          <div className={styles.shipping}>
            <button className={styles.icon2}>
              <MdOutlineNoFood />
            </button>
            <h3>FREE SHIPPING</h3>
            <h4>ON ORDER OVER $100</h4>
          </div>
          <div className={styles.shipping}>
            <button className={styles.icon3}>
              <PiCalendarStar />
            </button>
            <h3>FREE SHIPPING</h3>
            <h4>ON ORDER OVER $100</h4>
          </div>
          <div className={styles.shipping}>
            <button className={styles.icon4}>
              <MdSupportAgent />
            </button>

            <h3>FREE SHIPPING</h3>
            <h4>ON ORDER OVER $100</h4>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.card_container}>
          <div className={styles.cont1}>
            <div className={styles.card1}>
              <button>FRUITS</button>
            </div>
            <div className={styles.card2}>
              <button>VEGETABLES</button>
            </div>
          </div>
          <div className={styles.cont1}>
            <div className={styles.card3}>
              <h3>Vegetables</h3>
              <span>Protect the health of every home</span>
              <button> Shop now</button>
            </div>
            <div className={styles.card7}></div>
          </div>
          <div className={styles.cont1}>
            <div className={styles.card5}>
              <button>JUICES</button>
            </div>
            <div className={styles.card4}>
              <button>DRIED</button>
            </div>
          </div>
        </div>
      </section>
      <App />
      <section>
        <div className={styles.banner2}>
          <div className={styles.banner2_text}>
            <h4>Best Price For You</h4>
            <h1>Deal of the day</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
            <div>
              <h2>Spinach</h2>
              <p>$10 now $5 only</p>
            </div>

            <div className={styles.countdown}>
              <div className={styles.time_box}>
                <h2>-1972</h2>
                <p>DAYS</p>
              </div>
              <div className={styles.time_box}>
                <h2>14</h2>
                <p>HOURS</p>
              </div>
              <div className={styles.time_box}>
                <h2>16</h2>
                <p>MINUTES</p>
              </div>
              <div className={styles.time_box}>
                <h2>49</h2>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.testimonials}>
        <h2>Our satisfied customer says</h2>
        <p className={styles.subtitle}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in
        </p>
        <div className={styles.testimonial_list}>
          {[
            {
              img: "https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg",
              name: "Garreth Smith",
              role: "SYSTEM ANALYST",
            },
            {
              img: "https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg",
              name: "Garreth Smith",
              role: "MARKETING MANAGER",
            },
            {
              img: "https://preview.colorlib.com/theme/vegefoods/images/person_2.jpg",
              name: "Garreth Smith",
              role: "INTERFACE DESIGNER",
            },
          ].map((testimonial, i) => (
            <div className={styles.testimonial_card} key={i}>
              <div className={styles.avatar}>
                <img src={testimonial.img} alt={testimonial.name} />
                <span className={styles.quote}>“</span>
              </div>
              <p className={styles.text}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <h3>{testimonial.name}</h3>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className={styles.relationship}>
          <img
            src="https://preview.colorlib.com/theme/vegefoods/images/partner-1.png"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/vegefoods/images/partner-2.png"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/vegefoods/images/partner-3.png"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/vegefoods/images/partner-4.png"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/vegefoods/images/partner-5.png"
            alt=""
          />
        </div>
      </section>
      <NewsletterForm/>
      <Footer/>
    </div>
  );
};

export default Home;
