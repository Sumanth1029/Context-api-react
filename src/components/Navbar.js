import React, { Component } from 'react';
import { Themecontext } from '../contexts/Theme';

class Navbar extends Component {



    render() {

        


        return (


            <Themecontext.Consumer>{(context) => {
                const { islight, light, dark } = context

        const theme = islight ? light : dark

                return (
                    <nav style={{ background: theme.ui, color: theme.txtcolor }}>
                        <h1>Context</h1>
                        <ul>
                            <li>home</li>
                            <li>home2</li>
                            <li>home3</li>


                        </ul>

                    </nav>)
            }}
            </Themecontext.Consumer>
            
            )
    }
}
export default Navbar;