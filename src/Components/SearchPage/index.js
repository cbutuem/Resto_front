import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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

            <ul>
        {results.filter((result) => {
            return (result.name).toLocaleLowerCase().includes(props.test)}).map((result) => {
                return (                    
                    <li key={result.id}>
                        <p>{result.name}</p>
                        <p>{result.cidade}</p>
                        {/* <p><img src={require(result.imgUser)} alt='imagem restaurante'/></p> */}
                    </li>
        )})}

        {results.filter((result) => {
            return (result.city).toLocaleLowerCase().includes(props.test)}).map((result) => {
                return (                    
                    <li key={result.id}>
                        <p>{result.name}</p>
                    </li>
        )})}

        {results.filter((result) => {
            return (result.foodCategory).includes(props.test)}).map((result) => {
                return (
                                  
                    <li key={result.id}>
                        <p>{result.name}</p>
                        <p></p>
                    </li>
                    
        )})}


            </ul>            
            
        </div>

    );
}