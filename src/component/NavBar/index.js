import CompanyLogo from '../../img/company-logo.png'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light shadow sticky-top" style={{ backgroundColor: "#D0D4CA" }}>

      <div className="container">
        <img src={CompanyLogo} width="50" height="50" className="navbar-brand" alt="Your Logo" />
        &nbsp;&nbsp;
        <a className="navbar-brand font-weight-bold" style={{ fontSize: "150%" }} href="#">Hogwarts Academy of Languages</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{ fontSize: "18px" }}>Home <span className="sr-only">(current)</span></a>
            </li>
            &nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontSize: "18px" }}>Courses</a>
            </li>
            &nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontSize: "18px" }}>Scores</a>
            </li>
            &nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontSize: "18px" }}></a>
            </li>
          </ul>
        </div>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

        <form className="form-inline my-2 my-lg-0">
          Hello Uday &nbsp;&nbsp;
          <div className="dropdown">
            <a className="btn btn-secondary rounded-circle" href="#" role="button" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-user"></i> <img className="img-thumbnail rounded-circle" style={{ width: "50px", height: "50px" }} src="img/usericon.png" />
            </a>
            <div className="dropdown-menu" aria-labelledby="userMenu">
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">Settings</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
