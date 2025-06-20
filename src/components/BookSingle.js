import { useState, useEffect } from "react"
import { useParams } from "react-router"
import  axios  from "axios"

const BookSingle =()=> {

    const [ book, setbook] = useState({})
    const [ genres, setGenres] = useState([])
    const [ formats, setFormats] = useState([])


    const params = useParams()

    useEffect(()=> {
        const url = `http://localhost:3005/api/book/${params.id}`

        axios.get(url).then(res => {
            setbook(res.data)
            setGenres(res.data.genres)
            setFormats(res.data.formats)
        })
    }, [])



    const genresListItems = genres.map(genre => {
        return <li key={ genre } className="list-item genre-item">{ genre }</li>
    })

    const formatsListItems = formats.map(format => {
        return <li key={ format } className="list-item format-item">{ format }</li>
    })





    return (
        
        <main className="main" id="bookSingle">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="book-single-heading text-capitalize book-title">{book.title}</h2>
                        <img src={`/images/${book.cover_image}`} alt={book.title} className="img-fluid image card-img-top book-cover" />
                        
                    </div>
                    <div className="col">
                        <h3 className="book-info text-capitalize">info</h3>
                        <ul className="book-info-list list-group list-group-flush">
                            <li className="list-group-item">Author: {`${book.author}`}</li>
                            <li className="list-group-item">Publisher: {`${book.publisher}`}</li>
                            <li className="list-group-item">Copyright Year: {`${book.copyright_year}`}</li>
                            <li className="list-group-item">Edition: {`${book.edition}`}</li>
                            <li className="list-group-item">Edition Year: {`${book.edition_year}`}</li>
                            <li className="list-group-item">Binding: {`${book.binding}`}</li>
                            <li className="list-group-item">Language: {`${book.language}`}</li>
                            <li className="list-group-item">Rating: {`${book.rating}`}</li>
                            <li className="list-group-item">Num of Pages: {`${book.num_pages}`}</li>
                            <li className="list-group-item">Quantity: {`${book.qty}`}</li>
                            { genres.length && <li className="list-group-item">
                                Genres:
                                <ul className="genres-list">
                                    { genresListItems }
                                </ul>
                            </li>} 
                            { formats.length && <li className="list-group-item">
                                Formats:
                                <ul className="formats-list">
                                    { formatsListItems }
                                </ul>
                            </li>} 
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    
    )
}

export default BookSingle