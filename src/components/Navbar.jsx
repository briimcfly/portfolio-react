import { Link } from "react-router-dom";
function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg c bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/projects">My Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    )
}

export default NavBar;