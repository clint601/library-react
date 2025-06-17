
import {useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import axios from "axios";
import { useParams } from "react-router"


import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AllBooks from "./components/AllBooks";
import BookSingle from "./components/BookSingle";
import AllAuthors from "./components/AllAuthors";
import BooksByAuthor from "./components/BooksByAuthor";
import BooksbyPublisher from "./components/Booksbypublisher";
import AllPublisher from "./components/AllPublisher";
import BooksByGenre from "./components/BooksByGenre";
import BooksByFormat from "./components/BooksByFormat";
import BookForm from "./components/BookForm";




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

        const [ formData, setFormData ] = useState({
            title: '',
            author_id: 0,
            publisher_id: 0,
            copyright_year: '',
            edition: '',
            edition_year: '',
            binding: '',
            rating: '',
            language: '',
            num_pages: '',
            cover_image: ''
    })

    const [ isPostSuccess, setIsPostSuccess] = useState({
        isSuccess: false,
        id: 0
    })

    const resetData=()=> {
        setIsPostSuccess({
            isSuccess: false,
            id: 0
        })

        setFormData({
            title: '',
            author_id: 0,
            publisher_id: 0,
            copyright_year: '',
            edition: '',
            edition_year: '',
            binding: '',
            rating: '',
            language: '',
            num_pages: '',
            cover_image: ''
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        // console.log(formData)

        axios({
            method: 'post',
            url: 'http://localhost:3005/api/book/post',
            data: formData
        }).then(response => {
            setIsPostSuccess({isSuccess: true, id: response.data.Last_id})
        })
    }

    const handleChange =(event)=> {
        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }


    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={ <Main />} />

            <Route path="/book" element={ <AllBooks books={books} />} />
            <Route path="/book/:id" element={ <BookSingle /> } />

            <Route path="/author" element={ <AllAuthors authors={authors} />} />
            <Route path="/author/:id" element={ <BooksByAuthor />} />

            <Route 
                    path="/bookForm" 
                    element={ <BookForm 
                        handleSubmit={ handleSubmit } 
                        handleChange={handleChange} 
                        formData={formData}  
                        isPostSuccess={isPostSuccess}
                    />} 
                />


    <Route path="/format/:id" element={ <BooksByFormat />} />

        <Route path="/publisher" element={ <AllPublisher publishers={publishers} />} />
        <Route path="/publisher/:id" element={ <BooksbyPublisher />} />

        <Route path="/genre/:id" element={ <BooksByGenre />} />
        {/* <Route path="/author/:id" element={ <BooksByAuthor />} /> */}




            <Route path="*" element={ <Error />} />
        </Routes>
        <Footer />
        
        
        </>
    )
}




export default App;