

import { Link } from "react-router"


const PublisherCard =(props)=> {

    return (
        <div className="col">
            <div className="card author-card h-100">
                <img src="https://placehold.co/50x50"alt="placeholder img" class="img-fluid image" />
                
                <div className="card-body">
                    <h2 className="card-title text-capitalize">{props.title}</h2>
                </div>
                
            <footer className="card-footer">
                    View <Link to={`/publisher/${props.id}`} className="bookSingle-link link-unstyled">books</Link> by this Publisher
                </footer>
            </div>
        </div>
    )
}



export default PublisherCard 