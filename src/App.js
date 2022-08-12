import React from 'react'
import Primeiro from './components/Primeiro'
import Comparametro from './components/Comparametro'
import Fragmento from './components/Fragmento'
import Cartao from './components/modelo/Cartao'
import Numeros from './components/Numeros'
import './app.css'
import Foto from './components/Foto'
import Imagem from './images/teste.png'
import ListaFuncio from './components/ListaFuncio'
import Nome from './components/Nome'
import Formulario from './components/Formulario'
import Tarefas from './components/Tarefas'


export default function App() {


    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

            <div className='Cards'>
   
            <Cartao titulo='Lista de Tarefas' color='grey'>
                    <Tarefas />
                </Cartao>

                <Cartao titulo='Manipulando Formulário' color='grey'>
                    <Formulario />
                </Cartao>
                <Cartao titulo='Nome' color='grey'>
                    <Nome nome='Teste' />
                </Cartao>

                <Cartao titulo='Lista' color='grey'>
                    <ListaFuncio />
                </Cartao>

                <Cartao titulo='Imagem em React' color='#00FFFF'>
                    <Foto img={Imagem} />
                </Cartao>





                <Cartao titulo='Números aleatórios' color='#00ff00'>
                    <Numeros min={10} max={100} />
                </Cartao>

                <Cartao titulo='Primeiro componente React' color='purple' >
                    <Primeiro />
                </Cartao>



                <Cartao titulo='teste'></Cartao>

                <Cartao titulo='Primeiro componente com props' color='blue'>
                    <Comparametro titulo='Hoje é quarta-feira' subtitulo='03/08/2022' />
                </Cartao>

                <Cartao titulo='Primeiro componente com props' color='yellow'>
                    <Comparametro titulo='Aula de React' subtitulo='Parametros' />
                </Cartao>

                <Cartao titulo='Primeiro componente com props' color='green'>
                    <Comparametro titulo='titulo teste' />
                </Cartao>

                <Cartao titulo='Utilizando React.Fragment' color='#ffcbdb'>
                    <Fragmento />
                </Cartao>
            </div>
        </div>

    )
}