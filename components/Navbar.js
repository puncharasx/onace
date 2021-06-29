import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-nav">
  <div className="container">
    <a className="navbar-brand text-primary" href="#">ONANCE</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <h4 className="text-white">V</h4>
    </button> */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar
