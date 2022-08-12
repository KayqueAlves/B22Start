import React from "react";
import { useState } from "react";


export default function Formulario(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState(0)

    const [user, setUser] = useState({})

    function registrar(e){
        alert( 'Usuário registrado!')
        e.preventDefault()


        setUser({
            nome: nome,
            idade: idade,
            email: email,
        })
        setNome('')
        setIdade('')
        setEmail('')
    }

    //nome (" ")
       // setNome('nome')

    return(
        <div>
            <form onSubmit={registrar}>
                <h1>Cadastrando usuário</h1>
                <label>Nome: </label><br/>
                <input placeholder="Digite seu nome"  value={nome} onChange={(e)=> setNome(e.target.value)}/><br/>

                <label>Email: </label><br/>
                <input placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>

                <label>Idade: </label><br/>
                <input placeholder="Digite seu idade"
                value={idade} onChange={(e) => setIdade(e.target.value)}
                /><br/><br/>

                <button type="submit">Registrar</button>


            </form>

            <br/>

            <div>
                <span>Bem vindo(a):{user.nome}</span><br/>
                <span>Idade: {user.idade}</span><br/>
                <span>Email: {user.email}</span><br/>
            </div>
            
        </div>
    )
}