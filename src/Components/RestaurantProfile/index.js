import { useContext, useEffect, useState } from "react";
import { api } from "../../API/Api";


export function RestaurantProfile() {

    const [restaurant, setRestaurant] = useState({});
    const [profile, setProfile] = useState();




    useEffect(() => {
        const usuario = localStorage.getItem("loggedInUser");
        const format = JSON.parse(usuario);
        setRestaurant(format.user)

        // async function fetchUser() {
        //     const response = await api.get("/restaurant/profile");
        //     setRestaurant(response.data);
        // }
        // fetchUser();
    }, []);

    return (
        <div>
            <div className= "PerfilRestaurante">
            <h1><strong>Olá </strong> {restaurant.name}</h1>
            <p><img src={restaurant.imgUser} alt="restaurant picture"/></p>
            <p><strong>Endereço de E-mail:</strong> {restaurant.email}</p>
            <p><strong>Endereço:</strong> {restaurant.address}</p>
            <p><strong>Cidade:</strong> {restaurant.city}</p>
            {/* <p>Tipos de culinária favoritos: {restaurant.foodCategory}</p> */}
            </div>
        </div>    
    )
}
