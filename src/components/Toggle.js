import React,{Component} from 'react';
import { Themecontext } from '../contexts/Theme';

class Toggle extends Component {

    static contextType=Themecontext

    render() { 
        const {toggleTheme}=this.context

        return ( 
        
            <button onClick={toggleTheme}>Toggle Theme</button>
         );
    }
}
 
export default Toggle;