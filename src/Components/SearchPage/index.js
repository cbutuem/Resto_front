import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../API/Api";


export function SearchResults(props) {

    console.log(props.test)

    const [results, setResults] = useState([])


    useEffect(() => {
        async function fetchResults() {
            const response = await api.get("/restaurant/all-restaurants")
            setResults(response.data)
        }
        fetchResults();
    }, []);


    return (
        <div>
            
            <h1>Restaurantes Encontrados:</h1>

            
        {results.filter((result) => {
            return (result.name).toLocaleLowerCase().includes(props.test)}).map((result) => {
                return (                    
                
                        <Link to={`/restaurantpage/${result._id}`}><p>{result.name}</p></Link>
                        
        )})}

        {results.filter((result) => {
            return (result.city).toLocaleLowerCase().includes(props.test)}).map((result) => {
                return (                    
                    <Link to={`/restaurantpage/${result._id}`}><p>{result.name}</p></Link>
        )})}

        {results.filter((result) => {
            return (result.foodCategory).includes(props.test)}).map((result) => {
                return (
                                  
                    <Link to={`/restaurantpage/${result._id}`}><p>{result.name}</p></Link>
                    
        )})}
            
        </div>

    );
}