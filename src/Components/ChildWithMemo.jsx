
import { useRef,memo } from "react";


const ChildWithMemo = () => {
  const renderCount=useRef(0)
  renderCount.current++;

  return<>
    Child with memo count- {renderCount.current}
  </>
};


export default memo(ChildWithMemo);