import {React, useContext, useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { api } from "../../API/Api"
import { Link } from "react-router-dom"

export function RestaurantPage(){

    const {restaurantId} = useParams()
    const [restaurant, setRestaurant] = useState({})

    useEffect(()=>{
        async function fetchRestaurant(){
            try{
                const response = await api.get(`/restaurant/profile/${restaurantId}`)
                setRestaurant(response.data)
        
            }catch(error){console.log(error)}
        }

        fetchRestaurant()
    },[])


    return(
        <>
            <img src={restaurant.imgUser} alt='restaurant'/>
            <h1>{restaurant.name}</h1>
            <h3>{restaurant.city}</h3>
            <Link to={`/booking/${restaurantId}`}>Agendar</Link>

        </>
    )
}