
import PublisherCard from "./PublisherCard"


const AllPublisher =({ publishers })=> {

    const PublisherComponents = publishers.map(publisher => {
        return (
            <PublisherCard 
            key={publisher.publisher_id}
            id={publisher.publisher_id}
            title={publisher.publisher}
            img_url={publisher.img_url}
            />
        )
    })




    return (
        <main className="main" id="allHeroesMain">
            <div className="container">
                
                <section className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-5">
                    { PublisherComponents }
                </section>
            </div>
        </main>
    )
}


export default AllPublisher