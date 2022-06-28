import {Component} from 'react';
import logoImg from './logo-og.png';

const logo = {'display':'flex','width':'20%','borderRadius':'50%'}
const bigLogo = {'display':'flex','width':'50%'}

const base = {'display':'flex','marginTop':'1%',
'background':'tomato','fontSize':'2vw',
'padding':'2% 5% 0% 10%'}
const V_box = {'display':'flex','margin':'0.5vw'}
const option = {'display':'flex','height':'4vw','margin':'0.5vw'}
const tittle = {'display':'flex','alignItems':'center','justifyContent':'center','flexDirection':'column'}
const input = {'display':'flex','width':'80%','height':'3vw','margin':'0.5vw'}
const form ={'display':'flex','flexDirection':'column','width':'50%',
'boxShadow':'4px 4px 5px 4px black','justifyContent':'center','padding':'5%','alignItems':'center'}


class Registro extends Component{
    remoteClick = function remoteClick(x){let objetiveBtn = document.getElementById(x)
        objetiveBtn.click()}
    render(){return<div id='Registrarse' className='mainContent' style = {base}>
    <img src={logoImg} alt='logo_Img' style={bigLogo} className='contentBlock'></img>


        <div style = {form} className='contentBlock'>
            <div style = {tittle}>
            <img src={logoImg} alt='logo_Img' style={logo}></img>
            Sistema de Registro
            Nombre de Ejemplo: Francisco
            </div>
            <input placeholder='Ingresar un Nombre de Usuario' type='text' style={input}></input>

            <div style ={V_box}>
                <select style={option}>
                    <option style={option}>V</option>
                    <option style={option}>J</option>
                    <option style={option}>E</option>
                </select>
                <input placeholder='Ingrese su Cedula' type='number' style={input}></input>
            </div>

            <input placeholder='Ingrese su Correo Electronico' type='text' style={input}></input>
            <input placeholder='Ingrese Su Contraseña' type='text' style={input}></input>
            <input placeholder='Repita Su Contraseña' type='text' style={input}></input>
            <button onClick={() => {this.remoteClick("registroBtn"); this.remoteClick('popMsjBtn')}} style={{'width':'40%','height':'10%','padding':'2%','margin':'6%','fontSize':'2vw'}}>Registrarse</button>
        </div>

    </div>}
}

export default Registro;