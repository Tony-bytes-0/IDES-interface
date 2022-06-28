import {Component} from 'react';
import logoImg from './logo-og.png';

const logo = {'display':'flex','width':'40%','borderRadius':'50%'}
const bigLogo = {'display':'flex','width':'100%'}

const base = {'display':'flex','marginTop':'1%','fontSize':'1.5vw',
'background':'tomato',
'padding':'2% 5% 0% 10%'}

const tittle = {'display':'flex','justifyContent':'center','fontSize':'1em','width':'50%'}
const input = {'display':'flex','width':'90%','height':'2.8em','margin':'2%'}
const form ={'display':'flex','flexDirection':'column','width':'50%',
'boxShadow':'4px 4px 5px 4px black','justifyContent':'center','padding':'2%','alignItems':'center'}

const button = {'width':'40%','height':'3em','padding':'1%','margin':'5% 5% 5% 5%','fontSize':'1.5vw'}
const buttonBox = {'display':'flex','flexDirection':'row','width':'100%'}

class Ingresar extends Component{
    remoteClick = function remoteClick(x){let objetiveBtn = document.getElementById(x)
        objetiveBtn.click()}

    render(){return<div id='Ingresar' style = {base} className='mainContent'>


    <div style = {tittle} className='contentBlock'>
        <img src={logoImg} alt='logo_Img' style={bigLogo}></img>   
    </div>
        <div style = {form} className='contentBlock'>
        <h5 style={{"margin":"auto","textAlign":"justify"}}>Sistema de Registro Nombre de Ejemplo: Francisco</h5>
        <img src={logoImg} alt='logo_Img' style={logo}></img>
            <h1>Ingresar</h1>
            <input type='text' style={input} placeholder='Nombre de Usuario'></input>
            <input type='text' style={input} placeholder='Contraseña'></input>
            <div style={buttonBox}>
            <button style={button} onClick={() => this.remoteClick('registroBtn')} >Registrarse</button>
            <button style={button} onClick={() => this.remoteClick("resumenBtn")}>Entrar</button>
            </div>
        </div>

    </div>}
}

export default Ingresar;