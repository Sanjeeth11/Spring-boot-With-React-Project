import React ,{ useState } from "react";


function Counter(){
const [count,setCount] = useState(0);
const [pro,setPro] = useState(5);
const [sub, setSub] = useState(1);


const add = ()=>{
setCount(count+1);
}
const product = ()=>{
    setPro(pro*5);
    }

const Subtraction = () => {
    setSub(sub - 1);
}    

    return (
        <div>
            <p>Hello React</p>
            <div>{count}</div>
            <div><button onClick={add}> Increment button</button></div>
            <div>{pro}</div>
            <div><button onClick={product}> Multiply button</button></div>
            <div>{sub}</div>
            <div><button onClick={Subtraction}> Subtraction button</button></div>
            
            </div>
    );
}
export default Counter;