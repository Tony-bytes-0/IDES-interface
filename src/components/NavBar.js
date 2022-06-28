import {Component} from 'react';
import logoImg from './logo-og.png';

const base = {'background':'aqua','width':'88%','height':'20%','zIndex':'2','fontSize':'2.2vw',
'display':'flex','margin':'0% 0% 0% 11%','padding':'1%'}
const input = {'display':'flex' ,'width':'50%','margin':'0% 1% 0% 0%'}
const button = {'display':'flex','width':'20%', 'background':'inherit','border':'0','margin':'auto','fontSize':'1.7vw'}
const registerBtn = {'display':'flex','height':'6vw','background':'inherit','fontSize':'1.7vw'}
const logoStyles ={'display':'flex','width':'10%','margingLeft':'5%'}

const buttonBox = {'display':'flex','flexDirection':'column','width':'26vw','height':'4vw'}
const hiddenBtn = {'width':'20vw','height':'8vw','fontSize':'2vw','zIndex':'20','background':'gray',
    'borderRadius':'40%','margin':'5%','padding':'5%'}


class NavBar extends Component{

    hideShow = function hideShow(){let hiddenContent = document.getElementById("hiddenNavBarBlock")
    console.log(hiddenContent.style.display)
    
    if(hiddenContent.style.display === "none" || hiddenContent.style.display === ""){hiddenContent.style.display = "flex";
            console.log('condicion IF')}

        else{hiddenContent.style.display = "none"
            console.log('entro al else')}
    }

    remoteClick = function remoteClick(x){let objetiveBtn = document.getElementById(x)
        objetiveBtn.click()
    }

    render(){return<>
    
        <nav id="navBar" className="navBar" style = {base}>
            <img src = {logoImg} alt = 'logo' style = {logoStyles}/>
                <input type="text" style = {input}
                    placeholder=" Buscar Instalaciones o Deportes"
                    name="search"/>
                    <button style ={button}>
                        Explorar Centros
                    </button>
            <div style={buttonBox}>
                <button style={registerBtn} onClick={() => {this.hideShow()}}>Ingresar</button>
                <div id='hiddenNavBarBlock' className='hidden hiddenBox'>
                    <button   style={hiddenBtn} onClick = {() =>{this.remoteClick("ingresarBtn"); this.hideShow()}}>Iniciar Sesion</button>
                    <button   style={hiddenBtn} onClick = {() =>{this.remoteClick("registroBtn"); this.hideShow()}}>Registrarse</button> 
                </div>
            </div>
            

            
        </nav>

    </>}
}
export default NavBar;