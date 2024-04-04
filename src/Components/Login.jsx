import React from "react";
// import Login from "Login";
import ControlCenter from "./ControlCenter";
import Footer from "./Footer";
import SignUpForm1 from "./SignUpForm1";
import FrameComponent5 from "./FrameComponent5";

function Login(){
    return (
      <>
      <ControlCenter></ControlCenter>   
      
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
             >
               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2">
               </path>
               <circle cx="12" cy="7" r="4">
               </circle>
             </svg>
           </a>

         </div>
       </form>
     </div>
   </div>
 </nav>
 <div className="BO" style={{borderBottom:'1px solid gray',width:'100%',display:"inline-flex"}}></div>

      <div className="container" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '75px',
      paddingTop: '200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '1200px'
    }}>
      <div className="side-image" style={{
        paddingTop: '75px',
        background: '#CBE4E8',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <img className="dl-beatsnoop1" style={{
          width: '100%',
          height: 'auto'
        }} src="./PhonesLogin.webp" alt="PhonesLogin" />
      </div>
      <div className="content" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '65%',
        marginTop: '7rem'
      }}>
        <div className="title" style={{
          color: 'black',
          fontSize: '2rem',
          fontFamily: 'Inter',
          fontWeight: '500',
          lineHeight: '1.5',
          letterSpacing: '1.44px'
        }}>Log in to Exclusive</div>
        <div className="subtitle" style={{
          color: 'black',
          fontSize: '1rem',
          fontFamily: 'Poppins',
          fontWeight: '400',
          lineHeight: '1.5'
        }}>Enter your details below</div>
        <div className="input-fields" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div className="input-field" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}>
            <div className="label" style={{
              opacity: '0.4',
              color: 'black',
              fontSize: '1rem',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '1.5'
            }}>Email or Phone Number</div>
            <div className="line" style={{
              width: '100%',
              height: '0',
              border: '1px black solid'
            }}></div>
          </div>
          <div className="input-field" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}>
            <div className="label" style={{
              opacity: '0.4',
              color: 'black',
              fontSize: '1rem',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '1.5'
            }}>Password</div>
            <div className="line" style={{
              width: '100%',
              height: '0',
              border: '1px black solid'
            }}></div>
          </div>
        </div>
        <div className="Frame765" style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gap: '87px',
          alignItems: 'center'
        }}>
          <div className="Frame752" style={{
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div className="Button" style={{
              paddingLeft: '48px',
              paddingRight: '48px',
              paddingTop: '16px',
              paddingBottom: '16px',
              background: '#DB4444',
              borderRadius: '4px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              display: 'flex'
            }}>
              <div className="ViewAllProducts" style={{
                color: '#FAFAFA',
                fontSize: '16px',
                fontFamily: 'Poppins',
                fontWeight: '500',
                lineHeight: '24px',
                wordWrap: 'break-word'
              }}>Log In</div>
            </div>
          </div>
          <div className="ForgetPassword" style={{
            color: '#DB4444',
            fontSize: '16px',
            fontFamily: 'Poppins',
            fontWeight: '400',
            lineHeight: '24px',
            wordWrap: 'break-word'
          }}>Forget Password?</div>
        </div>
      </div>
    </div>

 <Footer></Footer>

      </>

    );
  }
  export default Login;