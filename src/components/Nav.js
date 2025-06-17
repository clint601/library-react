import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav className="container-fluid">
      <div className="d-flex justify-content-end">
        <img src="images/lo.jpeg" className="header-img w-50 img-" />
        <ul className="top-nav d-flex align-items-center text-uppercase gap-4 list-unstyled m-0">
          <li className="nav-item">
            <Link to="/" class="nav-link">Home</Link>
          </li>
          <li className="nav-item top-nav ">
            <Link to="/book" className="nav-link">All Books</Link>
          </li>
          <li className="nav-item list-styled">
            <Link to="/author" className="nav-link">Authors</Link>
          </li>
          <li className="nav-item top-nav">
            <Link to="/publisher" className="nav-link">Publishers</Link>
          </li>
          <li className="nav-item top-nav">
            <Link to="/bookForm" className="nav-link">AddBook</Link>
          </li>

          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link"
              id="genreDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              GENRES
            </button>
            <ul className="dropdown-menu text-uppercase" aria-labelledby="genreDropdown">
              <li><Link to="/genre/1" className="dropdown-item">Fantasy</Link></li>
              <li><Link to="/genre/2" className="dropdown-item">Superhero</Link></li>
              <li><Link to="/genre/3" className="dropdown-item">Mystery</Link></li>
              <li><Link to="/genre/4" className="dropdown-item">Psychological</Link></li>
              <li><Link to="/genre/5" className="dropdown-item">Horror</Link></li>
              <li><Link to="/genre/6" className="dropdown-item">Children's Literature</Link></li>
              <li><Link to="/genre/7" className="dropdown-item">Comedy</Link></li>
              <li><Link to="/genre/8" className="dropdown-item">Action</Link></li>
              <li><Link to="/genre/9" className="dropdown-item">Dark Fantasy</Link></li>
              <li><Link to="/genre/10" className="dropdown-item">Adventure</Link></li>
              <li><Link to="/genre/12" className="dropdown-item">Shonen</Link></li>
              <li><Link to="/genre/13" className="dropdown-item">Historical</Link></li>
              <li><Link to="/genre/14" className="dropdown-item">Martial Arts</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link"
              id="formatDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              FORMATS
            </button>
            <ul className="dropdown-menu text-uppercase" aria-labelledby="formatDropdown">
              <li><Link to="/format/1" className="dropdown-item">Physical</Link></li>
              <li><Link to="/format/2" className="dropdown-item">E-Book</Link></li>
              <li><Link to="/format/3" className="dropdown-item">Audio</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
