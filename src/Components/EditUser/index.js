// import style from "./Forms.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../API/Api";


export function EditUser(props) {

    const navigate = useNavigate();
 
    const [date, setDate] = useState({
        day: "",
        month: "",
        year: ""
    });
    const [form, setForm] = useState({
        name: "",
        birth: "",
        city: "",
        favType: [],
        imgUser: ""
    });

    function handleDate(event){
        setDate({ ...date, [event.target.name]: event.target.value });
        setForm({ ...form, 'birth': `${date.year}-${date.month}-${date.day}`});
        console.log(form);
    }
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log("HUNT",form);
    }


    async function handleSubmit(event) {
        event.preventDefault();
        try {
        // const imgURL = await handleUpload();
        await api.post("/user/update-profile", { ...form });
        navigate("/user-profile");
        props.setdialogChangeItem(false);

    }   catch (error) {
        console.log(error);
    }};


    return (
        <>

            <div>                
                <dialog open={props.dialogChangeItem}>

                <form  onSubmit={handleSubmit}>
                    <input value={props.name} name="name" onChange={handleChange} />
                    <input value={props.city} name="city" onChange={handleChange} />
                </form>
                </dialog>
            </div>  
        </>
        );

};