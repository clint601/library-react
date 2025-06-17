import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BooksCard from "./BooksCard";


const BooksbyPublisher =()=> {

    const [bookpublisher, setBookPublisher ] = useState([])

    const params = useParams()

    useEffect(()=> {
        const url = `http://localhost:3005/api/publisher/publisher/${params.id}`
        axios.get(url).then(res => setBookPublisher(res.data))
    }, [])

    console.log(bookpublisher)

    const BookCardComponents = bookpublisher.map(book => {
        return (
            <BooksCard
                key={book.book_id}
                id={book.book_id}
                title={book.title}
                cover_image={book.cover_image}
            />
        )
    })

    return(
        <main className="main" id="booksbypublisherMain">
            <div className="container">
                <h2 className="text-capitalize publisher-heading text-capitalize">books by publisher</h2>
                <div className="row row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    { BookCardComponents }
                </div>
            </div>
        </main>
    )
}

export default BooksbyPublisher