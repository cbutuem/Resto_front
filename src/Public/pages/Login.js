import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../API/Api"
export function Login(){
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log("HUNT",form);
    }

    useEffect(() => {
        async function fetchData(){
            const response = await api.get('restaurants/all-restaurants');
            setUser(response.data);
        }
        fetchData();
    },[])

    useEffect(() => {
        async function fetchData(){
            const response = await api.post('user/signup');
            setUser(response.data);
        }
        fetchData();
    },[])
    
    
    return(
        <>
            <form>
                <span >
                    <label >Email</label>
                    <input 
                        type="text"
                        name='email'
                        value={form.email}
                        onChange={handleChange}>
                    </input>
                </span>
                <span >
                    <label >Senha</label>
                    <input 
                        type="password"
                        name='password'
                        value={form.password}
                        onChange={handleChange}>
                    </input>
                </span>
                <label>oiii</label>
                <input type="radio" ></input>
                <button type="submit">Entrar</button>
                
            </form>
            <p><Link to="/signup/user">Cadastrar</Link></p>
            <Link to="/singip/restaurant">Cadastrar restaurante</Link>

        </>
    );
}