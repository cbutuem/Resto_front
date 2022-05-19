import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../API/Api";


export function UserSignup() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        birth: "",
        email: "",
        password: "",
        city: "",
        favType: "",
        imgUser: ""
    });

    const [img, setImg] = useState("");

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleImage(event) {
        setImg(event.target.files[0]);
    }

    async function handleUpload() {
        try {
            const uploadData = new FormData();
            uploadData.append("picture", img);

            const response = await api.post("/upload-user-image", uploadData);
            return response.data.url;

        }   catch (error) {
            console.log(error);
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();

       try {
        const imgURL = await handleUpload();
        await api.post("/user/signup", { ...form, img: imgURL });
        navigate("/login");

    }   catch (error) {
        console.log(error);
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="formName">Nome:</label>
            <input
                id="formName"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="formBirth">Data de Nascimento:</label>
            <input
                id="formBirth"
                name="birth"
                type="date"
                value={form.birth}
                onChange={handleChange}
            />
            <label htmlFor="formEmail">E-mail:</label>
            <input
                id="formEmail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
            />
            <label htmlFor="formPassword">Senha:</label>
            <input
                id="formPassword"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
            />
            <label htmlFor="formCity">Cidade:</label>
            <input
                id="formCity"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
            />
            <label htmlFor="formfavType">Selecione sua culinária favorita:</label> {/* Discutir com o grupo! */}
            <input
                id="f"
                name="foodType1"
                type="checkbox"
                value={form.favType}
                onChange={handleChange}
            />
            <label htmlFor="formimgUser">Selecione uma foto para o seu perfil:</label>
            <input
                id="formimgUser"
                name="imgUser"
                type="file"
                value={form.imgUser}
                onChange={handleChange}
            />

            <button type="submit">Criar Conta</button>

        </form>

    )
}