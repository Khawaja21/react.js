import React from "react";
import Signpic from "../Assets/Images/google.svg";
import ControlCenter from './ControlCenter';
import Footer from './Footer';
import Login from "./Login";


function SignUpForm1(){
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width:'514px',JustifyContent: 'center',gap:'50px',fontSize:'14px'}}>
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
        }}>Create an account</div>
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
            }}>Name</div>
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
        <div className="buttons" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div className="button" style={{
            background: '#DB4444',
            color: '#FAFAFA',
            fontSize: '1rem',
            fontFamily: 'Poppins',
            fontWeight: '500',
            padding: '10px 20px',
            borderRadius: '4px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>Create Account</div>
          <div className="google-sign-up" style={{
            border: '1px rgba(0, 0, 0, 0.4) solid',
            fontSize: '1rem',
            padding: '10px 20px',
            borderRadius: '4px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4"/>
                <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853"/>
                <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04"/>
                <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
            <div className="text">Sign up with Google</div>
          </div>
        </div>
        <div className="login" style={{
          display: 'flex',
          opacity: '0.7'
        }}>
          <div className="text" style={{
            color: 'black'
          }}>Already have an account?</div>
          <div className="link" style={{
            marginLeft: '5px',
            fontSize: '1rem',
            fontFamily: 'Poppins',
            fontWeight: '500',
            cursor:'pointer'
          }}>Log in {Login}</div>
        </div>
      </div>
    </div>

  <Footer></Footer>
</>


  );
}
export default SignUpForm1;

