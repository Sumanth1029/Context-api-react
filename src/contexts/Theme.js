import React,{createContext,Component} from 'react';

export const Themecontext=createContext()


class Themeprovider extends Component {
    state = { 
        islight:true,
        
        light:{txtcolor:'#555',ui:'#ddd',bg:'#eee'},

        dark:{txtcolor:'#ddd',ui:'#333',bg:'#555'}
        
     }


     toggleTheme=()=>{
         this.setState({islight:!this.state.islight})
     }

    render() { 
        return (
        <Themecontext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
            {this.props.children}
        </Themecontext.Provider>);
    }
}
 
export default Themeprovider;