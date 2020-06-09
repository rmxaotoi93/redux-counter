import React ,{useState}from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {Form,FormControl,Button} from 'react-bootstrap'
function App() {
  const count = useSelector(state => state.count)
  const color = useSelector(state => state.color)
  const dispatch = useDispatch();
  
  
  
  // let boxList = ()=>{
  //   return <div style={{width: 200, height: 50, backgroundColor: `${color}`,marginTop: 20}}>
  //     <Form inline>
  //     <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => dispatch({type:"CHANGECOLOR",payload:e.target.value})}/>
     
  //   </Form>
  //   </div>
  // }

  return (
    <div className="App">
    <h1>{count}</h1>
    <Button onClick={() => dispatch({ type: "INCREMENT" , payload:color})} >Increment</Button>
    <Button onClick={() => dispatch({ type: "DECREMENT" , payload:color})}>Decrement</Button>
    <Button onClick={() => dispatch({ type: "RESET" , payload:color})}>Reset</Button>

    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => dispatch({type:"CHANGECOLOR",payload:e.target.value})}/>

    </Form> */}

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => dispatch({type:"CHANGECOLOR",payload:e.target.value})}/>
     
    </Form>
    {Array(count).fill(<div style={{width: 200, height: 50, backgroundColor: `${color}`,marginTop: 20, margin:'0 auto'}} >
    <Form inline>
      <FormControl type="text" placeholder="Each box" className="mr-sm-2" onChange={(e) => dispatch({type:"CHANGECOLOR",payload:e.target.value})} />
      
    </Form>
    </div>)}
  
  </div>
  );
}

export default App;
