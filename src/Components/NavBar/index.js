import { Link } from "react-router-dom"


export function NavBar(props) {

    function handleChange(e) {
        props.setTest((e.target.value).toLocaleLowerCase())
    }

    return (
        <div>
            <input type="search" placeholder="Busque por um restaurante por nome ou cidade!" onChange={handleChange}/>
            <Link to={"/search"}><button>Buscar</button></Link>
            <Link to={"/Login"}><button>Login</button></Link>
        </div>
    )
}