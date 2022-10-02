import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import {useState} from 'react'


function App() {
  // this function takes the count of cart item from main
    const [count2, setcount2]= useState(0);
    function handleCard3(count){
        setcount2(count);
    }

  return (
    <div className="App">

      <Header count={count2}/>
      <Main updatecart2={handleCard3}/>
      <Footer/> 
    </div>
  );
}

export default App;
