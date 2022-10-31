import { useState, useEffect, useRef } from "react";

const Useref =() =>{
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    < >
     <div style={{textAlign:"center"}}>
     <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h4>Render Count: {count.current}</h4>
     </div>
    </>
  );
}
export default Useref;