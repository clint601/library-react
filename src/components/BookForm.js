import { useState, useEffect } from "react"
import axios from "axios"

const BookForm =(props)=> {

    const [ authors, setAuthors ] = useState([])
    const [ publishers, setPublishers ] = useState([])

    useEffect(()=> {
        const authUrl = 'http://localhost:3005/api/author'
        const publiUrl = 'http://localhost:3005/api/publisher'

        axios.get(authUrl).then(res => setAuthors(res.data))
        axios.get(publiUrl).then(res => setPublishers(res.data))
    }, [])

    const authorDivs = authors.map(author => {
        return (
            <div className="form-check form-check-inline " key={author.author_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="author_id"
                    defaultValue={author.author_id}
                    id={author.author}
                    onChange={props.handleChange}
                    required
                />
                <label className="form-check-label" htmlFor={author.author}>
                    {author.author}
                </label>
            </div>
        )
    })

    
    const publisherDivs = publishers.map(publisher => {
        return (
            <div className="form-check form-check-inline" key={publisher.publisher_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="publisher_id"
                    defaultValue={publisher.publisher_id}
                    id={publisher.publisher}
                    onChange={props.handleChange}
                    required
                />
                <label className="form-check-label" htmlFor={publisher.publisher}>
                    {publisher.publisher}
                </label>
            </div>
        )
    })

    return(
        <>
        { props.isPostSuccess.isSuccess ? <Success /> :
        <main className="main" id="bookFormMain">
            <div className=" book-container container">
                <form className="book-form form " onSubmit={ props.handleSubmit }>
                    <div className="row mb-3">
                        <h5 className="mt-4 mb-3 border-bottom pb-2">📘 Book Details</h5>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="bookTitle" className="form-label">Title</label>
                            <input 
                                id="bookTitle" 
                                type="text"
                                className="form-control" 
                                name="title"
                                value={props.formData.title}
                                onChange={props.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="copyrightYear" className="form-label">Copyright year</label>
                            <input 
                                id="copyrightYear" 
                                type="number"
                                className="form-control" 
                                name="copyright_year"
                                min="1900"
                                max="2035"
                                step="1"
                                value={props.formData.copyright_year}
                                onChange={props.handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="edition" className="form-label">Edition</label>
                            <input
                                id="edition"
                                type="text"
                                className="form-control"
                                name="edition"
                                value={props.formData.edition}
                                onChange={props.handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="editionYear" className="form-label">Edition Year</label>
                            <input
                                id="editionYear"
                                type="number"
                                className="form-control"
                                name="edition_year"
                                min="1900"
                                max="2050"
                                step="1"
                                value={props.formData.edition_year}
                                onChange={props.handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="Rating" className="form-label rating-text mt-3">Rating 1-5</label>
                            <input
                                id="Rating"
                                type="number"
                                className="form-control"
                                name="rating"
                                min="1"
                                max="5"
                                step="1"
                                value={props.formData.rating}
                                onChange={props.handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <div className="binding-box">
                                <p className="form-text">Binding</p>
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="binding"
                                    defaultValue="paperback"
                                    id="pbBinding"
                                    onChange={props.handleChange}
                                    required
                                />
                                <label className="form-check-label" htmlFor="pbBinding">Paper-back</label>
                                </div>
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    defaultValue="hardback"
                                    name="binding"
                                    id="hbBinding"
                                    onChange={props.handleChange}
                                    required
                                />
                                <label className="form-check-label" htmlFor="hbBinding">Hard-back</label>
                                </div>
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    defaultValue="e-book"
                                    name="binding"
                                    id="ebBinding"
                                    onChange={props.handleChange}
                                    required
                                />
                                <label className="form-check-label" htmlFor="ebBinding">E-Book</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="bookLanguage" className="form-label">Language</label>
                            <input 
                                id="bookLanguage" 
                                type="text"
                                className="form-control" 
                                name="language"
                                value={props.formData.language}
                                onChange={props.handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="numPages" className="form-label">Number of Pages</label>
                            <input 
                                id="numPages" 
                                type="number"
                                className="form-control" 
                                name="num_pages"
                                value={props.formData.num_pages}
                                onChange={props.handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="Quantity" className="form-label">Quantity</label>
                            <input 
                                id="Quantity" 
                                type="number"
                                className="form-control" 
                                name="qty"
                                min="1"
                                max="1000"
                                value={props.formData.qty}
                                onChange={props.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="author-box">
                                <h5 className="mt-4 mb-3 border-bottom pb-2">🖊️ Authors</h5>
                                { authorDivs }
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="species-box">
                                <h5 className="mt-4 mb-3 border-bottom pb-2">🏢 Publishers</h5>
                                { publisherDivs }
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Image</span>
                                <input
                                    className="form-control image-form"
                                    type="file"
                                    name="cover_image"
                                    onChange={props.handleChange}
                                    value={props.cover_image}
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row button-row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary addbook-btn">Add Book</button>
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
    return (
        <div className="container">
            <h2>Book was successfully added.</h2>
        </div>
    )
}

export default BookForm