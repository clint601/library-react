import { useEffect } from "react"
import AllBooks from "./AllBooks"

const Home =(props)=> {
    
    useEffect(()=> {
        props.resetData()
    }, [])
    
    return (
        <main className="main">
            <div className="container">
                
            </div>
        </main>
    )
}

export default Home