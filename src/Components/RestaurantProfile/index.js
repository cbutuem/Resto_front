import { useContext, useEffect, useState } from "react";
import { api } from "../../API/Api";
// import { AuthContext } from "../../Contexts/authContexts";

export function RestaurantProfile() {

    // const { loggedInUser } = useContext(AuthContext);
    const [restaurant, setRestaurant] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        async function fetchUser() {
            const response = await api.get("/restaurant/profile");
            setRestaurant(response.data);
        }
        fetchUser();
    }, []);

    return 
        <div>
            <h1>Perfil do Restaurante</h1>
            <p>Imagem: {restaurant.imgUser}</p>
            <p>Nome: {restaurant.name}</p>
            <p>Endereço de E-mail: {restaurant.email}</p>
            <p>Endereço: {restaurant.address}</p>
            <p>Cidade: {restaurant.city}</p>
            <p>Tipos de culinária favoritos: {restaurant.foodCategory}</p>
        </div>
    
}
