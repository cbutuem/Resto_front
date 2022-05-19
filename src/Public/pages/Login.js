import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../API/Api"
export function Login(){
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log("HUNT",form);
    }
    
    return(
        <>
            <form>
                <span >
                    <label >Email</label>
                    <input 
                        type="comentario"
                        name='comentario'
                        onChange={handleChange}>
                    </input>
                </span>
                <span >
                    <label >Senha</label>
                    <input 
                        type="comentario"
                        name='comentario'
                        onChange={handleChange}>
                    </input>
                </span>
                <button type="submit">Entrar</button>
            </form>
        </>
    );
}