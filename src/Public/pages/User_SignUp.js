import style from "./Forms.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../API/Api";

export function User_SignUp(props){
    const navigate = useNavigate();
    const [cat, setCat] = useState([])
    const [date, setDate] = useState({
        day:"",
        month:"",
        year:"",
    });
    const [form, setForm] = useState({
        name: "",
        // birth: "",
        email: "",
        password: "",
        city: "",
        favType: [],
        imgUser: ""
    });

    const [img, setImg] = useState("");

    function handleDate(event){
        setDate({ ...date, [event.target.name]: event.target.value });
        setForm({ ...form, 'birth': `${date.year}-${date.month}-${date.day}`});
        console.log(form);
    }
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log("HUNT",form);
    }

    function handleImage(event) {
        setImg(event.target.files[0]);
    }

    async function handleUpload() {
        try {
            const uploadData = new FormData();
            uploadData.append("picture", img);

            const response = await api.post("/image/upload-image", uploadData);
            return response.data.url;

        }   catch (error) {
            console.log(error);
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
        const imgURL = await handleUpload();
        await api.post("/user/signup", { ...form, imgUser: imgURL,favType: cat });
        navigate("/login");

    }   catch (error) {
        console.log(error);
    }};

    function handleclick(event){
        const inicial = [...cat]
           if(inicial.includes(event.target.value)){
                const index = inicial.indexOf(event.target.value)
                inicial.splice(index,1)
                setCat(inicial)
            }else{
                inicial.push(event.target.value)
                setCat(inicial)
            }
            console.log(cat, "cat final")
        }
    return(
        <>
            <div className = {style.boxForm}>
                <form  onSubmit={handleSubmit}>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Nome</label>
                        <input className = {style.inputSize} name="name" value={form.name} onChange={handleChange}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Data de Nascimento</label>
                        <input className = {style.data} placeholder="dia" name="day"  onChange={handleDate}></input>
                        <input className = {style.data} placeholder="mes" name="month"  onChange={handleDate}></input>
                        <input className = {style.data} placeholder="ano" name="year"  onChange={handleDate}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Email</label>
                        <input className = {style.inputSize} name="email" value={form.email} onChange={handleChange}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Cidade</label>
                        <input className = {style.inputSize} name="city" value={form.city} onChange={handleChange}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Gastronomia favorita</label>
                        <input className = {style.inputSize} placeholder="Gastronomia favorita"
                            name="foodType1"
                            value={cat}
                            onChange={handleChange}
                        />
                        <button type= "button" onClick={handleclick} value="Japones">Japones</button>
                        <button type= "button" onClick={handleclick} value="Italiana">Italiana</button>
                        <button type= "button" onClick={handleclick} value="Coreana"> Coreana</button>         
                    </span>
                    
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Senha</label>
                        <input 
                            className = {style.inputSize} 
                            type="password"
                            name='password'
                            onChange={handleChange}>
                        </input>
                    </span>
                    
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Foto de perfil</label>
                        <input className = {style.inputSize}   
                            id="formimgUser"
                            name="imgUser"
                            type="file"
                            onChange={handleImage}></input>
                    </span>

                    <button type="submit">Criar Conta</button>
                </form>
            </div>  
        </>
    );

}