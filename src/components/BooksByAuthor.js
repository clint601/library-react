
import { useState, useEffect } from "react"

import { useParams } from "react-router"

import axios from "axios"


import Header from "./Header"
import BooksCard from "./BooksCard"



const BooksByAuthor =()=> {


    const [ bookauthor, setBookAuthor ] = useState([])

    const params = useParams()

    useEffect(()=> {
        const url = `http://localhost:3005/api/author/author/${params.id}`
        axios.get(url).then(res => setBookAuthor(res.data))
    }, [])

    const cardComponents = bookauthor.map(book => {

        return (

            <BooksCard
            key={book.book_id}
            id={book.book_id}
            title={book.title}
            cover_image={book.cover_image}
            
            
            />
        )
    })


    return (
        <main className="main" id="main">
            <div className="container">
                <h2 className="text-capitalize text-capitalize">books by author</h2>
                <section className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-5">
                    { cardComponents }
                </section>
            </div>
        </main>
    )
}



export default BooksByAuthor