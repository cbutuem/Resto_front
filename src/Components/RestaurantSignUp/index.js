import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../API/Api";


export function RestaurantSignup() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        address: "",
        city: "",
        email: "",
        password: "",
        foodCategory: "",
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

            const response = await api.post("/upload-restaurant-image", uploadData);
            return response.data.url;

        }   catch (error) {
            console.log(error);
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();

    }   try {
        const imgURL = await handleUpload();
        
        await api.post("/restaurant/signup", { ...form, img: imgURL });
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
            <label htmlFor="formAddress">Endereço:</label>
            <input
                id="formAddress"
                name="address"
                type="text"
                value={form.address}
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
            <label htmlFor="formFoodCategory">Selecione sua culinária favorita:</label> 
            <input
                id="formFoodCategory"
                name="foodType1"
                type="checkbox"
                value={form.foodCategory}
                onChange={handleChange}
            />
            <label htmlFor="formimgUser">Selecione uma foto para o seu restaurante:</label>
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