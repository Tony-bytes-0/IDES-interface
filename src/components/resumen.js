import {Component} from 'react';
import img from './arena-de-fútbol-.webp';

const base = {'display':'flex', 'background':'red','boxShadow':'2px 2px 10px 2px black','padding':'2%'}
const imgStyles = {'width':'30%','margin':'0% 0% 0% 25%','borderRadius':'40%'}

class Main extends Component{
    render(){return<div style = {base} className='contentBlock'>
    
            <p style={{"display":"flex"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quo facilis dolorem, 
                consequatur et repudiandae ea nemo enim temporibus! Ducimus accusantium hic 
                vero debitis dolore non quasi, enim omnis necessitatibus! 
            </p>
            <img alt = 'cancha' src = {img} style = {imgStyles}></img>
            
    
    </div>}
}
export default Main;