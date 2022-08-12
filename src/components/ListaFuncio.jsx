import React from "react";
import funcionario from '../data/funcionarios'



export default (props)=>{

    const lista = funcionario.map((funcionario) => {
        return(
            <li key={funcionario.id}> 
                {funcionario.id} - {funcionario.nome}
            </li>
        )
    })



    return(

        <div>
            <ul>
                {lista}
            </ul>
        </div>

    )
}