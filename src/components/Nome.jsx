import React from "react";
import {useState} from 'react';

export default function Nome(){

const [nome, setNome] = useState('B22')


function trocarNome(){
   // alert('Trocar')
   setNome('Diego')
};


    return(
        <>
          <h2>Olá: {nome} </h2>
          <button onClick={trocarNome}>Trocar nome</button>

        </>
    )
}