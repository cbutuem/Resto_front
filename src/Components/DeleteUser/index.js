import { api } from "../../API/Api";


export function DeleteItem(props) {


    function handleDelete() {
        api.delete(`https://ironrest.herokuapp.com/retrogeh/${props.id}`)
        setTimeout(() => {window.location.reload()}, 500)
    }



    return(
        <button onClick={handleDelete}>Delete Item</button>
    );
}