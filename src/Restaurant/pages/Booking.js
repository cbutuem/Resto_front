import { api } from "../../API/Api"
import React, {useState} from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

export function Booking(){

    const [startDate, setStartDate] = useState(new Date())
    const [week, setWeek] = useState("")
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState("")
    const [year, setYear] = useState(2022)
    

    const [bookForm, setBookForm] = useState({
        dia:week,
        diames:day,
        mes:month,
        ano:year,
        horario: "",
        pessoas: 7,
    })

    function handleDate(date){
        setStartDate(date)

        const dia = startDate.getDay()

        if(dia===0){setWeek("Domingo")}
        if(dia===1){setWeek("Segunda-feira")}
        if(dia===2){setWeek("Terça-feira")}
        if(dia===3){setWeek("Quarta-feira")}
        if(dia===4){setWeek("Quinta-feira")}
        if(dia===5){setWeek("Sexta-feira")}
        if(dia===6){setWeek("Sábado")}

        const mes = startDate.getMonth()

        if(mes===0){setMonth("Janeiro")}
        if(mes===1){setMonth("Fevereiro")}
        if(mes===2){setMonth("Março")}
        if(mes===3){setMonth("Abril")}
        if(mes===4){setMonth("Maio")}
        if(mes===5){setMonth("Junho")}
        if(mes===6){setMonth("Julho")}
        if(mes===7){setMonth("Agosto")}
        if(mes===8){setMonth("Setembro")}
        if(mes===9){setMonth("Outubro")}
        if(mes===10){setMonth("Novembro")}
        if(mes===11){setMonth("Dezembro")}

        setDay(startDate.getDate())
        setYear(startDate.getFullYear())

        setBookForm({ ...bookForm, dia:week, diames:day, mes:month, ano:year})
    }

    function handleChange(event) {
        setBookForm({ ...bookForm, [event.target.name]: event.target.value });
    }

    async function sendMail(){
        try{ 
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
        <select name="horario" onChange={handleChange}>
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
