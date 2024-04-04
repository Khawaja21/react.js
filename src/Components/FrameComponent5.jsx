import { useCallback } from "react";
// import React, { useState } from "react";
// import "./frame-component5.css";
import React from "react";
import SignUpForm1 from "./SignUpForm1";
// import SignUpForm from "./SignUpForm";

const FrameComponent5 = () => {
  // const onHeaderContainer3Click = useCallback(() => {
  //   Please sync "Sign Up" to the project

  // }, []);

  const onCart1WithBuyClick = useCallback(() => {
    // Please sync "Cart" to the project
  }, []);

  return (

 <section className="frame-section">
  <div className="header-parent">
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{BackgroundColor:'#ffff'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontSize:'24px',marginRight:'15rem'}}><strong>Exclusive</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width:'459px',JustifyContent: 'center',gap:'50px',fontSize:'14px'}}>
        <li className="nav-item">
          <a className="nav-link"  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../SignUpForm1" onClick={<SignUpForm1></SignUpForm1>}>SignUp {SignUpForm1}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="What are you looking for?" 
         style={{backgroundColor:'rgb(245 245 245'}} aria-label="Search"/>
                 <div className="wishlist-parent">
          <a
            className="relative cursor-pointer"
            href="/en/wishlist"
            style={{ color: 'Black', fontSize: '1.5rem' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="w-8 h-8 max-3xl:w-7 max-3xl:h-7 max-2xl:w-6 max-2xl:h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,
               16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,
               178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,
               8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z">
              </path>
            </svg>
          </a>
          <a
            className="relative cursor-pointer"
            href="/en/cart"
            style={{ color: 'Black', fontSize: '1.5rem' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,
                18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z">
              </path>
            </svg>
          </a>
          <a
            href="/en/SignUpForm1"
            className="user-icon"
            style={{ color: 'Black', fontSize: '1.5rem' }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onCart1WithBuyClick}
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2">
              </path>
              <circle cx="12" cy="7" r="4">
              </circle>
            </svg>
          </a>
          {/* <svg
  xmlns="http://www.w3.org/2000/svg"
  class="menu-icon"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="Black"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="3" y1="12" x2="21" y2="12"></line>
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="18" x2="21" y2="18"></line>
</svg> */}

          {/* <img className="user-icon" alt="" src="/user.svg" /> */}
        </div>
        {/* <button className="btn btn-outline-success" type="submit"></button> */}
      </form>
    </div>
  </div>
</nav>

<div className="BO" style={{borderBottom:'1px solid gray',width:'100%',display:"inline-flex"}}></div>
  
    {/* <div className="header">
      <div className="header-inner">
        <div className="logo-parent">
          <div className="logo">
            <h3 className="exclusive">Exclusive</h3>
          </div>
          <div className="logo1">
            <div className="header1">
              <div className="home">Home</div>
              <img className="underline-icon" alt="" src="/underline.svg" />
            </div>
            <div className="header2">
              <div className="contact">Contact</div>
            </div>
            <div className="header3">
              <div className="about">About</div>
            </div>
            <div className="header4" onClick={onHeaderContainer3Click}>
              <div className="sign-up" onclick={<SignUpForm1></SignUpForm1>}>Sign Up</div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-component-set-parent">
        <div className="search-component-set">
          <div className="header5">
            <div className="what-are-you">What are you looking for?</div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 cursor-pointer max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        <div className="wishlist-parent">
          <a
            className="relative cursor-pointer"
            href="/en/wishlist"
            style={{ color: 'Black', fontSize: '1.5rem' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="w-8 h-8 max-3xl:w-7 max-3xl:h-7 max-2xl:w-6 max-2xl:h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,
               16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,
               178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,
               8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z">
              </path>
            </svg>
          </a>
          <a
            className="relative cursor-pointer"
            href="/en/cart"
            style={{ color: 'Black', fontSize: '1.5rem' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,
                18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z">
              </path>
            </svg>
          </a>
          <a
            href="/en/sign-up"
            className="user-icon"
            style={{ color: 'Black', fontSize: '1.5rem' }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onCart1WithBuyClick}
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2">
              </path>
              <circle cx="12" cy="7" r="4">
              </circle>
            </svg>
          </a>
          <svg
  xmlns="http://www.w3.org/2000/svg"
  class="menu-icon"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="Black"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="3" y1="12" x2="21" y2="12"></line>
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="18" x2="21" y2="18"></line>
</svg>

          <img className="user-icon" alt="" src="/user.svg" />
        </div>
      </div>
    </div> */}
    {/* <div style={{ border: '0.2px solid #ccc', width: '100%', opacity: '0.4' }} /> */}
    <div className="frame-div">
      <div className="dropdown-menu-parent">
        <div className="dropdown-menu">
          <div className="womans-fashion-parent">
            <div className="womans-fashion">Woman’s Fashion</div>
            <div className="mens-fashion">Men’s Fashion</div>
            <div className="electronics">Electronics</div>
          </div>
          <div className="dropdown-parent">
            <i class='bx bxs-chevron-right'></i>
            <i class='bx bxs-chevron-right'></i>
          </div>
        </div>
        <div className="home-lifestyle">{`Home & Lifestyle`}</div>
        <div className="medicine">Medicine</div>
        <div className="sports-outdoor">{`Sports & Outdoor`}</div>
        <div className="babys-toys">{`Baby’s & Toys`}</div>
        <div className="groceries-pets">{`Groceries & Pets`}</div>
        <div className="health-beauty">{`Health & Beauty`}</div>
      </div>
      <div className="footer-services">
        <div className="f-a-q-link" />
      </div>
      <div className="header-logo-container">
        <div className="frame-parent1">
          <div className="px-apple-gray-logo-1-parent">
            <img
              className="px-apple-gray-logo-1-icon"
              loading="lazy"
              alt=""
              src="/iphoneicon.png"
            />
            <div className="iphone-14-series-wrapper">
              <div className="iphone-14-series">iPhone 14 Series</div>
            </div>
          </div>
          <h1 className="up-to-10">Up to 10% off Voucher</h1>
          <div className="shape-properties">
            <div className="shape-transform-properties">
              <div className="parent-properties">
                <div className="shop-now1">Shop Now</div>
                <div className="parent-properties-child" />
              </div>
              <div className="input-processor">
                <i class='bx bx-right-arrow-alt'></i>
              </div>
            </div>
          </div>
          <div className="g-u-c-c-i-i-n-t-e-n-s-e-o-d-d-wrapper">
            <div className="g-u-c-c-i-i-n-t-e-n-s-e-o-d-d">
              <div className="g-u-c-c-i-i-n-t-e-n-s-e-o-d-d-child" />
              <div className="g-u-c-c-i-i-n-t-e-n-s-e-o-d-d-item" />
            </div>
          </div>
        </div>
        <div className="connection-point">
          <img
            className="hero-endframe-cvklg0xk3w6e-la-icon"
            alt=""
            src="/phone.jpg"
          />
          <div className="connection-point-inner">
            <div className="frame-child" />
          </div>
          <div className="connection-point-inner1">
            <div className="frame-item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default FrameComponent5;
