
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../API/Api"
export function Login(){
    const navigate = useNavigate();

    const [profile, setProfile] = useState('user');

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log("HUNT",form);
    }

    function userClick(){
        setProfile('user')
    
    }

    function restaurantClick(){
        setProfile('restaurant')
       
    }

    async function handleSubmit(event){
        event.preventDefault()
        
        if(profile === 'user'){
            try{
                await api.post("/user/login", form)
                navigate("/homeuser")

            }catch(error){console.log(error)}
        } 

        if(profile === 'restaurant'){
            try{
                await api.post("/restaurant/login", form)
                navigate("/restaurantuser")

            }catch(error){console.log(error)}
        }
    }
   
    
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
               
                <input type="radio" name="type" onClick={userClick} placeholder="usuario"/>  Sou usuário
            
               
                <input type="radio" name="type" onClick={restaurantClick} placeholder="usuario" /> <br/> Sou restaurante
                
                <button type="submit" onClick={handleSubmit}>Entrar</button>
            </form>

            
            <p><Link to="/signup/user">Cadastrar</Link></p>
            <Link to="/singip/restaurant">Cadastrar restaurante</Link>

        </>
    );
}