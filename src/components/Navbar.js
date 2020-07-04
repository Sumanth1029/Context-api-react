import React, { Component } from "react";
import { Themecontext } from "../contexts/Theme";
import AuthProvider, { AuthContext } from "../contexts/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <Themecontext.Consumer>
            {(context) => {
             
             const {isAuth,toggleAuth}=authContext

             const { islight, light, dark } = context;

              const theme = islight ? light : dark;

              return (
                <nav style={{ background: theme.ui, color: theme.txtcolor }}>
                  <h1>Context</h1>
                  <div onClick={toggleAuth}>
                      {isAuth?"loggged in":"logged out"}
                  </div>
                  <ul>
                    <li>home</li>
                    <li>home2</li>
                    <li>home3</li>
                  </ul>
                </nav>
              );
            }}
          </Themecontext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
export default Navbar;
