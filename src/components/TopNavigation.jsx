import React from 'react'

function TopNavigation(props) {
  return (
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand mx-3" href="#">
       <img className='ml-3' src="https://static.cpcache.com/logo.png" alt="" />
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
         Accessories
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
           Gadgets
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
           Products
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
          Moitor
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
           Others
          </a>
        </li>
      </ul>
      <form className="d-flex me-5" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default TopNavigation