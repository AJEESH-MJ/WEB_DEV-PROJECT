/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./auth.css";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login, register } from "../../assets/index";

function Auth() {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const Auth_container = document.querySelector(".Auth-container");

    const handleSignUpClick = () => {
      Auth_container.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
      Auth_container.classList.remove("sign-up-mode");
    };

    sign_up_btn.addEventListener("click", handleSignUpClick);

    sign_in_btn.addEventListener("click", handleSignInClick);

    return () => {
      sign_up_btn.removeEventListener("click", handleSignUpClick);
      sign_in_btn.removeEventListener("click", handleSignInClick);
    };
  }, []);

  return (
    <div className="Auth-container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="i" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="i" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn solid" value="login" />
            <p className="social-text">
              Or Sign In with social media platforms
            </p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="i" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="i" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="i" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn solid" value="signup" />
            <p className="social-text">
              Or Sign Up with social media platforms
            </p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here?</h3>
            <p>
              New Here...? Sign up to our website for the newcomer perks and to get the latest updates on our products.
              Enjoy the perks of being a ybro shopper with us.With this our community members will be the first to be notified when a product goes live.
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign Up
            </button>
            <img src={login} className="image" alt="" />
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content right-content">
            <h3>One Of Us?</h3>
            <p>
              Already a member? Sign in to our website to get the latest updates on our products and for the special offers and exclusive drops.
            </p>
            <button className="r btn transparent" id="sign-in-btn">
              Sign In
            </button>
            <img src={register} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
