import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import Themeprovider from "./contexts/Theme";
import Toggle from "./components/Toggle";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Themeprovider>
          <Navbar />
          <Booklist />
          <Toggle />
        </Themeprovider>
      </AuthProvider>
    </div>
  );
}

export default App;
