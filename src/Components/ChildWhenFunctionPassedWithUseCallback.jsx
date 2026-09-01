import { useRef,memo } from "react";


const ChildWhenFunctionPassedWithUseCallback=memo(({handleClick})=>{

    const renderCounter=useRef(0);
    renderCounter.current++;
    return <>

        Child component when function is passed to it and useCallback is used -{renderCounter.current}

    </>
})


export default ChildWhenFunctionPassedWithUseCallback;