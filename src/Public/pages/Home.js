import { Carousel } from "bootstrap";
import { useNavigate } from "react-router";
import { Carrossel } from "../../Components/Carrosel";
import style from "./home.module.css"
import { useState, useEffect } from "react";
import { api } from "../../API/Api";
import { Link } from "react-router-dom"

export function Home(){
    const [user, setUser] = useState([]);
    useEffect(() => {
        async function fetchUser() {
            const response = await api.get("/restaurant/all-restaurants");
            setUser(response.data);
        }
        fetchUser();
    }, []);
    return(
        <>
            {/*<Carrossel/>*/}
            <div className={style.boxCat}>
                <div className={style.boxFilter}>
                    <h2>Cidade</h2>
                    <div className={style.boxLine}>
                        {user.filter((user)=>{
                            return user.city.includes("São Paulo")}).map((restaurant)=>{
                                return(<Link to={`/restaurantpage/${restaurant._id}`} className={style.link}><ul><h1>{restaurant.name}</h1></ul></Link>)})}
                    </div>
                </div>
                <div className={style.boxFilter}>
                    <h2>Japones</h2>
                    <div className={style.boxLine}>
                        {user.filter((user)=>{
                            return user.foodCategory.includes("Japones")}).map((restaurant)=>{
                                return(<Link to={`/restaurantpage/${restaurant._id}`} className={style.link}><ul><h1>{restaurant.name}</h1></ul></Link>)})}
                    </div>
                </div>
                <div className={style.boxFilter}>
                    <h2>Italiano</h2>
                    <div className={style.boxLine}>
                        {user.filter((user)=>{
                            return user.foodCategory.includes("Italiana")}).map((restaurant)=>{
                                return(<Link to={`/restaurantpage/${restaurant._id}`} className={style.link}><ul><h1>{restaurant.name}</h1></ul></Link>)})}
                    </div>        
                </div>
            </div>
        </>
    );    

}