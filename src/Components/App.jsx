import React from "react";
import ControlCenter from './ControlCenter';
import FrameComponent5 from './FrameComponent5';
import ErrorHandler from './ErrorHandler';
import FrameComponent4 from './FrameComponent4';
import PerfumeContainer from './PerfumeContainer';
import FrameComponent3 from './FrameComponent3';
import LoginRegisterCartWishlist from './LoginRegisterCartWishlist';
import InfoMerger from './InfoMerger';
import FrameComponent1 from './FrameComponent1';
import FrameComponent from './FrameComponent';
// import "./E-commerce-home-page.css";
import Footer from './Footer';


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