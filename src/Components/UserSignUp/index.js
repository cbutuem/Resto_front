import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../"


export function Signup() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        birth: "",
        email: "",
        password: "",
        city: "",
        favType: "",
        imgUser: ""
    });

    const [img, setImg] = useState("");

    return
}