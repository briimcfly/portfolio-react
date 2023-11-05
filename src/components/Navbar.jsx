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
                <a className="nav-link active text-white" aria-current="page" href="#">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">My Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    )
}

export default NavBar;