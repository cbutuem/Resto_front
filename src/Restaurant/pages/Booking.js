import { api } from "../../API/Api"
import React, {useEffect, useState} from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

export function Booking(){

    const [startDate, setStartDate] = useState(new Date())
    const [date, setDate] = useState("")
    const [user, setUser] = useState({})
    const [bookForm, setBookForm] = useState({
        data:"",
        horario: "",
        pessoas: 7,
    })

    /*useEffect(()=>{
        const usuario = localStorage.getItem(user)
        setUser(usuario)
    },[])*/

    function handleDate(date){
        setStartDate(date)

        
    }

    function handleChange(event) {

        function adicionaZero(numero){
            if (numero <= 9) 
                return "0" + numero;
            else
                return numero; 
        }

        const dataAtualFormatada = (adicionaZero(startDate.getDate()).toString()) + "/" + (adicionaZero(startDate.getMonth()+1).toString()) + "/" + startDate.getFullYear();
        setDate(dataAtualFormatada)

        setBookForm({ ...bookForm, [event.target.name]: event.target.value, data: date, user:"Hudson"});
    }

    async function sendMail(){
        try{
            console.log(bookForm)
            await api.post("mail/sendmail/628249a4e691f4d308080eb5", bookForm)
            
        } catch(error){
            console.log(error)}
    }

    return(
        <div className="booking">

        <h1>Reserva </h1>
        <p>Data:</p>
        <DatePicker selected={startDate} onChange={handleDate} />

        <p>Horário:</p>
        <select name="horario" onChange={handleChange} defaultValue=''>
            <option value="" disabled hidden></option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
            <option value="00:00">00:00</option>
        </select>

        <p>Número de Pessoas:</p>
        <input type="number" name="pessoas" onChange={handleChange}></input>

        <br/>

        <button onClick={sendMail}>Enviar Email</button>
        </div>
    )
}
