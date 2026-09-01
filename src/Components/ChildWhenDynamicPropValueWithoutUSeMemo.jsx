import { useRef,memo } from "react";

const ChildWhenDynamicPropValueWithoutUseMemo=memo((props)=>{

    // console.log(props.obj.id)

    const renderCounter=useRef(0);

    renderCounter.current++;

    return <>
        Child render count when memo is used but values passed to it is a object - {renderCounter.current}

    </>
})


export default ChildWhenDynamicPropValueWithoutUseMemo;