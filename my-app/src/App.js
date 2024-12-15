// import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Rahul Jangir"
  let arr = [56,82,25,28]
  let status = true
  return (
    <div className="App">
     <h1 style={{color:"pink"}}> hii  this is app </h1>
     <h2> My name is {name} </h2>
     <h3> My array elements are {arr} </h3>
     {
      arr.map((v)=>{
        return <p key={v}>{v}</p>
        
      })
     }
       {
      (status)? <h1>welcome</h1>
      : ""
     }
    </div>


   
  );
}

export default App;
