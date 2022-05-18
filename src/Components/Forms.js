import style from "./Forms.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../API/Api";

export function Forms(props){
    const navigate = useNavigate();
    const [cat, setCat] = useState([])
    const [date, setDate] = useState({
        dia:"",
        mes:"",
        ano:"",
    });
    const [form, setForm] = useState({
        name: "",
        birth: ``,
        email: "",
        password: "",
        city: "",
        favType: [],
        imgUser: ""
    });

    const [img, setImg] = useState("");

    function handleDate(event){
        setDate({ ...date, [event.target.name]: event.target.value });
        setForm({ ...form, 'birth': `${date.ano}-${date.mes}-${date.dia}`});
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
                        <input className = {style.inputSize}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Data de Nascimento</label>
                        <input className = {style.data} placeholder="dia" name="dia" value={date.dia} onChange={handleDate}></input>
                        <input className = {style.data} placeholder="mes" name="mes" value={date.mes} onChange={handleDate}></input>
                        <input className = {style.data} placeholder="ano" name="ano" value={date.ano} onChange={handleDate}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Email</label>
                        <input className = {style.inputSize}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Cidade</label>
                        <input className = {style.inputSize}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Gastronomia favorita</label>
                        <input className = {style.inputSize} placeholder="Gastronomia favorita"
                            name="foodType1"
                            value={cat}
                            onChange={handleChange}
                        />
                        <button type= "button" onClick={()=> {

                            if(cat.includes("Japones")){
                                const index = cat.indexOf("Japones"); 
                                setCat(...cat.splice(index,1));
                            }else{
                                setCat(...cat, "Japones")
                                }
                            console.log(cat);
                            }}>Japones</button>
                        <button type= "button" onClick={(event)=> setCat("Italiana")} value={form.favType = cat} name="favType" >Italiana</button>
                        <button type= "button" onClick={(event)=> setCat("Coreana")} value={form.favType = cat} name="favType" > Coreana</button>

                            
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Senha</label>
                        <input className = {style.inputSize}></input>
                    </span>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Senha</label>
                        <input className = {style.inputSize}   
                            id="formimgUser"
                            name="imgUser"
                            type="file"
                            value={form.imgUser}
                            onChange={handleChange}></input>
                    </span>

                    <button type="submit">Criar Conta</button>
                </form>
            </div>  
        </>
    );

}