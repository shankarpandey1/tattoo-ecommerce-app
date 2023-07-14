import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';


function Header() {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

 return (
<header>
      <h1>SHAN TATTOOZ &nbsp; &nbsp; <span class="tato"><i>Montreal</i></span></h1>
      <h3>E-commerce App</h3>
      <div className='login'>
      <div>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Signup</button>

      {showLogin && (
        <div className="modal">
          <Login />
        </div>
      )}

      {showSignup && (
        <div className="modal">
          <Signup />
        </div>
      )}
    </div>
    </div>
</header>
  );
}

export default Header;
