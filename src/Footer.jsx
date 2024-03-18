// import "./footer.css";


import React from "react";

const Footer = () => {
  return (
    <section className="footer1">
      <div className="layer-linkers">
        <div className="email-subscription-parent">
          <div className="email-subscription">
            <div className="gmail-icon">
              <div className="logo-group">
                <div className="logo3">
                  <h3 className="exclusive1">Exclusive</h3>
                </div>
                <div className="subscribe1">Subscribe</div>
              </div>
              <div className="get-10-off">Get 10% off your first order</div>
            </div>
            <div className="send-mail">
              <div className="enter-your-email">Enter your email</div>
              <img className="icon-send" alt="" src="/iconsend.svg" />
            </div>
          </div>
          <div className="support-parent">
            <div className="support">Support</div>
            <div className="user-profile-area">
              <div className="bijoy-sarani-dhaka">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </div>
              <div className="exclusivegmailcom">exclusive@gmail.com</div>
              <div className="div34">+88015-88888-9999</div>
            </div>
          </div>
          <div className="navigation-items-container">
            <div className="account">Account</div>
            <div className="navigation-items-container1">
              <div className="my-account">My Account</div>
              <div className="login-register">Login / Register</div>
              <div className="cart23">Cart</div>
              <div className="wishlist">Wishlist</div>
              <div className="shop">Shop</div>
            </div>
          </div>
          <div className="quick-link-parent">
            <div className="quick-link">Quick Link</div>
            <div className="privacy-policy-parent">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-of-use">Terms Of Use</div>
              <div className="faq">FAQ</div>
              <div className="contact1">Contact</div>
            </div>
          </div>
          <div className="footer-logo">
            <div className="download-app-parent">
              <div className="download-app1">Download App</div>
              <div className="new-user-only-discount">
                <div className="save-3-with">
                  Save $3 with App New User Only
                </div>
                <div className="google-play-app-store-icons">
                  <img
                    className="qr-code-icon"
                    loading="lazy"
                    alt=""
                    src="/qr-code@2x.png"
                  />
                  <div className="control-container">
                    <img
                      className="googleplay-icon"
                      loading="lazy"
                      alt=""
                      src="/googleplay.svg"
                    />
                    <img
                      className="appstore-icon"
                      loading="lazy"
                      alt=""
                      src="/appstore@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="header-footer-icons-row">
              <img className="icon-facebook" alt="" src="/iconfacebook.svg" />
              <img className="icon-twitter" alt="" src="/icontwitter.svg" />
              <img className="icon-instagram" alt="" src="/iconinstagram.svg" />
              <img className="icon-linkedin" alt="" src="/iconlinkedin.svg" />
            </div>
          </div>
        </div>
      </div>
      <footer className="underline-parent">
        <img className="underline-icon5" alt="" src="/underline-5.svg" />
        <div className="footer-support-account-login-l">
          <div className="account-login-register-cart-wi">
            <img className="icon-copyright" alt="" src="/iconcopyright.svg" />
            <div className="copyright-rimel-2022">
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
