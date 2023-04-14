/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./home.css";
import {
  C1,
  C2,
  C4,
  C3,
  S1,
  S2,
  S3,
  S4,
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  P10,
  P11,
  P12,
  P13,
  P14,
  P15,
  P16,
  P17,
  P18,
  P19
} from "../../assets/index";

function Home() {
  return (
    <div className="home">
      <header id="banner" className="banner">
        <div className="banner-content">
          <h1 id="h1">Get your designs ready!</h1>
          <h2 id="h2">YBRO Custom Clothings</h2>
          <h4 id="h4">Flash Sale @12 Midnight!</h4>
          <button id="button">
            <a href="/about">Know More!</a>
          </button>
        </div>
      </header>

      <div className="shead">
        <h2>WE PROVIDE</h2>
      </div>

      <hr />

      <div className="service">
        <section id="feature" className="section-p1">
          <div className="se-box">
            <img src={S1} alt="" height="80%" />
            <h6>Best Quality Clothings</h6>
          </div>
          <div className="se-box">
            <img src={S2} alt="100%" />
            <h6>Fast & Safe Delivery</h6>
          </div>
          <div className="se-box">
            <img src={S3} alt="" height="80%" />
            <h6>Design Support Team</h6>
          </div>
          <div className="se-box">
            <img src={S4} alt="" height="80%" />
            <h6>Resell Arena</h6>
          </div>
        </section>
      </div>

      <hr />

      <div className="carousel">
        <div className="carousel-slide">
          <img src={C1} alt="Error loading image." />
          <img src={C2} alt="Error loading image." />
          <img src={C3} alt="Error loading image." />
          <img src={C4} alt="Error loading image." />
          <img src={P5} alt="Error loading image." />
          <img src={P6} alt="Error loading image." />
          <img src={P7} alt="Error loading image." />
          <img src={P8} alt="Error loading image." />
          <img src={P9} alt="Error loading image." />
          <img src={P10} alt="Error loading image." />
          <img src={P11} alt="Error loading image." />
          <img src={P12} alt="Error loading image." />
          <img src={P13} alt="Error loading image." />
          <img src={P14} alt="Error loading image." />
          <img src={P15} alt="Error loading image." />
          <img src={P16} alt="Error loading image." />
          <img src={P17} alt="Error loading image." />
          <img src={P18} alt="Error loading image." />
          <img src={P19} alt="Error loading image." />
        </div>
        <button className="carousel-control prev">&#8249;</button>
        <button className="carousel-control next">&#8250;</button>
      </div>

      <hr />

      <div className="service">
        <section id="feature" className="section-p1">
          <div className="se-box">
            <img src={P1} alt="" height="80%" />
            <h6>Casual Tees</h6>
          </div>
          <div className="se-box">
            <img src={P2} alt="100%" />
            <h6>Custom Hoodies</h6>
          </div>
          <div className="se-box">
            <img src={P3} alt="100%" />
            <h6>Custom Sweatshirts</h6>
          </div>
          <div className="se-box">
            <img src={P4} alt="100%" />
            <h6>Printed Hoodies</h6>
          </div>
        </section>
      </div>

      <div className="service">
        <section id="feature" className="section-p1">
          <div className="se-box">
            <img src={P5} alt="" height="80%" />
            <h6>Best Quality Clothings</h6>
          </div>
          <div className="se-box">
            <img src={P6} alt="100%" />
            <h6>Tshirts</h6>
          </div>
          <div className="se-box">
            <img src={P7} alt="100%" />
            <h6>Denim Tshirt Combo</h6>
          </div>
          <div className="se-box">
            <img src={P8} alt="100%" />
            <h6>Printed Grey Hoodies</h6>
          </div>
        </section>
      </div>

      <div className="service">
        <section id="feature" className="section-p1">
          <div className="se-box">
            <img src={P9} alt="" height="80%" />
            <h6>Womens long Sleeves</h6>
          </div>
          <div className="se-box">
            <img src={P10} alt="100%" />
            <h6>All Black</h6>
          </div>
          <div className="se-box">
            <img src={P11} alt="100%" />
            <h6>Yellow collections</h6>
          </div>
          <div className="se-box">
            <img src={P12} alt="100%" />
            <h6>Couples Combo</h6>
          </div>
        </section>
      </div>

      <div className="service">
        <section id="feature" className="section-p1">
          <div className="se-box">
            <img src={P13} alt="" height="80%" />
            <h6>Women's Grey Shirts</h6>
          </div>
          <div className="se-box">
            <img src={P14} alt="100%" />
            <h6>Black Hoodies</h6>
          </div>
          <div className="se-box">
            <img src={P15} alt="100%" />
            <h6>Grey Sweatshirts</h6>
          </div>
          <div className="se-box">
            <img src={P16} alt="100%" />
            <h6>Custom Prints</h6>
          </div>
        </section>
      </div>
      <hr />
    </div>
  );
}

export default Home;
