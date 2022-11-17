import { useState } from "react"

const FeedbackItem = () =>{

    //Estados: persisten informacion a traves del ciclo de vida
    //de un unico componente 

    //estados iniciales
    const[rating, setRating ] = useState(2)
    const[text, setText ] = useState("Mejorar curso, mejores recursos")

    const cambiarNota=()=>{
        //cambiar estado a rating
        //parametro para el valor anterior
        setRating((prev)=>{
            return prev +1

        })
    }

    const restarNota=()=>{
        //cambiar estado a rating
        //parametro para el valor anterior
        setRating((prev)=>{
            return prev -1

        })
    }

    return (
        <div className="card">
        <div className="num-display">
            { rating }
        </div>
        <div className="text-display">
            { text }
        </div>
        
        <button className="btn-secondary" onClick={ cambiarNota }>
            Sumar nota
        </button>
        <br />
        <button onClick={ restarNota }>
             Restar nota
        </button>
        <br />
       
    </div>
    )

}

export default FeedbackItem
