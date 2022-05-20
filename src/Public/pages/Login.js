
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../API/Api"
import style from "./login.module.css"
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
                const response = await api.post("/user/login", form)
                localStorage.setItem("loggedInUser", JSON.stringify(response.data))
                navigate("/user/user-profile")

            }catch(error){console.log(error)}
        } 


        if(profile === 'restaurant'){
            try{
                const response = await api.post("/restaurant/login", form)
                localStorage.setItem("loggedInUser", JSON.stringify(response.data))
                navigate("/restaurant/user-profile")

            }catch(error){console.log(error)}
        }
    }
   
    
    return(
        <>

            <div className={style.boxLogin}>
                <form>
                    <div className={style.boxInput}>
                        <div>
                            <span>
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
                        </div>  
                    </div>
                    <div className={style.boxRadio}>
                        <div>
                            <span className={style.boxRadioB}>Cliente</span>
                            <input type="radio" name="type" onClick={userClick} placeholder="usuario"
                            className={style.boxbar}
                            />
                        </div>  
                        <div>
                            <span className={style.boxRadioB}>Restaurante</span>
                            <input type="radio" name="type" onClick={restaurantClick} placeholder="usuario" 
                            className={style.boxbar}
                            />
                        </div>
                    </div>
                    <div className={style.boxBut}>
                        <button type="submit" onClick={handleSubmit}>Entrar</button>
                    </div>
                </form>


                <span><Link to="/signup/user" className={style.linkBut}>Cadastrar</Link></span>
                <span><Link to="/signup/restaurant" className={style.linkBut}>Cadastrar restaurante</Link></span>

            </div>
        </>
    );
}