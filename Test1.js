import { useState } from "react"

function Test1(){

    const [index, setIndex] = useState(0);

    const  array =[
        [   "React is simple"],
        [   "Javascript is Simple"],
        [   "Java is simple"],
        [   "SpringBoot is simple"],
        [   "Spring is simple"],
        [   "Advance Java is simple"],

    ]

    return (
        <div>
             <div class="button-container">
    <button 
    className={index === 0 ?"active":""}
    onClick={()=> setIndex(0)}>React</button>

    <button 
    className={index === 1 ?"active":""}
    onClick={()=> setIndex(1)}>Javascript</button>

<button 
    className={index === 2 ?"active":""}
    onClick={()=> setIndex(2)}>Java</button>
    
<button 
    className={index === 3 ?"active":""}
    onClick={()=> setIndex(3)}>SpringBoot</button>
    
    <button 
    className={index === 4 ?"active":""}
    onClick={()=> setIndex(4)}>Spring</button>
    
    <button 
    className={index === 5 ?"active":""}
    onClick={()=> setIndex(5)}>Advance Java</button>
   

       <ul class="unorderedlist">
        {
            array[index].map(
                item => (
                    <li>
                        {item}
                    </li>
                )
            )
        }
       </ul>
       </div>
    </div>


);
}

export default Test1;