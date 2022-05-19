import { useContext, useEffect, useState } from "react";
import { api } from "../../API/Api";
// import { AuthContext } from "../../Contexts/authContexts";

export function UserProfile() {

    // const { loggedInUser } = useContext(AuthContext);
    const [user, setUser] = useState({
        name: "",
        email: ""
    });

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
            <p>Imagem: {user.imgUser}</p>
            <p>Nome: {user.name}</p>
            <p>Endereço de E-mail: {user.email}</p>
            <p>Data de Nascimento: {user.birth}</p>
            <p>Cidade: {user.city}</p>
            <p>Tipos de culinária favoritos: {user.favType}</p>
        </div>
    
}
