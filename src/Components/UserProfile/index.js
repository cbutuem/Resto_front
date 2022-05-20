import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../API/Api";
import { EditUser } from "../EditUser";



export function UserProfile() {

    const navigate = useNavigate();

    const [dialogChangeItem, setdialogChangeItem] = useState(false)

    function dialogHandleclick() {
        setdialogChangeItem(true);
    }


    const [user, setUser] = useState({});
    const [profile, setProfile] = useState();
    const [form, setForm] = useState({
        name: "",
        city: "",
    })

    console.log(user)
    console.log(profile)


    useEffect(() => {
        const usuario = localStorage.getItem("loggedInUser");
        const format = JSON.parse(usuario);
        setUser(format.user)

        async function fetchUser() {
            const response = await api.get("/user/user-profile", user);
            setProfile(response.data);
            setForm({ name: response.data.name });
        }
        fetchUser();

    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
        // const imgURL = await handleUpload();
        await api.patch("/user/update-profile", { ...form });
        navigate("/user-profile");
        setdialogChangeItem(false);

    }   catch (error) {
        console.log(error);
    }};

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(user)
    }

    return (
        <div>
            <h1>Perfil do Usuário</h1>
            <p>Imagem: <img src={user.imgUser} alt="user picture"/></p>
            <p>Nome: {user.name}</p>
            <p>Endereço de E-mail: {user.email}</p>
            <p>Data de Nascimento: {user.birth}</p>
            <p>Cidade: {user.city}</p>
            <p>Tipos de culinária favoritos: {user.favType}</p>
            <button onClick={dialogHandleclick}>Editar Seus Dados</button>
            {/* <EditUser 
                dialogChangeItem={dialogChangeItem} 
                setdialogChangeItem={setdialogChangeItem} 
                name={user.name}
                
                city={user.city}
                favType={user.favType}

            /> */}
            {dialogChangeItem && (
                <>
                <form >
                    <input onChange={handleChange} value={form.name} name="name" />
                    <input onChange={handleChange} value={form.city} name="city" />
                    <button type="submit" onSubmit={handleSubmit} >Confirmar mudanças</button>
                </form>

                </>
            )}
        </div>
    )
}
