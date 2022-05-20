import style from "../../Components/Forms.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../API/Api";
import Rating from "../components/Rating"

export function Review(props){
    const navigate = useNavigate();
    const [cat, setCat] = useState([])
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
        await api.post("/user/idRestaurante", { ...form, img: imgURL });
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
                        <label className = {style.titleCat}>Tags</label>
                        <input className = {style.inputSize} placeholder="Gastronomia favorita"
                            name="foodType1"
                            value={cat}
                            onChange={handleChange}
                        />
                        <button type= "button" onClick={handleclick} value="Romantico">Romantico</button>
                        <button type= "button" onClick={handleclick} value="Bom e Barato">Bom e Barato</button>
                        <button type= "button" onClick={handleclick} value="Ar livre">Ar livre</button>         
                    </span>
                    
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Comentario</label>
                        <input 
                            className = {style.inputSize} 
                            type="comentario"
                            name='comentario'
                            onChange={handleChange}>
                        </input>
                    </span>
                    <Rating/>
                    <span className= {style.lineBox}>
                        <label className = {style.titleCat}>Foto do prato</label>
                        <input className = {style.inputSize}   
                            id="formimgUser"
                            name="imgUser"
                            type="file"
                            onChange={handleImage}></input>
                    </span>

                    <button type="submit">Avaliar</button>
                </form>
            </div>  
        </>
    );

}