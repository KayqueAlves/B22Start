import { useState,useEffect } from "react"

export default function Tarefas() {
const[input,setInput] = useState('')
const[tarefas,setTarefas] = useState([
    'Estudar JS',
    'Estudar React',
])

useEffect(()=>{
    const tarefasStorage = localStorage.getItem
    ('@tarefa')

    if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage))
    }
}, [])

useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
}, [tarefas])

function registrar(event){
    //alert('Tarefa registrada')
    event.preventDefault()
    setTarefas([...tarefas, input])
    setInput('')
}


    return(
        <div>
            <h2>Tarefas</h2>
            <form onSubmit={registrar}>
                <label>Nome da tarefa:</label>
                <input placeholder='Digite uma tarefa' value ={input} on onChange={(event)=> setInput(event.target.value)}/><br />
                <button type="submit">Registrar</button>
            </form>
            <div>
                <ul>
                    {tarefas.map(tarefas =>(
                        <li key={tarefas}>{tarefas}</li>
                     ))}
                </ul>
            </div>
        </div>
    )
    
}