import { useRef,memo } from "react";


const ChildWhenFunctionPassedWithOutUseCallback=memo(({handleClick})=>{

    const renderCounter=useRef(0);
    renderCounter.current++;
    return <>

        Child component when function is passed to it and useCallback is not used -{renderCounter.current}

    </>
})


export default ChildWhenFunctionPassedWithOutUseCallback;