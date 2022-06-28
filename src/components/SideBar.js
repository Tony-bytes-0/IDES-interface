import {Component} from 'react';

const sideBarBase = {'background':'purple','width':'12%','height':'98%','zIndex':'1',
'left':'0%','marginLeft':'5px',
'rowDirection':'column','position':'fixed','opacity':'50%'}
class SideBar extends Component{
    render(){return<>
    
        <nav>
            <div id='sideBar' style={sideBarBase}>
                <p>LA DEL LADO!</p>
            </div>
        </nav>

    </>}
}
export default SideBar;