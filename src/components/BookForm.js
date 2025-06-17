import { useState, useEffect} from 'react'
import axios from 'axios'

const BookForm =(props)=> {

    const [ authors, setAuthors ] = useState([])
    const [ species, setSpecies ] = useState([])

    useEffect(()=> {
        const authUrl = 'http://localhost:3005/api/author'
        // const specUrl = 'http://localhost:3005/api/species'

        axios.get(authUrl).then(res => setAuthors(res.data))
        // axios.get(specUrl).then(res => setSpecies(res.data))
    }, [])

    const Authorbk = authors.map(author => {
        return (
            <div className="form-check form-check-inline" key={author.author_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="author_id"
                    defaultValue={author.author_id}
                    id={author.author}
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor={author.author}>
                    {author.author}
                </label>
            </div>
        )
    })

    // const speciesDivs = species.map(species => {
    //     return (
    //         <div className="form-check form-check-inline" key={species.species_id}>
    //             <input
    //                 className="form-check-input"
    //                 type="radio"
    //                 name="species_id"
    //                 defaultValue={species.species_id}
    //                 id={species.species}
    //                 onChange={props.handleChange}
    //             />
    //             <label className="form-check-label" htmlFor={species.species}>
    //                 {species.species}
    //             </label>
    //         </div>
    //     )
    // })

    return(
        <>
        { props.isPostSuccess.isSuccess ? <Success /> :
        <main className="main" id="bookFormMain">
            <div className="container">
                <form className="book-form form" onSubmit={ props.handleSubmit }>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="title" className="form-label">Book Title</label>
                            <input 
                                id="title" 
                                type="text"
                                className="form-control" 
                                name="hero_name"
                                value={props.formData.title}
                                onChange={props.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="pick-author">
                                <p className="form-text">Authors</p>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="author" 
                                        defaultValue="BOOK" 
                                        id="bookAuthor" 
                                        onChange={props.handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="heroAlignment">Hero</label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio"
                                        defaultValue="VILLAIN" 
                                        name="alignment" 
                                        id="villainAlignment"
                                        onChange={props.handleChange} 
                                    />
                                    <label className="form-check-label" htmlFor="villainAlignment">Villain</label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="alignment" 
                                        defaultValue="ANTIHERO"
                                        id="antiheroAlignment" 
                                        onChange={props.handleChange}   
                                    />
                                    <label className="form-check-label" htmlFor="antiheroAlignment">Antihero</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="franchise-box">
                                <p className="form-text">Franchise</p>
                                { Authorbk }
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="species-box">
                                <p className="form-text">Species</p>
                                {/* { speciesDivs } */}
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Image</span>
                                <input 
                                    className="form-control"
                                    type="file"
                                    name="img_url"
                                    onChange={props.handleChange}
                                    value={props.img_url}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row button-row">
                    <div className="col">
                        <button className="btn btn-dark">Add Hero</button>
                    </div>
                    </div>
                </form>
            </div>
        </main>
        }
        </>
    )
}


    const Success =()=> {
        return(
        <div className="container">
            <h2>Hero was Succesfully added.</h2>
        </div>
        )

}

export default BookForm