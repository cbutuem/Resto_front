import { Link } from "react-router-dom"
import style from "./navbar.module.css"


export function NavBar(props) {

    function handleChange(e) {
        props.setTest(e.target.value)
    }

    return (

        <div className = {style.bar}>
    
                <h1><Link to={"/"} className = {style.logo}>Resto</Link></h1>
                <div className = {style.search}>
                    <span className = {style.inputBar}><input type="search" placeholder="Busque por um restaurante por nome ou cidade!" onChange={handleChange}/></span>
                    <span className = {style.buttonBar}><Link to={"/search"}><button>Buscar</button></Link></span>
                </div>
                <div className = {style.login}>
                <span><Link to={"/Login"}><button>Login</button></Link></span>
                </div>
      

        </div>
    )
}