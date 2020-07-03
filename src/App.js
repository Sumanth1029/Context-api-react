import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Themeprovider from './contexts/Theme';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <Themeprovider>
     <Navbar/>
     <Booklist/>
     <Toggle/>
     </Themeprovider>
    </div>
  );
}

export default App;
