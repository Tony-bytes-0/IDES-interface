import {Component} from 'react';
import imgCancha from './147215.png';
import imgAtleta from './descarga.png';
import imgUsuario from './icone-utilisateur-gris.png';


const stats = {'display':'flex','background':'green','justifyContent':'center'}
const innerStats = {'display':'flex','flexDirection':'column','alignItems':'left','justifyContent':'left',
'boxShadow':'2px 2px 10px 2px black','margin':'1% 1% 8% 1%','width':'50%','fontSize':'1.3vw'}
const innerTitle = {"display":"flex" ,"padding":"4%","alignItems":"left","justifyContent":"left","fontSize":"3vw"}
const imgStyles = {'display':'flex','width':'20%','height':'100%','borderRadius':'70%','marginLeft':'20%'}

class Resumen extends Component{
    state = {instalaciones:2}
    render(){return<div id='Resumen' style ={stats} className='c'>

        <div style = {innerStats} className='contentBlock'>
            <div style = {innerTitle}>Instalaciones</div>
            <div style = {innerTitle}>{this.state.instalaciones}
                <img alt='instalaciones'src = {imgCancha} style={imgStyles}></img>
            </div>
        </div>

        <div style = {innerStats} className='contentBlock'>
            <div style = {innerTitle}>Usuario</div>
            <div style = {innerTitle}>{this.state.instalaciones}
            <img alt='instalaciones'src = {imgAtleta} style={imgStyles}></img>
            </div>
        </div>

        <div style = {innerStats} className='contentBlock'>
            <div style = {innerTitle}>Deportes</div>
            <div style = {innerTitle}>{this.state.instalaciones}
            <img alt='instalaciones'src = {imgUsuario} style={imgStyles}></img>
            </div>
        </div>
 

</div>}}

export default Resumen;