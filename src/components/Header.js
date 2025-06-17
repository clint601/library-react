import Nav from './Nav';



const Header =()=> {

    return(
        <header className="header" id="header">
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;