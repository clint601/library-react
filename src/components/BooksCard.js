import { Link } from "react-router"

const BooksCard =(props)=> {

    return (
        <div className="col">
            <div className="card h-75">
                <img src={`/images/${props.cover_image}`}alt={props.title} className="img-fluid image card-img-top h-100" />
                {/* <div className="card-body">
                <h3 className="card-title">{props.title}</h3>

                </div> */}
            <footer className="card-footer">
                <Link to={`/book/${props.id}`}>view more</Link>
            </footer>
            </div>
        </div>
    )
}

export default BooksCard;