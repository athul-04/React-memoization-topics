
import { useRef } from "react";


const ChildWithOutMemo = () => {
  const renderCount=useRef(0)
  renderCount.current++;

  return<>
    Child without memo count- {renderCount.current}
  </>
};


export default ChildWithOutMemo;