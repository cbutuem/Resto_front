import { useContext, useEffect, useState } from "react";
import { api } from "../../API/Api";


export function UserProfile() {


    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchUser() {
            const response = await api.get("/user/user-profile");
            setUser(response.data);
        }
        fetchUser();
    }, []);

    return 
        <div>
            <h1>Perfil do Usuário</h1>
            <p>Imagem: <img src={user.imgUser} alt="user picture"/></p>
            <p>Nome: {user.name}</p>
            <p>Endereço de E-mail: {user.email}</p>
            <p>Data de Nascimento: {user.birth}</p>
            <p>Cidade: {user.city}</p>
            {/* <p>Tipos de culinária favoritos: {user.favType}</p> Fazer Map */}
        </div>
    
}
