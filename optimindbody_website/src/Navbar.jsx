export default function Navbar(){
  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
  return(
  <nav className="nav">
    <a href="/" className="sitelogo">
      <img className="logo" src="images/logo.png" alt=""/>
    </a>
    <ul className="nav_ul">
      <li className="nav_li">
        <a className="navbarfonts" href="/about us"> 
        about us 
        </a>
      </li>
      <li className="nav_li">
        <a className="navbarfonts" onClick={scrollToBottom}>
           contact us 
           </a>
      </li>
      
    </ul>



  </nav>)
}