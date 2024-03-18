import React from "react";
import ControlCenter from "./control-center";
import FrameComponent5 from "./frame-component5";
import ErrorHandler from "./error-handler";
import FrameComponent4 from "./frame-component4";
import PerfumeContainer from "./perfume-container";
import FrameComponent3 from "./frame-component3";
import LoginRegisterCartWishlist from "./login-register-cart-wishlist";
import InfoMerger from "./Info-merger";
import FrameComponent1 from "./Frame-component1";
import FrameComponent from "./Frame-component";
// import "./E-commerce-home-page.css";
import Footer from "./Footer";


function App(){
  return (
    <>
    <ControlCenter></ControlCenter>
    <FrameComponent5></FrameComponent5>
    <ErrorHandler></ErrorHandler>
    <FrameComponent4></FrameComponent4>
    <PerfumeContainer></PerfumeContainer>
    <FrameComponent3></FrameComponent3>
    <LoginRegisterCartWishlist></LoginRegisterCartWishlist>
    <InfoMerger></InfoMerger>
    <FrameComponent1></FrameComponent1>
    <FrameComponent></FrameComponent>
      <Footer></Footer>
    </>
  );
}
export default App;