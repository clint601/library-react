
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"


const BooksByGenre =()=> {



    const [ genres, setGenres ] = useState([])

    console.log(genres)

    useEffect(()=> {
        const url = 'http://localhost:3005/api/genre'
        axios.get(url).then(res => setGenres(res.data))
    }, [])



}

export default BooksByGenre