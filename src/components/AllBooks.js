import { useState, useEffect } from "react";
import { useParams } from "react-router"
import axios from "axios";

import BooksCard from "./BooksCard";
import Header from "./Header";

const AllBooks =({ books })=> {


    const cardComponents = books.map(book => {

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
        <main className="main" id="allHeroesMain">
            <div className="container">
                { <Header />}
                <section className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-5">
                    { cardComponents }
                </section>
            </div>
        </main>
    )
}


export default AllBooks;