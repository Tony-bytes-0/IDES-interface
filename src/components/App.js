import {Component} from 'react';
import NavBar from './NavBar';
import Stats from './Stats';
import Resumen from './resumen';
import Ingresar from './ingresar';
import Registro from './registrarse';
import logoImg from './logo-og.png';
import './style.css';


const base = {'display':'flex','marginLeft':'12%','marginTop':'2%',
'background':'tomato','width':'88%','fontSize':'1.3vw',
'justifyContent':'center','alignItems':'center','flexDirection':'column'}
const sideBarBase = {'display':'flex !important','background':'purple','width':'17%','height':'98%','zIndex':'1',
'left':'0%','padding':'1%','flexDirection':'column',
'position':'fixed'}
const sideBarBox = {'display':'flex','width':'89%','height':'7%','margin':'5% 3% 0.5% 7%',
'boxShadow':'2px 2px 5px 2px black','fontSize':'2.1vw','justifyContent':'center','alignItems':'center',
'color':'inherit','background':'none','border':'0s'}
const logo = {'display':'flex','width':'89%','margin':'5% 3% 3% 7%','borderRadius':'50%'}
const popMsj = {'position':'fixed','width':'97vw','height':'97vw','justifyContent':'center','alignItems':'center',
'background':'black','opacity':'80%','zIndex':'50','left':'2%','top':'2%'}
const innerMsj = {'display':'flex','color':'white','margin':'auto'}

class Main extends Component{
    render(){return<div id='Resumen' style={base} className='mainContent'>
            <h1> Informacion General </h1>
            <Stats/>
            <Resumen />
</div>}}
class RegisterIntro extends Component{
    remoteClick = function remoteClick(x){let objetiveBtn = document.getElementById(x)
        objetiveBtn.click()}
    showHidden = function showHidden (x){let element = document.getElementById(x);element.style.display = "flex"}
    hidden = function hidden (x){let element = document.getElementById(x);element.style.display = "none"}}    

class App extends RegisterIntro{
    sideBar = function sideBar(){return(<nav id="sideBar" style={sideBarBase}>
        <img src = {logoImg} style ={logo} alt='logo'></img>
        <div style ={{'display':'flex','alignItems':'left','margin':'15% 0% 0% 10%','fontSize':'2vw'}}>Menu</div>
        <button id='resumenBtn' style ={sideBarBox} onClick={() => {this.setState({view:'Resumen'})}}>Resumen</button>
        <button style ={sideBarBox}>Instalaciones</button>
        <button style ={sideBarBox}>Atletas</button>
        <button style ={sideBarBox}>Deportes</button>
        <button style ={sideBarBox}>Usuarios</button>
        <button id='ingresarBtn' style ={sideBarBox} onClick={() => {this.setState({view:'Ingresar'})}}>Ingresar</button>
        <button id='registroBtn' style ={sideBarBox} onClick={() => {this.setState({view:'Registro'})}}>Registrate</button>
            
        <button id='popMsjBtn' className='hidden' onClick={() =>{this.showHidden('popMsj')}}></button>
        <div id='popMsj' className='hidden' onClick={() => {
            this.remoteClick('resumenBtn');
            this.hidden(('popMsj'))}} style={popMsj}><div style={innerMsj}>Registro Exitoso!</div></div>
    </nav>)}
    
    
    hideShow = function hideShow(){let sideBarBtn = document.getElementById("sideBar")
        console.log(sideBarBtn.style.display)

        if(sideBarBtn.style.display !== "flex"){sideBarBtn.style.display = "flex";
            sideBarBtn.style.visibility = "visible"
            console.log('condicion IF')}

        else{sideBarBtn.style.display = "none"
            console.log('entro al else')}

        function reportWindowSize() {
            var widthOutput= window.innerWidth;
            if(widthOutput > 501 && sideBarBtn.style.display === "none"){sideBarBtn.style.display = "flex"}
            else if(widthOutput < 500 && sideBarBtn.style.display === "flex"){sideBarBtn.style.display = "none"}
        }
        window.onresize = reportWindowSize;

    }
    
// ----------------------------------------------- aqui las vistas ---------------------------------------------------------------------
    state = {view:'Resumen'};
    changueView = function ChangueView(view) {//esto es para cambiar el estado, por ende, el componente que se muestra en el centro
        this.setState({active:view})}

    render(){
        if (this.state.view === 'Resumen'){
            return<>
            <button id="menuBtn" className="hidden invisibleBtn" onClick={() => {this.hideShow()}}></button>
            {this.sideBar()} 
                <NavBar />
                <Main />
        </>}

        else if(this.state.view === 'Ingresar'){
            return<>
            <button id="menuBtn" className="hidden invisibleBtn" onClick={() => {this.hideShow()}}></button>
            {this.sideBar()} 
                <NavBar />
                <Ingresar />
            </>
        }

        else if(this.state.view === 'Registro'){
            return<>
            <button id="menuBtn" className="hidden invisibleBtn" onClick={() => {this.hideShow()}}></button>
            {this.sideBar()} 
                <NavBar />
                <Registro/>
            </>
        }
        else{alert(this.state.view)
            return <>
            <button id="menuBtn" className="hidden invisibleBtn" onClick={() => {this.hideShow()}}></button>
                {this.sideBar()} 
                <NavBar />
                
            </>
        }
    }
}
export default App;