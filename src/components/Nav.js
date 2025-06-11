
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Nav =(props)=> {

    // const [ genres, setGenres ] = useState([])

    // console.log(genres)

    // useEffect(()=> {
    //     const url = 'http://localhost:3005/api/genre'
    //     axios.get(url).then(res => setGenres(res.data))
    // }, [])

    return (
        <nav className=" nav top-nav justify-content-center justify-content-md-evenly text-decoration-none text-uppercase">
            <ul className="top-nav">
            <li className="nav-item">
            <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/book">All Books</Link>
            </li>
            <li className="nav-item">
            <Link to="/author">Authors</Link>
            </li>
            <li className="nav-item">
            <Link to="/publisher">Publishers</Link>
            </li>
            <li className="nav-item">
            <Link to="#">Formats</Link>
            </li>
            <li className="nav-item dropdown ms-auto">
                            <button
                                className="nav-link dropdown-toggle btn btn-link ms-auto"
                                id="navbarDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Genres
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            

                                <li><Link to={`/genre/${props.id}`} className="dropdown-item text-end sm-end dropdown-link">Fantasy</Link></li>
                                <li><Link to={`/genre/${props.id}`} className="dropdown-item text-end sm-end dropdown-link">Superhero</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Mystery</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Psychological</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Horror</Link></li>
                                <li><Link to="#" className="dropdown-item dropdown-link">Children's Literature</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Comedy</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Action</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Dark Fantasy</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Adventure</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Supernatural</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Shonen</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Historical</Link></li>
                                <li><Link to="#" className="dropdown-item text-end sm-end dropdown-link">Martial Arts</Link></li>
                            </ul>
                        </li>
            </ul>
            
        </nav>
    )
}

export default Nav