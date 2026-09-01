import {useState,useMemo,useCallback} from "react"
import './App.css'
import ChildWithOutMemo from "./Components/ChildWithOutMemo";
import ChildWithMemo from "./Components/ChildWithMemo";

import ChildWhenDynamicPropValueWithoutUseMemo from "./Components/ChildWhenDynamicPropValueWithoutUSeMemo";
import ChildWhenDynamicPropValueWithUseMemo from "./Components/ChildWhenDynamicPropValueWithUseMemo";

import ChildWhenFunctionPassedWithOutUseCallback from "./Components/ChildWhenFunctionPassedWithOutUseCallback";
import ChildWhenFunctionPassedWithUseCallback from "./Components/ChildWhenFunctionPassedWithUseCallback";
function App() {
  const [render, setRendered] = useState(1);
  const obj={
    id:1
  }

  const obj2=useMemo(()=>{
    return {
      id:1
    }
  },[])

  const handleClickWithOutUseCallback=()=>{
    console.log("Clicked")
  }
  const handleClickWithUseCallback=useCallback(()=>{
    console.log("clicked")
  },[])



  return (
    <>
      <h1>Parent Render Count - {render}</h1>
      <button onClick={() => setRendered(prev => prev + 1)}>
        Render Parent
      </button>
      <br/>
      <ChildWithOutMemo />
      <br/>

      <ChildWithMemo/>

      <br/>

      <ChildWhenDynamicPropValueWithoutUseMemo obj={obj} />

      <br/>

      <ChildWhenDynamicPropValueWithUseMemo obj={obj2}/>

      <br/>

      <ChildWhenFunctionPassedWithOutUseCallback handleClick={handleClickWithOutUseCallback}/>


      <br/>
      <ChildWhenFunctionPassedWithUseCallback handleClick={handleClickWithUseCallback}/>
      

    </>
  );
}

export default App
