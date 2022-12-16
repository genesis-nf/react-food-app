import logo from '../images/logo.png';

function Header() {
   
    return (
        <>
        <header>
            <div className="maintitle">
            <h1>Take Away <img src={logo} alt="logo"/></h1>
            </div>
        </header>
      
        <nav className="topnav">
          <button className="hbutton">home</button>
          <div id="myLinks">
          <a href="#account">My Account</a>
          <a href="#orders">My Orders</a>
          <a href="#cart">My Cart</a>
          <a href="#settings">Settings</a>
          <a href="#termsandconditions">Terms and Conditions</a>
        </div>
        </nav>
        </>
    );
  }
  export default Header;
  //<a href="" class="icon" onclick="myFunction()"/>
  //imglinea 8 logo