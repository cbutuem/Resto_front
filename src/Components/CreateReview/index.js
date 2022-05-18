import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../API/Api";


export function CreateReview() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        comment: "",
        rate: "",
    });

    const [img, setImg] = useState("");

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleImage(event) {
        setImg(event.target.files[0]);
    }

    async function handleUpload() {
        try {
            const uploadData = new FormData();
            uploadData.append("picture", img);

            const response = await api.post("/upload-restaurant-image", uploadData);
            return response.data.url;

        }   catch (error) {
            console.log(error);
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();

    }   try {
        const imgURL = await handleUpload();
        await api.post("/review/signup", { ...form, img: imgURL });
        navigate("/user");

    }   catch (error) {
        console.log(error);
    }


    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="formCommment">Descreva sua experiência:</label>
            <input
                id="formComment"
                name="comment"
                type="text"
                value={form.comment}
                onChange={handleChange}
            />
            <label htmlFor="formRate">Nota:</label>
            <input
                id="formRate"
                name="rate"
                type="number"
                value={form.rate}
                onChange={handleChange}
            />

            <button type="submit">Criar Avaliação</button>

        </form>

    )
}