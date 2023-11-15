import React from "react";
import Navbar from "./components/navbar/Navbar";
import './App.css'
import Banner from "./components/banner/Banner";
import Rowpost from "./rowpost/Rowpost";
import {action,originals} from './urls'
function App() {
  return (
    <div className="App">
      <header className="App-header">
<Navbar/>
<Banner/>
<Rowpost url={action} title='Netflix originals'/>
<Rowpost url={originals} title='Action' isSmall/>

      </header>
    </div>
  );
}

export default App;
