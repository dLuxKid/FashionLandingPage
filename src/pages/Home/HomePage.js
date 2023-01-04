// React
import React from "react";

// CSS
import "./HomePage.css";

// Images
import heroSection_Img from "../../assets/Images/heroSection_Img.png";
import hoodie from "../../assets/Images/hoodie.png";
import coats from "../../assets/Images/coats.png";
import Tees from "../../assets/Images/Tees.png";
import payday from "../../assets/Images/payday.png";
import Trending from "../../assets/Images/Trending.png";
import u$40 from "../../assets/Images/u$40.png";
import phone from "../../assets/Images/phone_Img.png";
import hm from "../../assets/Images/hm.png";
import obey from "../../assets/Images/obey.png";
import shopify from "../../assets/Images/shopify.png";
import lacoste from "../../assets/Images/lacoste.png";
import levis from "../../assets/Images/levis.png";
import amazon from "../../assets/Images/amazon.png";

// Components
import ItemCard from "../../components/ItemCard/ItemCard";

const HomePage = () => {
  return (
    <div>
      <section className="heroSection">
        <div className="heroSection_Container">
          <div className="heroSection_Text">
            <h1>
              <span className="white">LET'S</span> EXPLORE
            </h1>
            <h1>
              <span className="yellow">UNIQUE</span> CLOTHES.
            </h1>
            <p>Live for Influential and Innovative fashion!</p>
            <button className="cta_Button">Shop Now</button>
          </div>
          <div className="heroSection_ImageContainer">
            <img src={heroSection_Img} alt="model" />
          </div>
        </div>
      </section>

      <section className="sponsorsContainer">
        <img src={hm} alt="H&M" />
        <img src={obey} alt="OBEY" />
        <img src={shopify} alt="SHOPIFY" />
        <img src={lacoste} alt="LACOSTE" />
        <img src={levis} alt="LEVI'S" />
        <img src={amazon} alt="AMAZON" />
      </section>

      <section className="newArrivals_Section">
        <div className="newArrivals_Title">
          <h2>NEW ARRIVALS</h2>
          <div className="yellow_circle position"></div>
        </div>
        <div className="newArrivals_Container">
          <ItemCard img={hoodie} name="Hoodies & Sweatshirts" />
          <ItemCard img={coats} name="Coats & Parkas" />
          <ItemCard img={Tees} name="Tees & T-Shirts" />
        </div>
      </section>

      <section className="paydaySection">
        <div className="paydaySection_ImageContainer">
          <img src={payday} alt="payday" />
        </div>
        <div className="paydaySection_About">
          <h1>
            <span className="white">PAYDAY</span> SALE NOW
          </h1>
          <p>
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p>
            <span>1 June - 10 June 2021</span> <br />
            *Terms & Conditions apply
          </p>
          <button className="cta_Button">SHOP NOW</button>
        </div>
      </section>

      <section className="youngFavouriteSection">
        <div className="youngFavouriteSection_Title">
          <h1>Young's Favourite</h1>
          <div className="yellow_circle position"></div>
        </div>
        <div className="youngFavouriteSection_Item">
          <ItemCard img={Trending} name="Trending on instagram" />
          <ItemCard img={u$40} name="All Under $40" />
        </div>
        <div className="youngFavouriteSection_downloadApp">
          <div className="downloadApp">
            <h1>DOWNLOAD APP & GET THE VOUCHER!</h1>
            <p>
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <div className="downloadButton">
              <button className="cta_Button">PlayStore</button>
              <button className="cta_Button">AppStore</button>
            </div>
          </div>
          <div className="youngFavouriteSection_Img">
            <img src={phone} alt="phone" />
          </div>
        </div>
      </section>

      <section className="newsletterSection">
        <div className="newsletterSection_Container">
          <div className="newsletterSection_Title">
            <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
          </div>
          <div className="newsletterSection_Text">
            <p>Type your email down below and be young wild generation</p>
          </div>
          <div className="newsletterSection_InputBar">
            <input type="text" placeholder="Add your email here" />
            <button className="cta_Button">SEND</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
