import { useRef,memo } from "react";

const ChildWhenDynamicPropValueWithUseMemo=memo((props)=>{

    console.log(props.obj.id)

    const renderCounter=useRef(0);

    renderCounter.current++;

    return <>
        Child render count when memo is used but values passed to it is a object and optimized using useMemo hook - {renderCounter.current}

    </>
})


export default ChildWhenDynamicPropValueWithUseMemo;