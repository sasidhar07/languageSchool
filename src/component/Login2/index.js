
import CompanyLogo from '../../img/company-logo.png'; 


function Login2() {
  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    .main {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
    }
    .wrapper {
      position: relative;
      max-width: 430px;
      width: 100%;
      background: #fff;
      padding: 34px;
      border-radius: 6px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }
    .wrapper h2 {
      position: relative;
      font-size: 22px;
      font-weight: 600;
      color: #333;
    }
    .wrapper h2::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 28px;
      border-radius: 12px;
      background: #A7D397;
    }
    .wrapper form {
      margin-top: 30px;
    }
    .wrapper form .input-box {
      height: 52px;
      margin: 18px 0;
    }
    form .input-box input {
      height: 100%;
      width: 100%;
      outline: none;
      padding: 0 15px;
      font-size: 17px;
      font-weight: 400;
      color: #333;
      border: 1.5px solid #C7BEBE;
      border-bottom-width: 2.5px;
      border-radius: 6px;
      transition: all 0.3s ease;
    }
    .input-box input:focus,
    .input-box input:valid {
      border-color: #A7D397;
    }
    form .policy {
      display: flex;
      align-items: center;
    }
    form h3 {
      color: #707070;
      font-size: 14px;
      font-weight: 500;
      margin-left: 10px;
    }
    .input-box.button input {
      color: #fff;
      letter-spacing: 1px;
      border: none;
      background: #A7D397;
      cursor: pointer;
    }
    .input-box.button input:hover {
      background: #A7D397;
    }
    form .text h3 {
      color: #333;
      width: 100%;
      text-align: center;
    }
    form .text h3 a {
      color: #A7D397;
      text-decoration: none;
    }
    form .text h3 a:hover {
      text-decoration: underline;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div>
      <nav className="navbar navbar-expand navbar-light sticky-top" style={{ backgroundColor: '#D0D4CA' }}>
        <div className="container">
          <img src={CompanyLogo} width="50" height="50" className="navbar-brand" alt="Your Logo" />
          &nbsp;&nbsp;
          <a className="navbar-brand font-weight-bold" style={{ fontSize: '200%' }} href="#">
            Hogwarts Academy of Languages
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>
                  Home
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>
                  Contact
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>
                  Blog
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main">
        <div className="wrapper card col-md-8 col-lg-6 col-xl-6">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Password" required />
            </div>
            <div className="policy">
              <input type="checkbox" />
              <h3>Remember me</h3>
            </div>
            <div className="input-box button">
              <input type="Submit" value="Login" />
            </div>
            <div className="text">
              <h3>
                Don't have an account <a href="#">Register now</a>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login2;
