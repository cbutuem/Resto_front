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
            <h1>Perfil do Restaurante</h1>
            <p>Imagem: <img src={restaurant.imgUser} alt="restaurant picture"/></p>
            <p>Nome: {restaurant.name}</p>
            <p>Endereço de E-mail: {restaurant.email}</p>
            <p>Endereço: {restaurant.address}</p>
            <p>Cidade: {restaurant.city}</p>
            {/* <p>Tipos de culinária favoritos: {restaurant.foodCategory}</p> */}
        </div>    
    )
}
