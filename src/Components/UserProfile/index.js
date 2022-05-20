import { useContext, useEffect, useState } from "react";
import { api } from "../../API/Api";


export function UserProfile() {


    const [user, setUser] = useState({});
    const [profile, setProfile] = useState();


    useEffect(() => {
        const usuario = localStorage.getItem("loggedInUser");
        const format = JSON.parse(usuario);
        setUser(format.user)

        async function fetchUser() {
            const response = await api.get("/user/user-profile", user);
            setProfile(response.data);
        }
        fetchUser();
    }, []);

    return (
        <div>
            <div className= "PerfilRestaurante">
                <h1><strong>Olá </strong>{user.name}</h1>
                <p><img src={user.imgUser} alt="user picture"/></p>
                <p><strong>E-mail:</strong>{user.email}</p>
                <p><strong>Data de Nascimento:</strong>{user.birth}</p>
                <p><strong>Cidade:</strong>{user.city}</p>
            {/* <p>Tipos de culinária favoritos: {user.favType}</p> Fazer Map */}
            </div>
        </div>
    )
}
