
import {useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import axios from "axios";
import { useParams } from "react-router"


import Header from "./components/Main";
import Main from "./components/Header";
import Footer from "./components/Footer";
import AllBooks from "./components/AllBooks";
import BookSingle from "./components/BookSingle";
import AllAuthors from "./components/AllAuthors";
import BooksByAuthor from "./components/BooksByAuthor";
import AllPublisher from "./components/AllPublisher";
import BooksByGenre from "./components/BooksByGenre";




import Error from "./components/Error";



const App =()=> {

    const [ books, setBooks ] = useState([])

    useEffect(()=> {

            const url = 'http://localhost:3005/api/book'

            axios.get(url).then(res => setBooks(res.data))
    }, [])


    const [ authors, setAuthors ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/author'

        axios.get(url).then(res => setAuthors(res.data))
    }, [])


    const [ publishers, setPublisher ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/publisher'

        axios.get(url).then(res => setPublisher(res.data))
    }, [])


    const [ bookgenre, setBookGenre ] = useState([])

const params = useParams()


//////////////////////////
useEffect(()=> {
    const url = `http://localhost:3005/api/genre/genre/${params.id}`
    axios.get(url).then(res => setBookGenre(res.data))
}, [])
///////////////////////////////





    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={ <Main />} />

            <Route path="/book" element={ <AllBooks books={books} />} />
            <Route path="/book/:id" element={ <BookSingle /> } />

            <Route path="/author" element={ <AllAuthors authors={authors} />} />
            <Route path="/author/:id" element={ <BooksByAuthor />} />


        <Route path="/publisher" element={ <AllPublisher publishers={publishers} />} />

        <Route path="/genre/:id" element={ <BooksByGenre />} />
        {/* <Route path="/author/:id" element={ <BooksByAuthor />} /> */}




            <Route path="*" element={ <Error />} />
        </Routes>
        <Footer />
        
        
        </>
    )
}




export default App;